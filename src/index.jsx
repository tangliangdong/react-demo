var React = require('react');
var ReactDOM = require('react-dom');
import { Link,Switch,Route } from 'react-router-dom';
import ComponentHeader from './component/header';
import ComponentFooter from './component/footer';
import BodyIndex from './component/bodyIndex';
require('./sass/style.scss');
import List from './component/list';
import Detail from './component/detail';

export default class Index extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/list/111">list</Link></li>
          <li><Link to="/detail">detail</Link></li>
        </ul>
        <Switch>
          <Route path='/list/:id' component={List}/>
          <Route path='/detail' component={Detail}/>
        </Switch>

      </div>
    )
  }
}
// ReactDOM.render(
//   <Index />,document.getElementById('example')
// )
