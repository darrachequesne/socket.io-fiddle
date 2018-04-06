
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}

socket.on('connect', () => {
    console.log('connect to server scueessful')
})

socket.on('disconnect', () => {
    console.log('disconnect to server')
})

socket.emit('message', 'hello', e => {
    console.log('send hello and get: ', e);
    socket.emit('message', 'word', q => {
        console.log('send word and get: ', q);
    })
})
