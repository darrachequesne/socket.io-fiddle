
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}

socket.on('data', (...args) => {
  console.log(args);
});

socket.emit('data-back', new Date(), undefined, null, {});
