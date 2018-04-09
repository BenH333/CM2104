var http = require('http');
var joke = require('one-liner-joke');
var randomJoke = joke.getRandomJoke();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(randomJoke);
  }).listen(8080);
