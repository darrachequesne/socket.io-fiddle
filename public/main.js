'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

  socket.on('data', (...args) => {
    console.log(args);
  });

  socket.emit('data-back', new Date(), undefined, null, {});

})();
