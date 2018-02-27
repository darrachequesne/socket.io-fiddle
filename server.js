
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

const redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.join('room42', () => {
    io.of('/').adapter.clients(['room42'], (err, clients) => {
      console.log(`io.of('').adapter.clients result: ${clients}`);
    });

    io.in('room42').adapter.clients((err, clients) => {
        console.log(`io.in('room42').adapter.clients result: ${clients}`);
    });
  });

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
