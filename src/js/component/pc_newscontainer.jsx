import React from 'react';
import { Button,Icon,Carousel,Row,Col ,Tabs} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component{

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      easing: 'easing',
    };
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} class="container">
            <div class="leftContainer">
              <div className="carousel">
                <Carousel  {...settings}>
                  <div>
                    <img src="./src/img/carousel1.png" alt=""/>
                  </div>
                  <div>
                    <img src="./src/img/carousel2.png" alt=""/>
                  </div>
                  <div>
                    <img src="./src/img/carousel3.png" alt=""/>
                  </div>
                  <div>
                    <img src="./src/img/carousel4.png" alt=""/>
                  </div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewsImageBlock>
            </div>
            <Tabs class="tabs_news">
              <TabPane tab="头条" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"></PCNewsImageBlock>
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"></PCNewsImageBlock>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
