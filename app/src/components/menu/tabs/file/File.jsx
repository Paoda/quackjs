import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faFolder from '@fortawesome/fontawesome-free-solid/faFolder';

export default class File extends React.Component {
    render() {
        return (
            <div className='tab'>
                <FontAwesome icon={faFolder} />
                <span>File Shield</span>
            </div>
        );
    }
}