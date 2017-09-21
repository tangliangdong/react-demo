import React from 'react';
import { Button,Icon } from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';
var pcCss = require('../../sass/pc.scss');

export default class PCIndex extends React.Component{

  render(){
    return (
      <div>
        <PCHeader />
        <PCNewsContainer />
        <PCFooter />
      </div>
    )
  }
}
