const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start', () => console.log('Event Started!'));
emitter.emit('start');
