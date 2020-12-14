#!/usr/bin/env nodejs
const http = require('http');
const port = 8081;

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello from Node.js.\n');
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
