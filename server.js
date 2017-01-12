
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

  io.emit('message', 1);
  socket.emit('message', 2);

  setTimeout(() => { socket.emit('message', 3); }, 200);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
