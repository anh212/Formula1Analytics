import React from 'react';
import { Layout } from 'antd';
import './ContentSection.css';
import 'antd/dist/antd.css';
import GraphOptions from '../GraphOptions/GraphOptions';
import Graph from '../Graph/Graph';

const { Content } = Layout;

function ContentSection() {
  return (
    <div className="contentSection-layout">
      <Content style={{ padding: '0px' }}>
        <div className="site-layout-content">
          {/*TODO: Get options chosen in GraphOptions and send to Graph, then make different 
          graph components to render depending on settings chosen
          Also need to create JS file for handling API calls
          Also find way to cache calls for single seasons*/}
          <GraphOptions />
          <Graph />
        </div>
      </Content>
    </div>
  );
}

export default ContentSection;
