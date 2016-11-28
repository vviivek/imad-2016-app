
var express = require('express')
var morgan = require('morgan');
var path = require('path');
var pool = requirq ('pg').pool;

var config = {
    user :'vvivek',
    database:'vvivek',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password :password.env. DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config)

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('imad-2016-app/graphic-design-tools-Feature_1290x688_MS-940x501.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
