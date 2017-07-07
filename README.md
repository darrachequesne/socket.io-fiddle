
# Socket.IO Fiddle

```
$ sh generate.sh # create self-signed keys for server-ssl.js
$ npm install
$ npm start # run the server
$ npm run client # run the nodejs client
```

And point your browser to `https://localhost:3000`. Optionally, specify
a port by supplying the `PORT` env variable.

You will have to accept the self-signed warning. Older versions of node are known to have issues. This is a way to test your version of node.

**Known versions to work with SSL/TLS: v8.1.3 -- expect newest versions of v6 and v4 to also work (untested)!**
