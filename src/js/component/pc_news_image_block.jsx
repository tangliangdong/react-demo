import React from 'react';
import {Card} from 'antd';
import {BrowserRouter, HashRouter, Route, BrowserHistory, Link} from 'react-router-dom';
import {browserHistory, Router} from 'react-router';

import PCNewsDetail from './pc_news_detail';
var pcCss = require('../../sass/pc.scss');

export default class PCNewsImageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ''
    };
  }

  componentWillMount() {
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type + '&count=' + this.props.count, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json()).then(json => {
      this.setState({news: json})
      console.log(json);
    });
  }

  render() {
    const styleImage = {
      display: 'block',
      width: this.props.imageWidth,
      height: '90px',
    }
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <div key={index} class={pcCss.image_block}>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            <div className="custom-image">
              <img src={newsItem.thumbnail_pic_s} style={styleImage} alt={newsItem.title}/>
            </div>
            <div class="custom-card">
              <h3 style={styleH3}>{newsItem.title}</h3>
              <p>{newsItem.author_name}</p>
            </div>
          </Link>
        </div>
      ))
      : "没有加载到任何新闻";
    return (
      <div className="topNewsList">
        <BrowserRouter>
          <Card title={this.props.cartTitle} bordered={true} style={{
            width: this.props.width
          }}>
            {newsList}
          </Card>
        </BrowserRouter>
      </div>
    )
  }
}
