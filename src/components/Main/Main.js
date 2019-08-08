import React from 'react';
import { TabBar } from 'antd-mobile';
import { Show } from '../Show/Show';
import { Home } from '../Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Main.css';

export class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'kdTab',
        hidden: false,
      };
    }
  
    render() {
      return (
        <Router>
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
              <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                tabBarPosition="bottom"
                hidden={this.state.hidden}
                prerenderingSiblingsNumber={0}
              >
                <TabBar.Item
                  title="考点"
                  key="考点"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(http://www.cyikao.com/zg/webapp_kd19/images/kd.png) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(http://www.cyikao.com/zg/webapp_kd19/images/kd-active.png) center center /  21px 21px no-repeat'
                    }}
                  />
                  }
                  selected={this.state.selectedTab === 'kdTab'}
                  // badge={1}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'kdTab',
                    });
                  }}
                  data-seed="logId"
                >

                  <Switch>
                    <Route path="/show" component={ Show } />
                    <Route path="/" component={ Home } />
                  </Switch>
                  
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://www.cyikao.com/zg/webapp_kd19/images/tk.png) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://www.cyikao.com/zg/webapp_kd19/images/tk-active.png) center center /  21px 21px no-repeat' }}
                    />
                  }
                  title="题库"
                  key="题库"
                  // badge={'new'}
                  selected={this.state.selectedTab === 'tkTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'tkTab',
                    });
                  }}
                  data-seed="logId1"
                >
                  <div className="scroll-wrapper" style={{"height": "100%"}}>
                    <iframe frameBorder="0" width="100%" height="100%" src="http://www.cyikao.com/zg/app/" title="题库"></iframe>
                  </div>
                </TabBar.Item>
                <TabBar.Item
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://www.cyikao.com/zg/webapp_kd19/images/course.png) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(http://www.cyikao.com/zg/webapp_kd19/images/course-active.png) center center /  21px 21px no-repeat' }}
                    />
                  }
                  title="课程"
                  key="课程"
                  // dot
                  selected={this.state.selectedTab === 'kcTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'kcTab',
                    });
                  }}
                >
                  <div className="scroll-wrapper" style={{"height": "100%"}}>
                    <iframe frameBorder="0" width="100%" height="100%" src="http://e.cyikao.com" title="课程"></iframe>
                  </div>
                </TabBar.Item>
              </TabBar>
            </div>
        </Router>
      );
    }
}