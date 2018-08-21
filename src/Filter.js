import React from 'react';
import { Select } from 'antd';
import 'antd/lib/select/style';


const Option = Select.Option;

export default props => (
    <Select defaultValue="completed"  onChange={props.onFilter}>
      <Option value="all">全部</Option>
      <Option value="completed">已完成</Option>
      <Option value="uncompleted">未完成</Option>
    </Select>);