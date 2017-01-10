'use strict';

(function() {

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
    var wait = 1;

    setTimeout(function () {
      socket.emit ('test', '1234', function (data) {
        console.log(data);
      });
    }, wait);
  }

})();
