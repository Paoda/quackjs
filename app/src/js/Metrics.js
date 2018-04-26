import fs from 'fs';

const slash = (process.platform === "win32") ? "\\" : "/";
const appdata = process.env.APPDATA || process.env.HOME;
const jsonPath = (path + slash + 'metrics.json');

export default class Metrics {
    async constructor() {
        this.checkDirectories();
        if (fs.existsSync(jsonPath)) this.settings = await this.retrieve();
        else this.settings = {
            lastScan: 0,
            itemsScanned: 0,
            dbUpdateTime: 0,
            alwaysOn: false
        }
        this.updated = false;
    }
    retrieve() {
        return new Promise((res, rej) => {
            fs.readFile(jsonPath, (err, data) => {
                if (err) rej(err);
                try {
                    data = JSON.parse(data);
                    res(data);
                } catch (e) { rej(e); }

            })
        });
    }
    set(key, value) {
        this.settings[key] = value;
        this.updated = true;
    }
    update() {
        if (this.updated) {
            fs.writeFile(jsonPath, JSON.stringify(this.settings), (err) => {
                if (err) throw err;
                console.log("Metrics Updated succesfully.");
            });
            this.updated = false;
        } else console.info("Nothing has changed since Metrics have been loaded.");
    }
    checkDirectories() {
        const path = appdata + slash + '.quackjs';
        if (!(fs.existsSync(path))) fs.mkdir(path, () => console.log("Created Necessary Directories."));
    }
}