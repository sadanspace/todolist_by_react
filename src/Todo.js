import { Checkbox } from 'antd';
import { Col, Row } from 'antd';
import React from 'react';
import 'antd/lib/col/style';
import 'antd/lib/row/style';
import 'antd/lib/checkbox/style';


export default props => (
    <Card style={{width:300}}>
        <Row>
            <Col span={4}>
                <Checkbox checked={props.todo.completed} onChange={event => {props.onChange(event, props.todo.key)}}/>
            </Col>
            <Col span={20}>
                {props.todo.title}
            </Col>
        </Row>
    </Card>
   );