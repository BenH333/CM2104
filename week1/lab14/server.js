var express = require('express');
var app = express();
var Twitter = require('twitter');
var params = {screen_name:'nodejs'};

var client = new Twitter({
  consumer_key: 'xxxxxxxx',
  consumer_secret:'xxxxxxx',
  access_token_key:'xxxxxxx',
  access_token_secret:'xxxxxxxx'
});

 app.use(express.static('public'))

  app.get('/',function(req, res){
    client.get('statuses/user_timeline', params,function(error, tweets, response){
      if(!error){
        //console.log(tweets);
        res.send(tweets);
      }
    });
    res.send("Hello world! by express");
  });

  app.listen(8080)
