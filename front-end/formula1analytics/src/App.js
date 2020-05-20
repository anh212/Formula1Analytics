import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navigation from './components/Navigation/Navigation';
import Graph from './components/Graph/Graph';
import MainFooter from './components/Footer/MainFooter'
import { Layout } from 'antd';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <Graph />
        <MainFooter />
      </Layout>
    </div>
  );
}

export default App;
