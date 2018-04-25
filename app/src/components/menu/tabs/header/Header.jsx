import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className='tab title'>
                <span>Quack.JS</span>
                <div className='upgradeBox'>
                <a href="#">UPGRADE</a>
                </div>
            </div>
        );
    }
}