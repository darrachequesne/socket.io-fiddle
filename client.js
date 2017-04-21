
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);

  socket.emit('notification', 'please');

  // or better, with acknoledgement
  socket.emit('notification-with-ack', function (data) {
    console.log('got with ack > ', data);
  });
}

socket.on('news', function (data) { console.log('got > ', data); });
