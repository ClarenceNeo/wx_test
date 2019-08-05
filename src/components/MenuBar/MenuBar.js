import React from 'react';
import { Picker, Button } from 'antd-mobile';
import arrow from '../../images/nav-title-icon.png';

import styles from "./MenuBar.css"

const subject = [
    {
        label: '助理医师',
        value: '助理医师',
        children: [
            {
                label: '临床执业助理医师（笔试）',
                value: '临床执业助理医师（笔试）',
            },
            {
                label: '临床执业助理医师（实践技能）',
                value: '临床执业助理医师（实践技能）',
            },
            {
                label: '中医执业助理医师（笔试）',
                value: '中医执业助理医师（笔试）',
            },
            {
                label: '中医执业助理医师（实践技能）',
                value: '中西医执业助理医师（笔试）',
            },
        ],
    },
    {
        label: '执业医师',
        value: '执业医师',
        children: [
            {
                label: '临床执业助理医师（笔试）',
                value: '临床执业医师（实践技能）',
            },
            {
                label: '中医执业医师（笔试）',
                value: '中医执业医师（实践技能）',
            },
            {
                label: '中西医执业医师（笔试）',
                value: '中西医执业医师（实践技能）',
            }
        ],
    },
];

export class MenuBar extends React.Component {
    state = {
        pickerValue: "临床执业助理医师（笔试）",
    };
    onChange = (value) => {
        console.log(value);
        this.setState({
            value,
        });
    }
    onScrollChange = (value) => {
        console.log(value);
    }
    render() {
        return (
            <div>
                <Picker
                    data={subject}
                    value={['助理医师','临床执业助理医师（笔试）']}
                    cols={2}
                >
                    <Button style={{fontSize: '.33rem'}}>临床执业助理医师（笔试）<img className="menubar-icon" src={arrow} alt=""/></Button>
                </Picker>
            </div>
        )
    }
}