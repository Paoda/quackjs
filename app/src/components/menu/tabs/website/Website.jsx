import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faWindowMaximize from '@fortawesome/fontawesome-free-regular/faWindowMaximize';

export default class Website extends React.Component {
    render() {
        return (
            <div className="tab">
                <FontAwesome icon={faWindowMaximize} />
                <span>Website Shield</span>
            </div>
        );
    }
}