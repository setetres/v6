/// <reference path="../../typings/jquery/jquery.d.ts"/>
/* global objectFit */

$(document).ready(function() {
    'use strict';

    // fullpage

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.19, 1, 0.22, 1)',
        anchors: ['hello', 'inkstarter', 'placevomit', 'ijwgh', 'xxxxxxxooo', 'cacete', 'founders'],
        navigation: true,
        navigationTooltips: ['Hello', 'InkStarter.cc', 'Placevom.it', 'IJWGH.CLUB', 'XXXXXXX.OOO', 'Cacete.co', 'Founders.com.br'],
        onSlideLeave: function(anchorLink){
            $('#' + anchorLink + '-wrapper').find('video')[0].stop();
        },
        afterLoad: function(anchorLink){
            $('#' + anchorLink + '-wrapper').find('video')[0].play();
        }
    });

    // hamburger

    $('.hamburger').on('click',function(){
        $('#fp-nav').toggleClass('active');
        return false;
    });

    // load

    $(window).on('load',function(){
        setTimeout(function(){
            $('#loading').removeClass('active');
        },1000);
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