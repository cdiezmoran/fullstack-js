var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');

var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
