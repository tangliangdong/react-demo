import React from 'react';
import { Row,Col } from 'antd';
var pcCss = require('../../sass/pc.scss');

export default class PCFooter extends React.Component{

  render(){
    return (
      <div class="footer">
        <Row>
          <Col span={2}>
          </Col>
          <Col span={20} class={pcCss.align_center}>
            &copy;&nbsp; 2017 ReactNews. All Rights Reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
