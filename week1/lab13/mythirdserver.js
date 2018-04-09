var http = require('http');
var joke = require('one-liner-joke');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var randomJoke = joke.getRandomJoke();
  res.end(randomJoke);
  }).listen(8080);
