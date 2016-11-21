(function ($) {
  'use strict';

  $.fn.saveToLocalStorage = function(options) {

    let defaults = {
      heading: '.new-post__heading',
      text: '.new-post__main-text',
      submit: '.new-post__submit',
      newsList: '.news-list',
      post: '.news-list__item',
      after: '.news-list__item_first',
      removePost: '.remove-post'
    };


    return this.each(function () {

      var settings = $.extend({}, defaults, options),
        $heading = $(settings.heading, this),
        $text = $(settings.text, this),
        $submit = $(settings.submit, this),
        $newsList = $(settings.newsList, this),
        $post = settings.post,
        $after = $(settings.after, this),
        $removePost = settings.removePost;


      $.getJSON('https://api.myjson.com/bins/5a7kb', function(json) {

        $.each( json.posts, function( index ) {
          var currentPostHeading = json.posts[index][0];
          var currentPostText = json.posts[index][1];

          $newsList.append('<li class=\"news-list__item\"><h3 class=\"h3\"><a class=\"h3__link\" href=\"#\">' + currentPostHeading + '</a></h3><p class=\"p\">' + currentPostText + '</p><button class=\"btn btn-default remove-post\" title=\"Remove post\" type=\"button\"><i class=\"glyphicon glyphicon-trash\"></i></button></li>');
        });

        // Put the object into storage
        localStorage.setItem('testObject', JSON.stringify(json.posts));

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('testObject');
      });


      $submit.on('click', function(e) {
        let headingValue = $heading.val();
        let textValue = $text.val();

        // Store
        localStorage.setItem('headingValue', headingValue);
        localStorage.setItem('textValue', textValue);

        $after.after('<li class=\"news-list__item\"><h3 class=\"h3\"><a class=\"h3__link\" href=\"#\">' + headingValue + '</a></h3><p class=\"p\">' + textValue + '</p><button class=\"btn btn-default remove-post\" title=\"Remove post\" type=\"button\"><i class=\"glyphicon glyphicon-trash\"></i></button></li>');

        e.preventDefault();
      });


      $newsList.on('click', $removePost,  function(e) {
        $(this).parent($post).slideUp(400, function() {
          this.remove();
        });

        e.preventDefault();
      });
    });
  };
}(jQuery));
