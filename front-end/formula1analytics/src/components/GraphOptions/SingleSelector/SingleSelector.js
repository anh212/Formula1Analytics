import React from 'react';
import { Select } from 'antd';
import './SingleSelector.css';
import 'antd/dist/antd.css';

const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

function SingleSelector(props) {
  console.log("Single selector options: " + props.options);
  
  //Load options
  let options = [];

  props.options.map((option) => {
      options.push(<Option value={option.toString()}>{option.toString()}</Option>);
  })

  return (
    <div className="contentSection-layout">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={props.onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) => {
            return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }}
        allowClear={true}
        >
        {options}
      </Select>
    </div>
  );
}

export default SingleSelector;
