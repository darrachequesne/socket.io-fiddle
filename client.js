
const socket = require('socket.io-client')('http://localhost:3000/printers', {
  transports: ['websocket'],
  query: "shop=123456"
});

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}
