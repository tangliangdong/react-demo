var React = require('react');
var ReactDOM = require('react-dom');
var footerCss = require('../sass/footer.scss');

export default class Footer extends React.Component{

  render(){
    console.log(footerCss);
    return (
      <h2 class={footerCss.footer}>这是页脚</h2>
    )
  }
}
