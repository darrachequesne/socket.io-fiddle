'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

  socket.on('message', function (n) {
    console.log('got ' + n);
  })

})();
