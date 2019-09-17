import React from 'react';
import { Carousel } from 'antd-mobile';

export class Banner extends React.Component {
  state = {
    data: [
      {
        imgUrl: 'AiyWuByWklrrUDlFignR',
        link: 'http://www.cyikao.com'
      },
      {
        imgUrl: 'TekJlZRVCjLFexlOCuWn',
        link: 'http://www.cyikao.com'
      },
      {
        imgUrl: 'IJOtIlfsYdTyaDTRVrLI',
        link: 'http://www.cyikao.com'
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
                src={`https://zos.alipayobjects.com/rmsportal/${val.imgUrl}.png`}
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