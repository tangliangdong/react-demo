import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route,Link,IndexRoute } from 'react-router-dom';
import { Button,Icon } from 'antd';
import MediaQuery from 'react-responsive';
import PCIndex from './component/pc_index';
import MobileIndex from './component/mobile_index';
import PCNewsDetail from './component/pc_news_detail';

import pcCss from './../sass/pc.scss';

export default class Root extends React.Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <MediaQuery minDeviceWidth={1224}>
            <Route exact path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetail} />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            <MobileIndex />
          </MediaQuery>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Root />,document.getElementById('root')
)
