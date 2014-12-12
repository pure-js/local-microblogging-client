"use strict";

(function ($) {

    $.fn.saveToLocalStorage = function(options) {

        var defaults = {
            heading: '.new-post__heading',
            image: '.new-post__add-image',
            text: '.new-post__main-text',
            submit: '.new-post__submit'
        };


        return this.each(function () {

            var settings = $.extend({}, defaults, options),
                $heading = $(settings.heading, this),
                $image = $(settings.image, this),
                $text = $(settings.text, this),
                $submit = $(settings.submit, this);


            $submit.on('click', function(e) {
                var headingValue = $heading.val();
                var imageValue = $image.val();
                var textValue = $text.val();

                console.log(headingValue, imageValue, textValue);

                e.preventDefault();
            });
        });
    };
}(jQuery));