import fs from 'fs';
import Crypto from 'crypto';
import MemoryStream from './MemoryStream';


export default class VirusTotal {
    constructor(keyPath) {
        this.initialize(keyPath);
    }

    async initialize(keyPath) {
        this.key = await this.getKey(keyPath);
        console.log("Virus Total Key: " + this.key);
        
        this.prefix = "https://www.virustotal.com/vtapi/v2/";
        this.request = new XMLHttpRequest();
    }
    getKey(path) {
        return new Promise((res, rej) => {
            fs.readFile(path, (err, data) => {
                if (err) rej(err);

                if (typeof data === "object") res(data.toString('utf8')); //is Buffer
                else res(data);
            })
        })
    }
    getHash(path) {
        return new Promise((res, rej) => {
            let stream = fs.createReadStream(path).pipe(Crypto.createHash('sha256').setEncoding('hex')).on('finish', function() {
                res(this.read());
            })
        })
    }
    async report(hash, path = null) { //https://www.virustotal.com/vtapi/v2/file/report?apikey=<apikey>&resource=<resource>
        let sha256; 
        if (path != null) sha256 = await this.getHash(path);
        else sha256 = hash; 

        this.request.open('GET', (this.prefix + 'file/report?apikey=' + this.key + '&resource=' + sha256))

        this.request.addEventListener('error', e => console.error(e));
        this.request.addEventListener('load', function() { console.log(JSON.parse(this.responseText)); });
        // this.request.send();
    }
    async scan(path) { //https://www.virustotal.com/vtapi/v2/file/scan
        //Size limit: 32MB
        let binary = await this.getBinary(path);

        let formData = new FormData();
        formData.append('apikey', this.key);
        formData.append('file', binary);

        this.request.open('POST', (this.prefix + 'file/scan'));
        this.request.addEventListener('error', e => console.error(e));
        this.request.addEventListener('load', function() { console.log(this.responseText)});
        // this.request.send(formData);

    }
    getBinary(path) {
        return new Promise((res, rej) => {
            let stream = fs.createReadStream(path).pipe(new MemoryStream().on('finish', function() {
                res(this.getBuffer());
            })).on('error', err => {
                this.end();
                console.error(err)
            });
        });
    }
}