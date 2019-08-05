import React from 'react';

import { MenuBar } from '../MenuBar/MenuBar';
import { HomeList } from '../HomeList/HomeList';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <MenuBar />
                <HomeList />
            </div>
        )
    }
}