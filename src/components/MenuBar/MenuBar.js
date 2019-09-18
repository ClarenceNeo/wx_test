import React from 'react';
import { Picker, Button } from 'antd-mobile';
import arrow from '../../images/nav-title-icon.png';

import "./MenuBar.css"

const subject = [
    {
        label: '中药',
        value: '中药',
        children: [
            {
                label: '中药一',
                value: 'zy1',
            },
            {
                label: '中药二',
                value: 'zy2',
            },
            {
                label: '中药综',
                value: 'zyz',
            },
        ],
    },
    {
        label: '西药',
        value: '西药',
        children: [
            {
                label: '西药一',
                value: 'xy1',
            },
            {
                label: '西药二',
                value: 'xy2',
            },
            {
                label: '西药综',
                value: 'xyz',
            }
        ],
    },
    {
        label: '法规',
        value: '法规',
        children: [
            {
                label: '法规',
                value: 'fg',
            }
        ],
    },
];

export class MenuBar extends React.Component {
    state = {
        titleList: {
            'lczlyisbs': '临床执业助理医师（笔试）',
            'lczlyissj': '临床执业助理医师（实践技能）'
        }
    }
    render() {
        return (
            <div>
                <Picker
                    data={subject}
                    value={this.props.pickerValue}
                    cols={2}
                    onChange={this.props.onChange}
                >
                    <Button style={{fontSize: '.33rem',"height":".9rem","lineHeight": ".9rem"}}>{this.props.pickerTitle}<img className="menubar-icon" src={arrow} alt=""/></Button>
                </Picker>
            </div>
        )
    }
}