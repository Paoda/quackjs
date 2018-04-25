import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

export default class Email extends React.Component {
    render() {
        return (
            <div className='tab'>
                <FontAwesome icon={faEnvelope} className="emailIcon" />
                <span>E-mail Shield</span>               
            </div>
        );
    }
}