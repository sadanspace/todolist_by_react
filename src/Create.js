import React from 'react';
import { Input, Card } from 'antd';
import 'antd/lib/input/style';
import 'antd/lib/card/style';


export default props =>
    (<Card title="请输入待办事宜" style={{ width: 300 }}>
        <p><Input placeholder="please input" onPressEnter={event => {props.onCreate(event)}} /></p>
    </Card>);