const { Readable } = require('stream');

const numberStream = new Readable({
  read() {
    if (!this.counter) {
      this.counter = 1;
    }

    if (this.counter > 10) {
      this.push(null); 
    } else {
      const chunk = String(this.counter);
      this.push(chunk);
      this.counter++;
    }
  }
});

console.log('--- Reading from Readable Stream ---');
numberStream.on('data', (chunk) => {
  console.log(`Received data: ${chunk.toString()}`);
});

numberStream.on('end', () => {
  console.log('Stream finished.');
});