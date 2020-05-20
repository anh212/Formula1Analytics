import React from 'react';
import { Select } from 'antd';
import './Selector.css';
import 'antd/dist/antd.css';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
function Selector() {
    return (
        <div className="selector">
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={[]}
                onChange={handleChange}
            >
                {children}
            </Select>
        </div>
    );
}

export default Selector;
