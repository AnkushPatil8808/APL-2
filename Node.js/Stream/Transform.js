const { Transform } = require('stream');

const uppercaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformedChunk = chunk.toString().toUpperCase();
    this.push(transformedChunk);
    callback();
  }
});