import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faShieldAlt from '@fortawesome/fontawesome-free-solid/faShieldAlt';

export default class Status extends React.Component {
    render() {
        return (
            <div className='status col'>
                <h1 className='statusTxt'>PROTECTED</h1>
                <FontAwesome icon={faShieldAlt} className="shield" />
            </div>
        );
    }
}