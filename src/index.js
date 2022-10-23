const http = require('http');
const serv = require('./core/server.js');

http
  .createServer(serv)
  .listen(6500, () => {
    console.log('listening to port 6500')
  });