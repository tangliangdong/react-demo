var React = require('react');
var ReactDOM = require('react-dom');

export default class BodyChild extends React.Component{

  render(){

    return (
      <div>
        <input type="text" onChange={this.props.childChange}/>
        <p>{this.props.t}</p>
        <p>{this.props.tt}</p>
        <p>{this.props.ttt}</p>
      </div>
    )
  }
}
