import React from 'react';
import { Input, Card } from 'antd';
import 'antd/lib/input/style';
import 'antd/lib/card/style';

const Create = ({ onCreate }) => {
    const handleCreate = (e) => onCreate(e)

    return (
        <Card title="请输入待办事宜" style={{ width: 300 }}>
            <p>
                <Input placeholder="please input" onPressEnter={handleCreate} />
            </p>
        </Card>
    )
}

export default Create
