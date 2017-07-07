
const express = require('express');
const app = express();
const fs = require('fs');
const server = require('https').createServer({
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem'),
}, app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket) {
	console.log('connect ' + socket.id);

	socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
