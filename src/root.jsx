import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter, Route,Link,BrowserHistory } from 'react-router-dom';
import { browserHistory,Router } from 'react-router'
import List from './component/list';
import Index from './index';
import Detail from './component/detail';

export default class Root extends React.Component{

  render(){
    return (
      <div>
        <p>hello world</p>
        <HashRouter history={browserHistory} >
          <Index />

        </HashRouter>

      </div>

    )
  }
}

ReactDOM.render(
  <Root />,document.getElementById('example')
)
