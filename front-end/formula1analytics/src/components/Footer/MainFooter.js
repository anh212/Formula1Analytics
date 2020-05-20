import React from 'react';
import { Layout } from 'antd';
import './MainFooter.css';
import 'antd/dist/antd.css';

const { Footer } = Layout;

function MainFooter() {
  return (
    <div className="MainFooter">
        <Footer className="footer" style={{ textAlign: 'center' }}>Created by Andrew H.</Footer>
    </div>
  );
}

export default MainFooter;
