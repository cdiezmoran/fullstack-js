var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');

var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/posts', function(req, res) {
  var posts = [
    {
      title: "Test Post",
      content: "Lorem ipsum, dolor sit amet"
    },
    {
      title: "Test Post",
      content: "Lorem ipsum, dolor sit amet..."
    },
    {
      title: "Test Post",
      content: "Lorem ipsum, dolor sit amet"
    }
  ]
  res.render('posts', {posts: posts})
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
