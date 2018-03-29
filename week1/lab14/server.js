/**
 * @Author: John Isaacs <john>
 * @Date:   11-Mar-182018
 * @Filename: server.js
 * @Last modified by:   john
 * @Last modified time: 12-Mar-182018
 */
var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: ' LhDAJkzZyjBDBO7wBH8wMp7ud',
  consumer_secret: ' tsS0UE115oZNEJIRkhHWVpSSlBqekB1JdKzscgjOUr0YCZShs',
  access_token_key: ' 979309019394445312-5VpUGPNdNbXq4SiHaToxbAziJK0fuet',
  access_token_secret: '8uuq6fg4obS0A1HNcCEtvuaAQUye1FqonMG9qExU505UR'
});

app.use(express.static('public'))

app.get('/tweetsjson', function(req, res) {
  var params = {
    screen_name: 'nodejs'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var json = [];
      for (var i = 0; i < tweets.length; i++) {
        json.push({
          name: tweets[i].user.name,
          text: tweets[i].text
        });
      }
      res.send(JSON.stringify(json));
    }
  });
});

app.listen(8080);
