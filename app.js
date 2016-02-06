var express = require('express');
var app = express();
/*var bodyParser = require('body-parser');

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));*/


app.get('/people.json', function (req, res) {
 res.sendFile('people.json', {root : __dirname});
});

app.get('/display', function (req, res) {
 res.sendFile('index.html', {root : __dirname});
});

app.get('/style.css', function (req, res) {
 res.sendFile('style.css', {root : __dirname});
});

app.get('/script.js', function (req, res) {
 res.sendFile('script.js', {root : __dirname});
});
/*app.post('/post', function(req, res) {
 // save message and redirect
});*/

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
