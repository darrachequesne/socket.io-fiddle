// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var debug = require('debug')('socket.io-fiddle');

server.listen(port, function () {
  debug('server listening at port %d', port);
});

app.use(express.static(__dirname + '/public'));

io.on('connect', function (socket) {
  var socketId = socket.id;
  debug('connection: %s', socketId);

  function onHi(data){
    debug('message "hi" %j', data);
  }

  function sendBuffer(){
    socket.emit('hello', 1, '2', { 3: [], 4: new Buffer([0x01, 0x02, 0x03, 0x04]) });
  }

  function onDisconnect(){
    debug('disconnect: %s', socketId);
  }

  socket.on('hi', onHi);
  setInterval(sendBuffer, 5000);
  socket.on('disconnect', onDisconnect);

});
