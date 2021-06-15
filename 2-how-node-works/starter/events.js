const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('newSale', (item) => {
  console.log(`new sale : ${item}`);
  myEmitter.emit('saled');
});

myEmitter.on('saled', () => {
  console.log('new sale is logged');
});

myEmitter.emit('newSale', 'tee-shirt');
