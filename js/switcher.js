/*
 Project Name : Vinte
 Author: NhatThemes
 Project Date: 11-11-2016
 Author Website : http://nhatthemes.com/
 */
 (function ($) {
    $.fn.ColorPanel = function (options) {
        var settings = $.extend({
            styleSheet: '#cpswitch',
            colors: {
                '#ffb538': 'css/skins/default.css',
                '#17b878': 'css/skins/green.css',
                '#F41C60': 'css/skins/pink.css',
                '#05B4E9': 'css/skins/blue.css'
            }
            , linkClass: 'linka'
            , animateContainer: false
        }, options);
        var panelDiv = this;

        $('#cpToggle').click(function(e){
            e.preventDefault();
            $('ul',panelDiv).slideToggle();
        });

        var colors = settings.colors || null;
        if (colors) {
            $.each(colors, function (key, value) {
                var li = $("<li/>");
                var e = $("<a />", {
                    href: value
                    , "class": settings.linkClass, // you need to quote "class" since it's a reserved keyword
                }).css('background-color', key);
                li.append(e);
                $(panelDiv).find('ul').append(li);
            });
            $('ul',panelDiv).on('click', 'a', function (e) {
                e.preventDefault();
                var CssFile = $(this).attr('href') || 'default.css';
                if (settings.animateContainer) {
                    $(settings.animateContainer).fadeOut(function () {
                        $(settings.styleSheet).attr('href', CssFile);
                        // And then:
                        $(this).fadeIn();
                    });
                }
                else {
                    $(settings.styleSheet).attr('href', CssFile);
                }
            });
        }
    };
}(jQuery));