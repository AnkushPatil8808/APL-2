const { Writable } = require('stream');


const loggerStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk.toString()}`);
    callback(); 
  }
});


console.log('\n--- Writing to Writable Stream ---');
loggerStream.write('Hello');
loggerStream.write('World');
loggerStream.end('! (This is the final chunk)'); 