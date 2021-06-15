const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('request on');

  res.end('ici');
});

server.listen(8081, '127.0.0.1', () => {
  console.log('The server listen on 8081');
});
