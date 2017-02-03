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

    var post = {
      title: postData[0].value,
      content: postData[1].value
    }

    $.ajax({
      type: 'POST',
      url: '/posts',
      data: post,
      success: function(data) {
        console.log(data);
        $('.list-group').prepend('<li class="list-group-item"><h4>' + data.title + '</h4><hr><p>' + data.content + '</p></li>')
        // window.location.href = "/posts/" + data._id
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
})
