var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './component/header';
import ComponentFooter from './component/footer';
import BodyIndex from './component/bodyIndex';
require('./sass/style.scss');

class Index extends React.Component {
  render(){
    return (
      <div>
        <ComponentHeader />
        <BodyIndex t={1} tt={2}/>
        <ComponentFooter/>
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,document.getElementById('example')
)
