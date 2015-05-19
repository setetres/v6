$(document).ready(function() {
    'use strict';
    $('.fit-video').fitVids();
    $('.tile').css({height: window.innerHeight});
    $(window).on('debouncedresize',function() {
        $('.tile').css({height: window.innerHeight});
    });
});