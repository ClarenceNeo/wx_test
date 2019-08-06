import React, { Component } from 'react';

import { MenuBar } from '../MenuBar/MenuBar';
import { HomeList } from '../HomeList/HomeList';

import subjectList from '../../data/subjectList';

// const list = JSON.parse(subjectList);

export class Home extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            list: subjectList.lczlyisbs.articleList,
            pickerValue: ["助理医师","lczlyisbs"],
            pickerTitle: "临床执业助理医师（笔试）"
        }
    }
    handlePicker = (value) => {
        // console.log(value);
        this.setState({
            pickerValue: value,
            pickerTitle: subjectList[value[1]].name,
            list: subjectList[value[1]].articleList
        });
    }
    componentWillMount() {
    }
    render() {
        return (
            <div>
                <MenuBar pickerValue={this.state.pickerValue} onChange={this.handlePicker} pickerTitle={this.state.pickerTitle} />
                <HomeList list={this.state.list} />
            </div>
        )
    }
}
