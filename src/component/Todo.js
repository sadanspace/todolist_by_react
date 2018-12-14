import { Checkbox } from 'antd';
import { Card, Col, Row } from 'antd';
import React from 'react';
import 'antd/lib/col/style';
import 'antd/lib/row/style';
import 'antd/lib/checkbox/style';
import 'antd/lib/card/style';

const Todo = ({ todo, onChange }) => {
    const handleChange = (e) => onChange(e, todo.key)

    return (
        <Card style={{width:300}}>
            <Row>
                <Col span={4}>
                    <Checkbox checked={todo.completed} onChange={handleChange} />
                </Col>
                <Col span={20}>
                    {todo.title}
                </Col>
            </Row>
        </Card>
    )
}


export default Todo
