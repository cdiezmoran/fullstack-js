var express = require('express');
var router = express.Router();
var Post = require('../models/post.js');

// Get posts
router.get('/', function(req, res) {
  Post.find().sort('-createdAt').exec(function (err, posts) {

    res.render('posts', { posts: posts });
  });
});

// Add post
router.post('/', function(req, res) {
  var post = new Post(req.body);

  post.save(function (err) {
    if (err) { return res.status(400).send(err) }

    res.send(post);
  });
});

module.exports = router
