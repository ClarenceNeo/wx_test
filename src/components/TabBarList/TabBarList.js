import React from 'react';
import { TabBar } from 'antd-mobile';
import { MenuBar } from '../MenuBar/MenuBar';
import { MainList } from '../MainList/MainList';

export class TabBarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'kdTab',
          hidden: false,
        };
      }
    
      render() {
        return (
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
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
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
                <MenuBar />
                <MainList />
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
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
                <iframe frameBorder="0" width="100%" height="100%" src="http://www.cyikao.com/zg/app/"></iframe>
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
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
                <iframe frameBorder="0" width="100%" height="100%" src="http://e.cyikao.com"></iframe>
              </TabBar.Item>
            </TabBar>
          </div>
        );
      }
}