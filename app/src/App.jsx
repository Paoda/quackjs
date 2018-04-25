import React from 'react';
import Menu from './components/menu/Menu';
import Status from './components/status/Status';

export default class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Menu />
                <Status />  
            </div>
        );
    }
}