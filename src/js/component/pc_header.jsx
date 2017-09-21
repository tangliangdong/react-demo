import React from 'react';
import { Row,Col } from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  Message,
} from 'antd';
import { Link,Switch,Route,BrowserRouter } from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
var PcCss = require('../../sass/pc.scss');
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import fetchJsonp from 'fetch-jsonp';

class PCHeader extends React.Component{

  constructor(){
    super();
    this.state={
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0,
    }
  }

  handleClick(e){
    if(e.key=="register"){
      this.setModalVisible(true);
    }
    this.setState({
      current: e.key,
    });
  }

  handleSubmit(e){
    // 页面开始提交数据
    e.preventDefault();
    var myFetchOption = {
      method: 'GET',
    };
    var $this = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // fetch('http://http://106.15.51.155:9021//app/login?account=' + values.r_userName + '&passwd='+values.r_password+'&uuid=11111', {
        //   method: 'POST',
        //   mode: 'cors'
        // }).then(response => response.json()).then(json => {
        //   // this.setState({userNickName: json})
        //   console.log(json);
        // });
        fetchJsonp('http://106.15.51.155:9021/app/login?account=' + values.r_username + '&passwd='+values.r_password+'&uuid=11111', {
          jsonpCallback: 'callback'
        })
        .then(function(response) {
          return response.json();
        }).then(function(json) { // 转成json字符串
          console.log('parsed json', json)
          $this.setState({
            hasLogined: true,
            userNickName: json.realName,
            userId: json.userId,
          })
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
        Message.success('请求成功');
        this.setModalVisible(false);
      }
    });

  }

  setModalVisible(value){
    this.setState({
      modalVisible: value
    })
  }

  render(){
    let {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class={PcCss.register}>
          <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
          &nbsp;&nbsp;
            <BrowserRouter>
              <Link to="/person">
                <Button type="dashed" htmlType="button">个人中心</Button>
              </Link>
            </BrowserRouter>
          &nbsp;&nbsp;
          <Button type="ghost" htmlType="button">退出</Button>
        </Menu.Item>
        :
      <Menu.Item key="register" class={PcCss.register}>
        <Icon type="appstore" />注册/登录
      </Menu.Item>

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/"  class={PcCss.logo}>
              <img src={require('../../img/logo.png')} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
              <Menu.Item key="top">
                <Icon type="appstore"/>头条
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore"/>娱乐
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore"/>科技
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore"/>体育
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore"/>时尚
              </Menu.Item>
              {userShow}
            </Menu>
            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
              onCancel={()=>this.setModalVisible(false)}
              onOk={()=>this.setModalVisible(false)} okText="关闭">
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      {getFieldDecorator('r_username')(
                        <Input placeholder="请输入您的账号" />
                      )}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('r_password')(
                        <Input type="password" placeholder="请输入您的密码" />
                      )}
                    </FormItem>
                    <FormItem label="账户">
                      {getFieldDecorator('r_comfirmPassword')(
                        <Input type="password" placeholder="请再次输入您的密码" />
                      )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit">注册</Button>
                    </FormItem>

                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
export default  PCHeader = Form.create({})(PCHeader);
