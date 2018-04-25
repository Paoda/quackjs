import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome'
import faShieldAlt from '@fortawesome/fontawesome-free-solid/faShieldAlt'


export default class Status extends React.Component {
    render() {
        return <FontAwesome icon={faShieldAlt} className="Shield" />
    }
}