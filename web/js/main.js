$(document).ready(function() {
    'use strict';

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.19, 1, 0.22, 1)',
        afterRender: function(){
            $('video').get(0).play();
        }
    });

    // resize

    $(window).on('debouncedresize',function() {
        $('.tile').css({height: window.innerHeight});
    });

    // init

    $('.fit-video').fitVids();
    $('.tile').css({height: window.innerHeight});

    objectFit.polyfill({
        selector: 'video', // this can be any CSS selector
        fittype: 'cover', // either contain, cover, fill or none
        disableCrossDomain: 'true' // either 'true' or 'false' to not parse external CSS files.
    });

});