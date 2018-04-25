import React from 'react';

export default class Info extends React.Component {
    render() {
        return (
            <div className='tab info'>
                <span>Last Scan: </span>
                <span>Items Scanned: </span>
                <span>Database: </span>
                <span>AlwaysOn&trade;: Premium Only</span>
            </div>
        );
    }
}