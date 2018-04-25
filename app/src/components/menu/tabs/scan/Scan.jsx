import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

export default class Scan extends React.Component {
    render() {
        return(
            <div className="tab">
            <span>Scan</span>
            <FontAwesome icon={faSearch} />
            </div>
        );
    }
}