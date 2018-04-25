import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faLock from '@fortawesome/fontawesome-free-solid/faLock';

export default class Quarantine extends React.Component {
    render() {
        return(
            <div className="tab">
            <span>Quarantine</span>
            <FontAwesome icon={faLock} />
            </div>
        );
    }
}