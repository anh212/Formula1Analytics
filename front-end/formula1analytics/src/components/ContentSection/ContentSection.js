import React from 'react';
import { Layout } from 'antd';
import './ContentSection.css';
import 'antd/dist/antd.css';
import GraphOptions from '../GraphOptions/GraphOptions';
import Graph from '../Graph/Graph';
// import { data } from './testData.json';

const { Content } = Layout;

//Statistics for drivers
const driverStats = ['Number of Wins', 'Number of Pole Positions', 'Number of Fastest Laps', 'Number of Laps Led'];

//Statistics for Constructors
const constructorStats = ['Number of Wins', 'Standings (Total Points)'];

function ContentSection(props) {
  console.log("Content section: " + props.dataType);

  return (
    <div className="contentSection-layout">
      <Content style={{ padding: '0px' }}>
        <div className="site-layout-content">
          {/*TODO: Get options chosen in GraphOptions and send to Graph, then make different 
          graph components to render depending on settings chosen
          Also need to create JS file for handling API calls
          Also find way to cache calls for single seasons*/}
          <GraphOptions dataType={props.dataType} stats={props.dataType === 'drivers' ? driverStats : constructorStats}/>
          <Graph />
        </div>
      </Content>
    </div>
  );
}

export default ContentSection;
