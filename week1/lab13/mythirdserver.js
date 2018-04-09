/*var http = require('http');
var knockknock = require('knock-knock-jokes');


  /*

  /*
  The variable getRandomJoke will contain a random joke with a format:
  {"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
  */
  var getRandomJoke = oneLinerJoke.getRandomJoke();
  var oneLinerJoke = require('one-liner-joke');
  var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var randomJoke = oneLinerJoke()
    res.end(randomJoke);
    }).listen(8080);



  /*
  The variable getRandomJoke will contain a random joke with a tag and with a format:
  {"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
  */
