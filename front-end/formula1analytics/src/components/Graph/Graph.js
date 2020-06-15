import React, { useEffect, useRef, useState} from 'react';
import './Graph.css';
import 'antd/dist/antd.css';
import Line from './GraphTypes/Line/Line';
import Bar from './GraphTypes/Bar/Bar';
import { getDriverWins, getPolePositions, getFastestLaps, getLapsLed, getConstructorWinsAndPoints } from '../../api/api';

function Graph(props) {
  const [drivers, setDrivers] = useState(null);
  const [constructors, setConstructors] = useState(null);
  const [data, setData] = useState(null);
  // const [title, setTitle] = useState(null);

  let graph = null;

  //Make API call depending on type of data being requested
  async function retrieveDriverData() {
    if (props.dataType === 'drivers') {
      if (props.stat === 'Number of Wins') {
        let promises = props.drivers.map(async (driver) => {
          let data = await getDriverWins(props.season, props.driverMap.get(driver));
          return data;
        });
    
        //Handle array of promises
        try {
          let driverWins = await Promise.all(promises);
          setData(driverWins);
          console.log(data);
        } catch (error) {
          console.log(error);
        }


      } else if (props.stat === 'Number of Pole Positions') {
        let promises = props.drivers.map(async (driver) => {
          let data = await getPolePositions(props.season, props.driverMap.get(driver));
          return data;
        });
    
        //Handle array of promises
        try {
          let driverPoles = await Promise.all(promises);
          setData(driverPoles);
        } catch (error) {
          console.log(error);
        }
      } else if (props.stat === 'Number of Fastest Laps') {
        let promises = props.drivers.map(async (driver) => {
          let data = await getFastestLaps(props.season, props.driverMap.get(driver));
          return data;
        });
    
        //Handle array of promises
        try {
          let driverFastestLaps = await Promise.all(promises);
          setData(driverFastestLaps);
        } catch (error) {
          console.log(error);
        }
      } else if (props.stat === 'Number of Laps Led') {
        let promises = props.drivers.map(async (driver) => {
          let data = await getLapsLed(props.season, props.driverMap.get(driver));
          return data;
        });
    
        //Handle array of promises
        try {
          let driverLapsLed = await Promise.all(promises);
          setData(driverLapsLed);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  async function retrieveConstructorData() {
    console.log(props.dataType);
    if (props.dataType === 'constructors') {
      console.log("constructor pass");
      if (props.stat === 'Number of Wins') {
        let promises = props.constructors.map(async (constructor) => {
          let data = await getConstructorWinsAndPoints(props.season, props.constructorMap.get(constructor));
          return data.wins;
        });
    
        //Handle array of promises
        try {
          let constructorWins = await Promise.all(promises);
          setData(constructorWins);
        } catch (error) {
          console.log(error);
        }
      } else if (props.stat === 'Standings (Total Points)') {
        let promises = props.constructors.map(async (constructor) => {
          let data = await getConstructorWinsAndPoints(props.season, props.constructorMap.get(constructor));
          return data.points;
        });

        //Handle array of promises
        try {
          let constructorWins = await Promise.all(promises);
          setData(constructorWins);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  //Call API again everytime season or drivers change
  useEffect(() => {
    //Get data from API call to put into graph
    retrieveDriverData();
  }, [props.season, props.drivers, props.stat]);

  //Call API again everytime season or constructor changes
  useEffect(() => {
    console.log("retrieve constructor data");
    retrieveConstructorData();
  }, [props.season, props.constructors, props.stat]);

  console.log(props.stat);

  if (props.dataType === 'drivers') {
    if (props.stat === 'Number of Wins') {
      console.log(data);
      console.log(props.drivers);
      graph = <Bar stat={props.stat} labels={props.drivers} data={data}/>
    } else if (props.stat === 'Number of Pole Positions') {
      console.log(data);
      console.log(props.drivers);
      graph = <Bar stat={props.stat} labels={props.drivers} data={data}/>
    } else if (props.stat === 'Number of Fastest Laps') {
      console.log(data);
      console.log(props.drivers);
      graph = <Bar stat={props.stat} labels={props.drivers} data={data}/>
    } else if (props.stat === 'Number of Laps Led') {
      console.log(data);
      console.log(props.drivers);
      graph = <Bar stat={props.stat} labels={props.drivers} data={data}/>
    }
  } else if (props.dataType === 'constructors') {
    if (props.stat === 'Number of Wins') {
      console.log(data);
      console.log(props.constructors);
      graph = <Bar stat={props.stat} labels={props.constructors} data={data}/>
    } else if (props.stat === 'Standings (Total Points)') {
      console.log(data);
      console.log(props.constructors);
      graph = <Bar stat={props.stat} labels={props.constructors} data={data}/>
    }
  }

  return (
    <div>
      {graph}
    </div>
  );
}

export default Graph;
