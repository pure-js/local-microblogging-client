"use strict";

(function ($) {

    $.fn.saveToLocalStorage = function(options) {

        var defaults = {
            heading: '.new-post__heading',
            image: '.new-post__add-image',
            text: '.new-post__main-text',
            submit: '.new-post__submit',
            after: '.news-list__item_first'
        };


        return this.each(function () {

            var settings = $.extend({}, defaults, options),
                $heading = $(settings.heading, this),
                $image = $(settings.image, this),
                $text = $(settings.text, this),
                $submit = $(settings.submit, this),
                $after = $(settings.after, this);


            $submit.on('click', function(e) {
                var headingValue = $heading.val();
                //var imageValue = $image.val();
                var textValue = $text.val();

                // Store
                localStorage.setItem('headingValue', headingValue);
                localStorage.setItem('textValue', textValue);
                // Retrieve
                console.log(localStorage.getItem('headingValue'));
                console.log(localStorage.getItem('textValue'));

                $after.after('<li class=\"news-list__item\"><h3><a href=\"#\">' + headingValue + '</a></h3><a href=\"#\"><img class=\"img\" src=\"#\" alt=\"\"></a><p>' + textValue + '</p><button class=\"btn btn-default\"><i class=\"glyphicon glyphicon-trash\"></i></button></li>');

                e.preventDefault();
            });
        });
    };
}(jQuery));