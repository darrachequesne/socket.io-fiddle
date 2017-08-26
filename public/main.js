'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);

    socket.emit('data', {"mid": "123", "text": "Meine zehn Brüder essen zweihundert Kuchen (ß)"});
  }

})();
