/// <reference path="../../typings/jquery/jquery.d.ts"/>
/* global objectFit */

$(document).ready(function() {
    'use strict';

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.19, 1, 0.22, 1)',
        anchors: ['home', 'inkstarter', 'placevomit', 'ijwgh', 'xxxxxxxooo', 'puta', 'cacete', 'founders', 'fotoum', 'inkonik', 'setetres'],
        navigation: true,
        navigationTooltips: ['About', 'InkStarter.cc', 'Placevom.it', 'IJWGH.CLUB', 'XXXXXXX.OOO', 'PUTA.nu', 'Cacete.co', 'Founders.com.br', 'Fotoum.com', 'Inkonik.com', 'Older versions'],
        onSlideLeave: function(anchorLink){
            $('#' + anchorLink + '-wrapper').find('video')[0].stop();
        },
        afterLoad: function(anchorLink){
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