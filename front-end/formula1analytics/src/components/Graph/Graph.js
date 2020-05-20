import React from 'react';
import { Layout } from 'antd';
import './Graph.css';
import 'antd/dist/antd.css';
import GraphOptions from '../GraphOptions/GraphOptions';

const { Content } = Layout;

function Graph() {
  return (
    <div className="graph-layout">
      <Content style={{ padding: '0 0px' }}>
        <div className="site-layout-content">
          <GraphOptions />
        </div>
      </Content>
    </div>
  );
}

export default Graph;
