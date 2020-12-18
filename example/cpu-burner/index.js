#!/usr/bin/env nodejs
const http = require('http');
const port = 8081;

http.createServer(function (request, response) {
   response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Transfer-Encoding': 'chunked',
   });

   if (request.url == "/") {
      response.end('Hello from Node.js - <a href="/cpu">heat the cpu</a> - <a href="/assets/">static assets</a>\n');
   } else if (request.url == "/cpu") {
      response.write("Start CPU BURN.<br>\n");
      for (let i=0; i<1000000000; i++) {
         if (i % 100000000 == 0) {
            response.write(`Incremental load: ${i}<br>\n`);
         }
      }
      response.end('Finish CPU BURN - back to <a href="/">index</a>.<br>\n');
   } else {
      response.end("Node.js - Unknown route.")
   }
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
