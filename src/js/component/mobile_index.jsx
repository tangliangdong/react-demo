import React from 'react';
import { Button,Icon } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
var MobileCss = require('../../sass/mobile.scss');

export default class MobileIndex extends React.Component{

  render(){
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab="头条" key="1">123</TabPane>
          <TabPane tab="社会" key="2">123</TabPane>
          <TabPane tab="国内" key="3">123</TabPane>
          <TabPane tab="国际" key="4">123</TabPane>
          <TabPane tab="娱乐" key="5">123</TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}
