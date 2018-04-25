import React from 'react';
import SVG from './meltdown.min.svg';

export default class Meltdown extends React.Component {
    render() {
        return (
            <div className="tab">
                <img src={SVG} />
                <span>Meltdown Shield</span>
            </div>
        );
    }
}