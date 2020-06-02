import React from 'react';
import { Layout, Menu } from 'antd';
import './Navigation.css';
import 'antd/dist/antd.css';

const { Header } = Layout;

function Navigation(props) {
    return (
        <div className="Navigation">
            <Header className="header">
                <div className="logo" >
                    <p className="website-name">Formula 1 Analytics</p>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
                    <Menu.Item onClick={() => props.onDataTypeChange('drivers')} key="drivers">Drivers</Menu.Item>
                    <Menu.Item onClick={() => props.onDataTypeChange('constructors')} key="constructors">Constructors</Menu.Item>
                </Menu>
            </Header>
        </div>
    );
}

export default Navigation;
