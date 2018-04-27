import {Writable} from 'stream';
let test = new Writable();

export default class MemoryStream extends Writable {
    constructor(options) {
        super(options);

        this.store = {};
        this.store = new Buffer(''); //empty
    }
    write(chunk, enc, cb) {
        //our memory store stores things in buffers.
        let buffer = (Buffer.isBuffer(chunk)) ? chunk : (enc) ? new Buffer(chunk, enc) : new Buffer(chunk);
        this.store = Buffer.concat([this.store, buffer]);
        if (cb) cb();
    }
    getBuffer() {
        return this.store;
    }
}