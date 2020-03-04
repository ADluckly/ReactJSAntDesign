import React from 'react';
import {
    Button,
    Typography,
    Form,
    Slider,
    Select,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import '../task/AntTask.css';

const { Title } = Typography;

const Ant = () => (
    <div className="App">
        <Form>
            <Title level={4}>Ant Design</Title>
            <img className="image" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
            <Form.Item label="数字输入框" labelCol={{span:6}} wrapperCol={{span:7}}>
                <InputNumber />
                <span> 台机器</span>
                <a>链接文字</a>
            </Form.Item>
            <Form.Item label="开关" labelCol={{span:6}} wrapperCol={{span:2}}>
                <Switch defaultChecked/>
            </Form.Item>
            <Form.Item label="滑动输入条" labelCol={{span:6}} wrapperCol={{span:7}}>
                <Slider defaultValue={20} />
            </Form.Item>
            <Form.Item label="选择器" labelCol={{span:6}} wrapperCol={{span:4}}>
                <Select>
                    <Select.Option value="Option1">Option1</Select.Option>
                    <Select.Option value="Option2">Option2</Select.Option>
                    <Select.Option value="Option3">Option3</Select.Option>
                    <Select.Option value="Option4" disabled>Option4</Select.Option>
                    <Select.Option value="Option5">Option5</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="日期选择框" labelCol={{span:6}} wrapperCol={{span:5}}>
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Button type="primary" >确定</Button>
                <Button style={{marginLeft: 10}}>取消</Button>
            </Form.Item>
        </Form>
    </div>
);

export default Ant;