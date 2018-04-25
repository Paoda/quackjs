import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className='tab'>
                <span>Quack.JS</span>
                <div className='upgradeBox'>UPGRADE</div>
            </div>
        );
    }
}