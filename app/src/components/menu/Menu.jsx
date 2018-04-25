import React from 'react';

import Title from './tabs/header/Header';
import Email from './tabs/email/Email';
import Website from './tabs/website/Website';
import File from './tabs/file/File';
import Meltdown from './tabs/meltdown/Meltdown';
import Spectre from './tabs/spectre/Spectre';

import Info from './tabs/info/Info';

import Home from './tabs/home/Home';
import Scan from './tabs/scan/Scan';
import Quarantine from './tabs/quarantine/Quarantine';
import Settings from './tabs/settings/Settings';

import Line from './tabs/Line';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu col">
                <Title /><Line />
                <Email /><Line />
                <Website /><Line />
                <File /><Line />
                <Meltdown /><Line />
                <Spectre /><Line />
                <Info /><Line />
                <Home /><Line />
                <Scan /><Line />
                <Quarantine /><Line />
                <Settings />
            </div>
        );
    }
}