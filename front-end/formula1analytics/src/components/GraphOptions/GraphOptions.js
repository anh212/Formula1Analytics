import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import './GraphOptions.css';
import 'antd/dist/antd.css';
import Selector from '../Selector/Selector';
import SingleSelector from './SingleSelector/SingleSelector';
import { getYears, getDriverInfo, getConstructorInfo } from '../../api/api'

function GraphOptions(props) {
    //Options for drivers
    const [seasons, setSeasons] = useState(null);
    const [drivers, setDrivers] = useState(null);
    const [constructors, setConstructors] = useState(null);
    const [stats, setStats] = useState(props.stats);
    const [seasonSelected, setSeasonSelected] = useState(null);
    const [driversSelected, setDriversSelected] = useState(null);
    const [constructorsSelected, setConstructorsSelected] = useState(null);
    const [statSelected, setStatSelected] = useState(null);

    //Functions for changing state of options selected
    async function selectSeason(season) {
        //Need to reload possible choices for drivers, constructors, and stats if change in data type
        console.log(season);

        setDriversSelected(null);
        setConstructorsSelected(null);
        setStatSelected(null);

        //If no selection is made then this removes selector for drivers
        if (season === undefined || season === null) {
            setSeasonSelected(null);
            return;
        }

        //Need to load data for next set of options
        if (props.dataType === 'drivers') {
            let driversData = await getDriverInfo(season);
            console.log(driversData);

            //Need to convert array into map key: driver full name (givenName + familyName), value: driverId
            let driversMap = new Map();
            
            driversData.map((driver) => {
                driversMap.set(driver.givenName + " " + driver.familyName, driver.driverId);
            })
            console.log(driversMap);
            //Store drivers as a map
            await setDrivers(driversMap);
        } else {
            let constructors = getConstructorInfo(season);
            setConstructors(constructors);
        }
        
        //Set season
        setSeasonSelected(season);
    }

    function selectDrivers(drivers) {
        //If no selection made then this would remove the statistics selector
        if (drivers === undefined || drivers.length == 0) {
            // array empty or does not exist
            setDriversSelected(null);
        } else {
            setDriversSelected(drivers);
        }
    }

    function selectConstructors(constructors) {
        //If no selection made then this would remove the statistics selector
        if (constructors === undefined || constructors.length == 0) {
            // array empty or does not exist
            setConstructorsSelected(null);
        } else {
            setConstructorsSelected(constructors);
        }
    }

    function selectStatistic(statistic) {
        //If no selection made then this would remove the visualize button
        if (statistic === undefined || statistic.length == 0) {
            // array empty or does not exist
            setStatSelected(null);
        } else {
            setStatSelected(statistic);
        }
    }

    async function setSeasonsData() {
        console.log('use effect');
        console.log(props.dataType);
        if (props.dataType !== null) {
            if (seasons === null) {
                let years = await getYears();
                setSeasons(years);
            }
        }
    }

    //Set data for available seasons when 
    setSeasonsData();

    //Populate array with elements depending on type of stats wanted
    let selectors = [];

    // //Load all seasons
    // //Only needs to render once
    // useEffect(async () => {
        
    // }, []);

    //Check which selectors need to be rendered depending on existing options that have been selected
    //Needs to be checked every render
    console.log(props.dataType);
    console.log(seasons);
    console.log(drivers);
    if (props.dataType === 'drivers') {
        if (seasons !== null) {
            selectors.push(<Col span={4}><SingleSelector onChange={selectSeason} options={seasons}/></Col>);
        }
        if (seasonSelected !== null) {
            selectors.push(<Col span={4}><Selector onChange={selectDrivers} options={Array.from(drivers.keys())}/></Col>);
        }
        if (driversSelected !== null) {
            selectors.push(<Col span={4}><SingleSelector onChange={selectStatistic} options={stats}/></Col>);
        }
        if (statSelected !== null) {
            selectors.push(<Col span={4}><Button>Visualize</Button></Col>);
        }
    } else if (props.dataType === 'constructors') {
        if (seasons !== null) {
            selectors.push(<Col span={4}><SingleSelector onChange={selectSeason} options={seasons}/></Col>);
        }
        if (seasonSelected !== null) {
            selectors.push(<Col span={4}><Selector onChange={selectConstructors} options={constructors}/></Col>);
        }
        if (constructorsSelected !== null) {
            selectors.push(<Col span={4}><SingleSelector onChange={selectStatistic} options={stats}/></Col>);
        }
        if (statSelected !== null) {
            selectors.push(<Col span={4}><Button>Visualize</Button></Col>);
        }
    }
    console.log(selectors);

    return (
        <Row className="GraphOptions flex-container wrap" gutter={[24, 16]}>
            {selectors}
        </Row>
    );
}

export default GraphOptions;
