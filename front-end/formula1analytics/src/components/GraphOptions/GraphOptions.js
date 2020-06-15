import React, { useState, useEffect } from 'react';
import './GraphOptions.css';
import 'antd/dist/antd.css';
import DriversOptions from './DriversOptions/DriversOptions';
import ConstructorsOptions from './ConstructorOptions/ConstructorsOptions';

function GraphOptions(props) {

    function loadDriversData(season, drivers, stat, driversMap) {
        props.onVisualize(season, drivers, stat, driversMap);
    }

    function loadConstructorData(season, constructors, stat, constructorMap) {
        props.onVisualize(season, constructors, stat, constructorMap);
    }

    return (
        <div>
            {props.dataType === 'drivers' ? <DriversOptions className="wrap" loadDriversData={loadDriversData} stats={props.stats}/> : null}
            {props.dataType === 'constructors' ? <ConstructorsOptions loadConstructorData={loadConstructorData} stats={props.stats}/> : null}
        </div>
    );
}

export default GraphOptions;
