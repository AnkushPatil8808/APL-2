const { pipeline, Readable, Transform } = require('stream');

// A readable stream that will emit an error
const errorSource = new Readable({
    read() {
        this.push('This part works...');
        setTimeout(() => {
            this.destroy(new Error('Something went wrong!'));
        }, 100);
    }
});

// A transform stream (can be any stream in the middle)
const passthrough = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
    }
});


console.log('\n--- Handling Errors with pipeline() ---');
pipeline(
    errorSource,
    passthrough,
    (err) => {
        if (err) {
            console.error('Pipeline failed:', err.message);
        } else {
            console.log('Pipeline finished successfully.');
        }
    }
);