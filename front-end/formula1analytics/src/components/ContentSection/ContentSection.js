import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import './ContentSection.css';
import 'antd/dist/antd.css';
import GraphOptions from '../GraphOptions/GraphOptions';
import Graph from '../Graph/Graph';

const { Content } = Layout;

//Statistics for drivers
const driverStats = ['Number of Wins', 'Number of Pole Positions', 'Number of Fastest Laps', 'Number of Laps Led'];

//Statistics for Constructors
const constructorStats = ['Number of Wins', 'Standings (Total Points)'];

function ContentSection(props) {
  const [renderGraph, setRenderGraph] = useState(false);

  //Set state for graph input options
  const [seasonSelected, setSeasonSelected] = useState(null);
  const [driversSelected, setDriversSelected] = useState(null);
  const [constructorsSelected, setConstructorsSelected] = useState(null);
  const [statSelected, setStatSelected] = useState(null);
  const [driverMap, setDriverMap] = useState(null);
  const [constructorMap, setConstructorMap] = useState(null);

  function renderDriverData(season, drivers, stat, driversMapping) {
    //Change the state to allow graph to render
    setSeasonSelected(season);
    setDriversSelected(drivers);
    setStatSelected(stat);

    //Need to get data for graph to render
    setDriverMap(driversMapping);

    setRenderGraph(true);
  }
  
  function renderConstructorData(season, constructors, stat, constructorMapping) {
    setSeasonSelected(season);
    setConstructorsSelected(constructors);
    setStatSelected(stat);

    //Need to get data for graph to render
    setConstructorMap(constructorMapping);

    setRenderGraph(true);
  }

  //Need useEffect to remove graph from view if we change dataType
  useEffect(() => {
    setRenderGraph(false);
  }, [props.dataType])

  console.log("Content section: " + props.dataType);
  console.log(seasonSelected);
  console.log(driversSelected);
  console.log(constructorsSelected);
  console.log(statSelected);
  console.log(driverMap);

  return (
    <div className="contentSection-layout">
      <Content style={{ padding: '0px' }}>
        <div className="site-layout-content">
          {/*TODO: Get options chosen in GraphOptions and send to Graph, then make different 
          graph components to render depending on settings chosen
          Also need to create JS file for handling API calls
          Also find way to cache calls for single seasons*/}
          {props.dataType !== null ? <GraphOptions onVisualize={props.dataType === 'drivers' ? renderDriverData : renderConstructorData} dataType={props.dataType} stats={props.dataType === 'drivers' ? driverStats : constructorStats}/> : null}
          {renderGraph ? (props.dataType === 'drivers' ? 
          <Graph dataType={props.dataType} season={seasonSelected} drivers={driversSelected} stat={statSelected} driverMap={driverMap}/> :
          <Graph dataType={props.dataType} season={seasonSelected} constructors={constructorsSelected} stat={statSelected} constructorMap={constructorMap}/>) : null }
        </div>
      </Content>
    </div>
  );
}

export default ContentSection;
