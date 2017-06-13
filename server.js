
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')();
const port = process.env.PORT || 3000;

io.listen(server, {
  cookie: false
});

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
