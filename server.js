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


const device = io.of('/device');
const portal = io.of('/portal');

device.on('connection', function(socket) {
   console.log('Connection made');
});
