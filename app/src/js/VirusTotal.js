import fs from 'fs';
import Buffer from 'buffer';
import Forge from 'node-forge';


(() => {
    fs.readFile('./app/src/assets/private/virus_total.pub', (err, data) => {
        if (err) throw err;
        console.log("Virus Total Key: " + data.toString('utf8'));
    })
})();

export default class VirusTotal {
    constructor(key) {
        this.prefix = "www.virustotal.com/vtapi/v2/";
        this.request = new XMLHttpRequest();

    }
    calcSHA256(path) {
        return new Promise((res, rej) => {
            let stream = fs.createReadStream(path);
            let SHA256 = Forge.md.sha256.create()
            stream.on('error', (err) => rej(err));
            stream.on('data', chunk => {
                SHA256.update(chunk);
            });
            stream.on('close', () => {
                res(SHA256.digest().toHex());
            })
        })
    }
    async report(path) { //https://www.virustotal.com/vtapi/v2/file/report?apikey=<apikey>&resource=<resource>
        let hash = await this.calcSHA256(path);
        this.request.open('GET', (this.prefix + 'file/report?apikey=' + this.key + '&resource=' + hash))

        this.request.on('error', e => console.error(e));
        this.request.on('load', () => console.log(this.responseText));
    }
    scan(file) {
        
    }
}