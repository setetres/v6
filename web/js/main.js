$(document).ready(function() {
    'use strict';

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.19, 1, 0.22, 1)',
        anchors: ['home', 'inkstarter', 'placevomit', 'ijwgh', 'cacete'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            $('#' + anchorLink + '-wrapper').find('video')[0].play();
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
        selector: 'video',
        fittype: 'cover',
        disableCrossDomain: 'true'
    });

});