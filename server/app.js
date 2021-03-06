var express = require('express');
var cookieParser = require('cookie-parser');
var React = require('react');
var Router = require('react-router');
var Request = require('request');

var app = express();

app.set('views', __dirname + '/../src/views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(express.static(__dirname + '/../src/root'));

app.get('/', function(req, res) {
  res.render('index')
});

app.get('*', function(req, res) {
  res.status(404)
    .send('Not found');
});

var serverPort = process.env.PORT || 3000;
var serverAddress = process.env.ADDRESS || 'localhost';
var server = app.listen(serverPort, serverAddress, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(server.address());
  console.log('app listening at http://%s:%s', host, port);
});
