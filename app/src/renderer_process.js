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
    // let hash = await scanner.report(null, 'C:\\WINDOWS\\system32\\cmd.exe'); //ec436aeee41857eee5875efdb7166fe043349db5f58f3ee9fc4ff7f50005767f
    let hash = await scanner.scan('C:\\WINDOWS\\system32\\cmd.exe');
})();

