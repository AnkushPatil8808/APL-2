const { Readable, Writable, Duplex, Transform, pipeline } = require('stream');
const fs = require('fs');
const path = require('path');

class MyReadable extends Readable {
  constructor(options) {
    super(options);
    this.data = ['Hello', 'from', 'Node.js', 'Streams!'];
    this.index = 0;
  }

  _read() {
    if (this.index < this.data.length) {
      this.push(this.data[this.index] + ' ');
      this.index++;
    } else {
      this.push(null);
    }
  }
}


class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    console.log('Writable received:', chunk.toString());
    callback();
  }
}

class MyDuplex extends Duplex {
  constructor() {
    super();
    this.counter = 3;
  }

  _read() {
    if (this.counter > 0) {
      this.push(`Count: ${this.counter}\n`);
      this.counter--;
    } else {
      this.push(null);
    }
  }

  _write(chunk, encoding, callback) {
    console.log('Duplex got:', chunk.toString());
    callback();
  }
}

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const modified = chunk.toString().toUpperCase();
    this.push(modified);
    callback();
  }
}


const readable = new MyReadable();
const transform = new MyTransform();
const writable = new MyWritable();

pipeline(
  readable,      // source
  transform,     // transform
  writable,      // destination
  (err) => {
    if (err) console.error('Pipeline failed:', err);
    else console.log('Pipeline completed successfully.');
  }
);

const duplex = new MyDuplex();
duplex.on('data', (chunk) => process.stdout.write(chunk));
duplex.write('Hello Duplex!');
duplex.end();
