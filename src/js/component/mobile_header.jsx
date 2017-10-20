import React from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Button,
  Message,
  Form,
  Modal,
  Input,
  Tabs,
  CheckBox
} from 'antd';
var MobileCss = require('../../sass/mobile.scss');

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class MobileHeader extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    };

    // 给事件绑上this参数
    this.handleClick = this.handleClick.bind(this);

  };

  login(){
    this.setModalVisible(true);
  };

  handleClick(e) {
    if (e.key == "register") {
      this.setModalVisible(true);
    }
    this.setState({current: e.key});
  };

  /**
   * 页面向API进行提交数据
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  handleSubmit(e) {
    e.preventDefault();
    var myFetchOption = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldValue();

    let myHeaders = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'});
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch('http://localhost:9090/app/login?account=' + values.r_userName + '&passwd='+values.r_password+'&uuid=11111', {
          method: 'POST',
          mode: 'cors'
        }).then(response => response.json()).then(json => {
          // this.setState({userNickName: json})
          console.log(json);
        });
        Message.success('请求成功');
        this.setModalVisible(false);
      }
    });
  }

  setModalVisible(value) {
    this.setState({modalVisible: value});
  }

  render(){
    const {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined?
      <Link>
        <Icon type="inbox" />登录
      </Link>
      :
      <Icon type="setting" onClick={this.login.bind(this)}>设置</Icon>
    return (
      <div className={MobileCss.mobileHeader}>
        <header>
          <img src={require('../../img/logo.png')} alt="logo"/>
          <span>M ReactNews</span>
          {userShow}
        </header>

        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(true)}>
          <Tabs type="card">
            <TabPane tab="注册" key="2">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账号">
                  {getFieldDecorator('r_userName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!'
                      }
                    ]
                  })(<Input type="text" placeholder="请输入您的账号"/>)}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('r_password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!'
                      }
                    ]
                  })(<Input type="password" placeholder="请输入您的密码"/>)}
                </FormItem>
                <FormItem label="确认密码">
                  {getFieldDecorator('r_confirmPassword', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!'
                      }
                    ]
                  })(<Input type="password" placeholder="请再次输入您的密码"/>)}
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}
export default MobileHeader = Form.create({})(MobileHeader)
