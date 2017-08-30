'use strict';

(function() {

  const options = {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authorization: "Bearer test"
        }
      }
    }
  };

  var socket = io('http://localhost:3000', options);

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

})();
