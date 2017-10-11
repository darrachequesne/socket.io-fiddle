
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

server.listen(port, () => console.log('server listening on port ' + port));

io.use((socket, next) => {
   console.log('(default) middleware running...');
   next();
}).on('connection', socket => {
  console.log('(default) client connected');
});

// Following works, but client does not receive 'connect' or 'connection':
io.of('/admin').use((socket, next) => {
   console.log('(admin) middleware running...');
   next();
}).on('connection', socket => {
  console.log('(admin) client connected');
});
