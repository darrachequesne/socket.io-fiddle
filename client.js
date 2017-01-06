
var socket = require('socket.io-client')('http://localhost:3000');
var debug = require('debug')('socket.io-fiddle');

// from lib/socket.js
var events = Object.keys({
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
});

function logEvent(evt){
  return function(){
    debug(evt);
  }
}

for (var i = 0, l = events.length; i < l; i++) {
  socket.on(events[i], logEvent(events[i]));
}

function onHello(){
  debug('%j', arguments);
}

socket.on('hello', onHello);
