import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import './GraphOptions.css';
import 'antd/dist/antd.css';
import Selector from '../Selector/Selector';
import SingleSelector from './SingleSelector/SingleSelector';
import { getYears, getDriverInfo, getConstructorInfo } from '../../api/api'
import DriversOptions from './DriversOptions/DriversOptions';
import ConstructorsOptions from './ConstructorOptions/ConstructorsOptions';

function GraphOptions(props) {
    return (
        <div>
            {props.dataType === 'drivers' ? <DriversOptions stats={props.stats}/> : null}
            {props.dataType === 'constructors' ? <ConstructorsOptions stats={props.stats}/> : null}
        </div>
    );
}

export default GraphOptions;
