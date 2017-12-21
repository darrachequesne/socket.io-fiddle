
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var moment = require('moment');
var uuid = require('uuid');

app.set('port', process.env.PORT || 3000);

// all connected clients
var clients = [];

server.listen(app.get('port'), function () {
    console.log("---------- SERVER IS RUNNING ----------");
});

io.on("connection", function (socket) {
    socket.uuid = uuid.v1();
    clients.push(socket);
    PrintEvent("connection", socket);

    socket.on("disconnect", function () {
        socket.broadcast.emit("USER_DISCONNECTED", socket.playerID);
        var i = clients.indexOf(socket);
        clients.splice(i, 1);

        PrintEvent("disconnect", socket);
    });
});

function PrintEvent(eventName, socket) {
    console.log(moment().format("YYYY-MM-DD HH:mm:ss") + "( " + clients.length + " ) " + eventName + " socketID: " + socket.id);
}
