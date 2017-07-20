var React = require('react');
var ReactDOM = require('react-dom');
import BodyChild from './bodyChild';

import PropTypes from 'prop-types';

export default class BodyIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: 'tang',
      text: '1111'
    };
  }

  handleClick(val){
    this.setState({username: val});
  }
  childChange(event){
    this.setState({text: event.target.value});
  }

  handleChange(event){
    this.setState({username: event.target.value});
  }
  render(){
    return (
      <div>
        <h3>这是主体部分</h3>
        <p>{this.props.userId}</p>
        <input type="text" onChange={this.handleChange.bind(this)}/>
        <p>{this.state.username}</p>
        <button onClick={this.handleClick.bind(this,99)}>你好世界</button>

        <BodyChild {...this.props} ttt={3} childChange={this.childChange.bind(this)} />
        <p>{this.state.text}</p>
      </div>
    )
  }

}
BodyIndex.propTypes = {
  userId: PropTypes.number
};

BodyIndex.defaultProps = {
  userId: 1
};
