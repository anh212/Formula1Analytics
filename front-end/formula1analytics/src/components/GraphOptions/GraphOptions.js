import React from 'react';
import { Row, Col } from 'antd';
import './GraphOptions.css';
import 'antd/dist/antd.css';
import Selector from '../Selector/Selector';



function GraphOptions() {
    return (
        <Row className="GraphOptions" gutter={[24, 16]}>
            <Col span={4}>
                <Selector />
            </Col>
            <Col span={4}>
                <Selector />
            </Col>
            <Col span={4}>
                <Selector />
            </Col>
            <Col span={4}>
                <Selector />
            </Col>
        </Row>
    );
}

export default GraphOptions;
