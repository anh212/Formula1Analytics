import React from 'react';
import { Layout, Menu } from 'antd';
import './Navigation.css';
import 'antd/dist/antd.css';

const { Header } = Layout;

function Navigation() {
    return (
        <div className="Navigation">
            <Header className="header">
                <div className="logo" >
                    <p className="website-name">Formula 1 Analytics</p>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
                    <Menu.Item key="1">Drivers</Menu.Item>
                    <Menu.Item key="2">Constructors</Menu.Item>
                </Menu>
            </Header>
        </div>
    );
}

export default Navigation;
