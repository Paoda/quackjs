import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faShieldAlt from '@fortawesome/fontawesome-free-solid/faShieldAlt';
import Bar from './bar/Bar';

export default class Status extends React.Component {
    render() {
        return (
            <div className='col status-wrapper'>
                <div className="status">
                    <h1 className='statusTxt'>PROTECTED</h1>
                    <FontAwesome icon={faShieldAlt} className="shield" />
                </div>
                <Bar />
            </div>
        );
    }
}