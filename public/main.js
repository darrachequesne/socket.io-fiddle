'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);

    socket.emit('join', {ch: 'channel#2'});
    socket.emit('join', {ch: 'event#180'});
  }

  socket.on('newMessage', (data) => {
    console.log(data);
  });

})();
