import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navigation from './components/Navigation/Navigation';
import MainFooter from './components/Footer/MainFooter';
import { Layout } from 'antd';
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  //Data type can either be 'drivers' or 'constructors'
  const [dataType, setDataType] = useState(null);

  function handleDataTypeChange(dataType) {
    setDataType(dataType);
    console.log("data type changed: " + dataType)
  }

  return (
    <div className="App">
      <Layout>
        <Navigation onDataTypeChange={handleDataTypeChange}/>
        <ContentSection dataType={dataType}/>
        <MainFooter />
      </Layout>
    </div>
  );
}

export default App;
