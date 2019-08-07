import React, { Component } from 'react';

import { MenuBar } from '../MenuBar/MenuBar';
import { HomeList } from '../HomeList/HomeList';

import subjectList from '../../data/subjectList';

// const list = JSON.parse(subjectList);

export class Home extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            list: [],
            pickerValue: [],
            pickerTitle: ""
        }
    }
    componentWillMount() {
        const initialState = {
            pickerValue: ["助理医师","lczlyisbs"],
            pickerTitle: "临床执业助理医师（笔试）",
            scrollTop: 0
        };
        if(!localStorage.getItem('zgyk_kd19_state')){
            this.setState({
                list: subjectList[initialState.pickerValue[1]].articleList,
                pickerValue: initialState.pickerValue,
                pickerTitle: initialState.pickerTitle
            })
            localStorage.setItem('zgyk_kd19_state', JSON.stringify(initialState));
        } else {
            const updateState = JSON.parse(localStorage.getItem('zgyk_kd19_state'));
            this.setState({
                list: subjectList[updateState.pickerValue[1]].articleList,
                pickerValue: updateState.pickerValue,
                pickerTitle: updateState.pickerTitle
            })
        }


    }
    componentWillUnmount() {
        // const updateState = JSON.parse(localStorage.getItem('zgyk_kd19_state'));
    }
    handlePicker = (value) => {
        const updateState = {
            pickerValue: value,
            pickerTitle: subjectList[value[1]].name,
            scrollTop: 0
        }
        localStorage.setItem('zgyk_kd19_state', JSON.stringify(updateState));
        this.setState({
            pickerValue: value,
            pickerTitle: subjectList[value[1]].name,
            list: subjectList[value[1]].articleList
        });
    }
    render() {
        return (
            <div style={{"height": "100%", "display": "flex", "flexDirection": "column"}}>
                <MenuBar pickerValue={this.state.pickerValue} onChange={this.handlePicker} pickerTitle={this.state.pickerTitle} />
                <HomeList list={this.state.list} cat={this.state.pickerValue[1]} />
            </div>
        )
    }
}
