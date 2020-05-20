import React from 'react';
import { Layout } from 'antd';
import './Graph.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

function Graph() {
  return (
    <div className="Graph">
        <Layout className="layout">
            <Content style={{ padding: '0 0px' }}>
                <div className="site-layout-content"></div>
            </Content>
        </Layout>
    </div>
  );
}

export default Graph;
