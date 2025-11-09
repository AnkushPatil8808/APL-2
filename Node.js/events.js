const EventEmitter = require('events');
const event = new EventEmitter();
event.on('welcome', () => console.log('Welcome to Node.js Events!'));
event.emit('welcome');
