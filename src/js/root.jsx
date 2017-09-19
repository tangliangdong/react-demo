import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter, Route,Link,BrowserHistory } from 'react-router-dom';
import { browserHistory,Router } from 'react-router';
import { Button,Icon } from 'antd';
import MediaQuery from 'react-responsive';
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';

import pc from './../sass/pc';

export default class Root extends React.Component{

  render(){
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <PCIndex />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <MobileIndex />
        </MediaQuery>

      </div>
    )
  }
}

ReactDOM.render(
  <Root />,document.getElementById('root')
)
