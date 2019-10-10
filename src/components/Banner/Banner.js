import React from 'react';
import { Carousel } from 'antd-mobile';

export class Banner extends React.Component {
  state = {
    data: [
      {
        imgUrl: 'banner1',
        link: 'https://ke.qq.com/course/package/19557?tuin=b7d499ed'
      },
      {
        imgUrl: 'banner2',
        link: 'https://ke.qq.com/course/package/19556?tuin=b7d499ed'
      },
      {
        imgUrl: 'banner3',
        link: 'https://ke.qq.com/course/package/19559?tuin=b7d499ed'
      },
      {
        imgUrl: 'banner4',
        link: 'https://ke.qq.com/course/package/19558?tuin=b7d499ed'
      }],
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          autoplayInterval={5000}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href={`${val.link}`}
              style={{ display: 'inline-block', width: '100%', height: "2.3rem" }}
            >
              <img
                src={`http://www.cyikao.com/zg/webapp_kd19/images/${val.imgUrl}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}