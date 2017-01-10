
const socket = require('socket.io-client')('http://localhost:3000/device', {
  transports: ['websocket'],
  secure: true,
  query: { deviceId: '123456789abcdef' }
});

socket.on('connect', function() {
  console.log('Connection to server established');
});
