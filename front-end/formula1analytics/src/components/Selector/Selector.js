import React, { useState } from 'react';
import { Select } from 'antd';
import './Selector.css';
import 'antd/dist/antd.css';

const { Option } = Select;

function Selector(props) {
    //Insert the available options into the selector
    //TODO: Need to get options from props and put into useState() param
    const [options, setOptions] = useState(null);

    const children = props.options.map((value) => {
        return (<Option value={value}>{value}</Option>);
    })

    return (
        <div className="selector">
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={[]}
                onChange={(props.onChange)}
                allowClear={true}
            >
                {children}
            </Select>
        </div>
    );
}

export default Selector;
