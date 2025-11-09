const { Readable, Writable, Transform } = require('stream');


// 1. Readable Stream Source
const dataSource = new Readable({
  read() {
    for (let i = 1; i <= 5; i++) {
        this.push(`line ${i}\n`);
    }
    this.push(null); // End the stream
  }
});

// 2. Transform Stream
const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// 3. Writable Stream Destination
const consoleWriter = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});


// Pipe them together!
console.log('\n--- Piping Streams Together ---');
dataSource.pipe(toUpperCase).pipe(consoleWriter);