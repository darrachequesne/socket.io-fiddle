
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}
