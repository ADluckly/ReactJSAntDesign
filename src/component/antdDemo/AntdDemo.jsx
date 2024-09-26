import React from 'react';
import './antdDemo.css'
import { Form, InputNumber,Row,Col,Switch,Slider,Select,DatePicker,Button } from 'antd';
import moment from 'moment';


const { Option } = Select;

const dateFormat = 'YYYY/MM/DD';

export default class AntdDemo extends React.Component{
 
  constructor(props){
    super(props);

    this.state = {
      number:3,
      switchOperation:true,
      progress: 30,
      selectOperation:'Lucy',
      date:'',
      size: 'middle'
    }
  }

  handleClick = ()=>{
    console.log(this.state);
  }

  handleChange = (type,e)=>{
    this.setState({
      [type]: e
    })
    
  }

  formatDate = (value)=>{
    const date = moment(value).format(dateFormat);
    this.setState({
      date: date
    })
  }
  
  render(){

    return(
      <div>
        <Row>
        <Col span={6}></Col>
        <Col span={12}>
        <div>
          <div>
              <div className="logo">
              <h3>Antd Design</h3>
              <img  className="img"  alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
            </div>
          </div>
          
          <Form>
            
            <Form.Item label="数字输入框" colon="true" labelCol={{span: 5, offset: 5}}>  
             <InputNumber min={1} max={10} defaultValue={this.state.number} onChange={this.handleChange.bind(this,"number")}/>台机器&nbsp;&nbsp;
             <a href="https://ant.design">链接文字</a>
            </Form.Item>

            <Form.Item label="开关" labelCol={{span: 5, offset: 5}}>
              <Switch  defaultChecked={this.state.switchOperation} onChange={this.handleChange.bind(this,"switchOperation")}/>
            </Form.Item>

            <Form.Item  label="滑动输入条" labelCol={{span: 5, offset: 5}}>
              <Slider defaultValue={this.state.progress}  onChange={this.handleChange.bind(this,"progress")}/>
            </Form.Item>

            <Form.Item label="选择器" labelCol={{span: 5, offset: 5}}>
              <Select defaultValue={this.state.selectOperation} style={{ width: 200 }} onChange={this.handleChange.bind(this,"selectOperation")}>
                  <Option value="jack" disabled="true">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Marry">Marry</Option>
                  <Option value="Bee">Bee</Option>
              </Select>
            </Form.Item>  
            
            <Form.Item label="日期选择框" labelCol={{span: 5, offset: 5}}>
              <DatePicker placeholder="Select date" format={dateFormat} onChange={this.formatDate}/>
            </Form.Item>
            
          </Form>
          <div>
              <div className="bottom">
              <Button type="primary"  size={this.state.size} onClick={this.handleClick}>确定</Button>&nbsp;&nbsp;
              <Button type="default"  size={this.state.size}>取消</Button>
            </div>
            </div>
        </div>
        </Col>
        <Col span={6}></Col>
      </Row>
      </div>
      
      
    )
  }
}