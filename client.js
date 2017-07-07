
// for the following to work, you'll have to answer "localhost" at the Common Name question when running generate.sh
// > Common Name (e.g. server FQDN or YOUR name) []:localhost
const fs = require('fs');
const socket = require('socket.io-client')('https://localhost:3000', {
  rejectUnauthorized: true, // default value
  ca: fs.readFileSync('./cert.pem')
});

// USE WITH CAUTION! The following disables the validation of the server's identity
// see https://nodejs.org/docs/latest/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
// const socket = require('socket.io-client')('https://localhost:3000', {
//   rejectUnauthorized: false
// });

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}
