var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var posts = require('./routes/post.routes.js');

mongoose.connect('mongodb://localhost/express-blog');
mongoose.Promise = global.Promise;

var port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.render('home');
})

app.use('/posts', posts);

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
