import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import SVG from '@fortawesome/fontawesome-free-regular/faCheckCircle';

export default class Bar extends React.Component {
    render() {
        return(
            <div className="bar">
                <span>Blockchain: <FontAwesome icon={SVG} /></span>
                <span>DNS: <FontAwesome icon={SVG} /></span>
                <span>Sandbox: <FontAwesome icon={SVG} /></span>
                <span>Neural Nework: <span className="green">CONNECTED</span></span>
            </div>
        );
    }
}