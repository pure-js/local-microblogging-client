"use strict";

(function ($) {

    $.fn.saveToLocalStorage = function(options) {

        var defaults = {
            heading: '.new-post__heading',
            image: '.new-post__add-image',
            text: '.new-post__main-text'
        };


        return this.each(function () {

            var settings = $.extend({}, defaults, options),
                $heading = $(settings.heading, this),
                $image = $(settings.image, this),
                $text = $(settings.text, this);



        });
    };
}(jQuery));