import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


export default class Settings extends React.Component {
    render() {
        return (
            <div className="tab">
                <span>Settings</span>
                <FontAwesome icon={faCog} />
            </div>
        );
    }
}