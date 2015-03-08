var express = require('express');
var app = express();


var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'es:9200',
  log: 'trace'
});


app.get('/', function (req, res) {
  res.send('Hello World From a Docker Container :)!');
});

app.get('/es', function (req, res) {

  client.search({
    q: '1972'
  }).then(function (body) {

    var hits = body.hits.hits;
    res.json(body);

  }, function (error) {
    console.trace(error.message);
    res.send(error.message);
  });

});

var server = app.listen(3000, function () {

  var port = server.address().port;

  console.log('Running on port:', port);

});