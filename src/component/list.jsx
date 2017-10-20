import React from 'react';
import ReactDOM from 'react-dom';

import ComponentHeader from './header';
import ComponentFooter from './footer';
import BodyIndex from './bodyIndex';

export default class List extends React.Component{

  render(){
    return (
      <div>
        <h3>这是传递过来的id值 {this.props.match.params.id}</h3>
        <ComponentHeader />
        <BodyIndex t={1} tt={2}/>
        <ComponentFooter/>
        <div>
          {this.props.children}
        </div>
      </div>

    )
  }
}
