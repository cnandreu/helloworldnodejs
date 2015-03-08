var express = require('express');
var exec = require('sync-exec');
var app = express();

var host = process.env.ES_NAME ? 'es' : exec('boot2docker ip').stdout.trim();

console.log('Host', host);

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: host + ':9200',
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