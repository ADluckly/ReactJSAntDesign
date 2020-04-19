import React from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import './App.css';
import Panel from './component/panel/Panel'
import Flex from './component/flex/Flex'
import LayoutPanel from './component/layout/LayoutPanel'
const { Option } = Select;

const App = () => (
  <>
   <section style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Ant Design</h1>
      <img style={{ width: '40px', height: '40px' }} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    </section>
    <Form style={{ marginTop: 30 }}>
      <Form.Item label="数字输入框" labelCol={{ xs: 7, sm: 7, md: 9, lg: 9, xl: 9, xxl: 9, offset: 1 }} wrapperCol={{ xs: 16, sm: 16, md: 14, lg: 14, xl: 14, xxl: 14 }}>
        <InputNumber min={1} max={10} defaultValue={3} />
        <span className="ant-form-text"> 台机器</span>
        <a href="https://ant.design">链接文字</a>
      </Form.Item>
      <Form.Item label="开关" labelCol={{ xs: 7, sm: 7, md: 9, lg: 9, xl: 9, xxl: 9, offset: 1 }} wrapperCol={{ xs: 16, sm: 16, md: 14, lg: 14, xl: 14, xxl: 14 }}>
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item label="滑动输入条" labelCol={{ xs: 7, sm: 7, md: 9, lg: 9, xl: 9, xxl: 9, offset: 1 }} wrapperCol={{ xs: 8, sm: 8, md: 6, lg: 6, xl: 6, xxl: 6 }}>
        <Slider defaultValue={70} />
      </Form.Item>
      <Form.Item label="选择器" labelCol={{ xs: 7, sm: 7, md: 9, lg: 9, xl: 9, xxl: 9, offset: 1 }} wrapperCol={{ xs: 16, sm: 16, md: 14, lg: 14, xl: 14, xxl: 14 }}>
        <Select defaultValue="lucy" style={{ width: 192 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>disabled</Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item label="日期选择框" labelCol={{ xs: 7, sm: 7, md: 9, lg: 9, xl: 9, xxl: 9, offset: 1 }} wrapperCol={{ xs: 16, sm: 16, md: 14, lg: 14, xl: 14, xxl: 14 }}>
        <DatePicker />
      </Form.Item>
      {/* 空行 */}
      <Form.Item></Form.Item>
      <Form.Item label=" " colon={false} labelCol={{ xs: 7, sm: 7, md: 9, lg: 9, xl: 9, xxl: 9, offset: 1 }} wrapperCol={{ xs: 16, sm: 16, md: 14, lg: 14, xl: 14, xxl: 14 }}>
        <Button type="primary" htmlType="submit">
          确定
        </Button>
        {/* <Button type="danger" shape="round" htmlType="submit">
          警告
        </Button> */}
        <Button style={{ marginLeft: 8 }}>
          取消
        </Button>
      </Form.Item>
      {/* <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Panel></Panel>
      </Form.Item> */}
    </Form>
    {/* <Flex></Flex> */}
    {/* <LayoutPanel></LayoutPanel> */}
  </>
);

export default App;
