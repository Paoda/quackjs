import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

export default class Home extends React.Component {
    render() {
        return(
            <div className="tab active">
            <span>Home</span>
            <FontAwesome icon={faHome} />
            </div>
        );
    }
}