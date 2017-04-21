
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('notification', function (data) { socket.emit('news', { hello: 'world' }); });
  socket.on('notification-with-ack', function (ack) { ack({ hello: 'world' }); });

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
