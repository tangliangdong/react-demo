import React from 'react';
import {Card} from 'antd';
import {BrowserRouter, HashRouter, Route, BrowserHistory, Link} from 'react-router-dom';
import {browserHistory, Router} from 'react-router';

import PCNewsDetail from './pc_news_detail';

export default class PCNewsBlock extends React.Component {
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
    const {news} = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <li key={index}>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</Link>
        </li>
      ))
      : "无新闻";

    const newsRouter = news.length
      ? news.map((newsItem, index) => (<Route exact path={`details/${newsItem.uniquekey}`} component={PCNewsDetail}/>))
      : "无新闻";
    return (
      <div className="topNewsList">
        <BrowserRouter>
          <Card>
            <ul class="news_ul">
              {newsList}
            </ul>
          </Card>
        </BrowserRouter>
      </div>
    )
  }
}
