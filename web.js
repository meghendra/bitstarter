var content='';
var fs = require('fs');
fs.readFile('index.html', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
  content=data;
 });	
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


