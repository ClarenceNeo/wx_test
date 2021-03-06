import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { MenuBar } from '../MenuBar/MenuBar';
import { HomeList } from '../HomeList/HomeList';
import { Banner } from '../Banner/Banner';
import './Home.css';

// import subjectList from '../../data/subjectList';

var subjectList = test;

const tabs = [
    { title: '最新' },
    { title: '精品' },
];

export class Home extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            list: [],
            bestList: [],
            pickerValue: [],
            pickerTitle: ""
        }
    }
    componentWillMount() {
        const initialState = {
            pickerValue: ["中药","zy1"],
            pickerTitle: "中药一",
            scrollTop: 0
        };
        if(!localStorage.getItem('zgyk_yaoskd19_state')){
            this.setState({
                list: subjectList[initialState.pickerValue[1]].articleList,
                bestList: subjectList[initialState.pickerValue[1]].articleList.filter(item=>item.best == "1"),
                pickerValue: initialState.pickerValue,
                pickerTitle: initialState.pickerTitle
            })
            localStorage.setItem('zgyk_yaoskd19_state', JSON.stringify(initialState));
        } else {
            const updateState = JSON.parse(localStorage.getItem('zgyk_yaoskd19_state'));
            this.setState({
                list: subjectList[updateState.pickerValue[1]].articleList,
                bestList: subjectList[updateState.pickerValue[1]].articleList.filter(item=>item.best == "1"),
                pickerValue: updateState.pickerValue,
                pickerTitle: updateState.pickerTitle
            })
        }

    }
    componentWillUnmount() {
        // const updateState = JSON.parse(localStorage.getItem('zgyk_yaoskd19_state'));
    }
    handlePicker = (value) => {
        const updateState = {
            pickerValue: value,
            pickerTitle: subjectList[value[1]].name,
            scrollTop: 0
        }
        localStorage.setItem('zgyk_yaoskd19_state', JSON.stringify(updateState));
        this.setState({
            pickerValue: value,
            pickerTitle: subjectList[value[1]].name,
            list: subjectList[value[1]].articleList,
            bestList: subjectList[value[1]].articleList.filter(item=>item.best == "1")
        });
    }
    render() {
        return (
            <div style={{"height": "100%", "display": "flex", "flexDirection": "column"}}>
                <MenuBar pickerValue={this.state.pickerValue} onChange={this.handlePicker} pickerTitle={this.state.pickerTitle} />
                {/* <HomeList list={this.state.list} cat={this.state.pickerValue[1]} /> */}
                <div style={{"height": "100%","paddingTop": "43.5px","marginTop": "-43.5px"}}>
                    <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={false} swipeable={false} className="home-tab-content-wrapper">
                        <div style={{ "display": "flex", "flexDirection": "column"}} className="home-tab-content">
                            <WhiteSpace />
                                <Banner />
                            <WhiteSpace />
                            <HomeList list={this.state.list.reverse()} cat={this.state.pickerValue[1]} />
                        </div>
                        <div style={{ "display": "flex", "flexDirection": "column"}} className="home-tab-content">
                            <WhiteSpace />
                                <Banner />
                            <WhiteSpace />
                            <HomeList list={this.state.bestList.reverse()} cat={this.state.pickerValue[1]} />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
