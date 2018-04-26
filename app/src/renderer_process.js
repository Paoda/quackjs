import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './global.css'
import VirusTotal from './js/VirusTotal';
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

let scanner = new VirusTotal('./app/src/assets/private/virus_total.key');

(async () => {
    let hash = await scanner.scan('C:\\Program Files\\internet explorer\\iexplore.exe');
})();

