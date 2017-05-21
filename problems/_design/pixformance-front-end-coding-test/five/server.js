'use strict';

var http = require('http');

var count = 0;
var words = ['I', 'think', 'therefore', 'I', 'am.'];

var server = http.createServer(requestHandler);


server.listen(9119, function () {
  console.log('server listening at http://127.0.0.1:9119');
});


function requestHandler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url !== '/get-next-word') {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not found. The only route on this server is /get-next-word');
  }
  else {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var currentCount = count;

    setTimeout(function () {
      res.end(words[currentCount % 5]);
    }, Math.random() * 1000);

    count++;
  }
}
