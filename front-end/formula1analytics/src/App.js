import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navigation from './components/Navigation/Navigation';
import MainFooter from './components/Footer/MainFooter'
import { Layout } from 'antd';
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navigation />
        <ContentSection />
        <MainFooter />
      </Layout>
    </div>
  );
}

export default App;
