'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

  socket.on('john@doe.com', function (message) {
    console.log('got > ' + message);
  });

})();
