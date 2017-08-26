
const socket = require('socket.io-client')('http://localhost:3000', {
  transports: ['polling']
});

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);

  socket.emit('data', {"mid": "123", "text": "Meine zehn Brüder essen zweihundert Kuchen (ß)"});
}
