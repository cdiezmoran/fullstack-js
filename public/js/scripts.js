$(function() {
  $('#post-form').validate({
    rules: {
      title: "required",
      content: "required"
    },

    submitHandler: function(form) {
      handlePostSubmit(form);
    }
  });

  $('#post-form').submit(function(event) {
    event.preventDefault();
  });

  function handlePostSubmit(form) {
    var postData = $(form).serializeArray()

    var newPost = {
      title: postData[0].value,
      content: postData[1].value
    }

    $('.list-group').append('<li class="list-group-item"> <h4>' + newPost.title + '</h4> <hr> <p>' + newPost.content + '</p> </li>')
  }
})
