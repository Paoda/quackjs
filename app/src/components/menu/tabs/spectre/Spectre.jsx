import React from 'react';
import SVG from './spectre.min.svg';

export default class Spectre extends React.Component {
    render() {
        return (
            <div className="tab spectre">
                <img src={SVG} />
                <span>Spectre Shield</span> 
            </div>
        );
    }
}