/// <reference path="../../typings/jquery/jquery.d.ts"/>
/* global objectFit */

var slidesInfo = ['#hello', '#inkstarter', '#curisco', '#placevomit', '#ijwgh', '#xxxxxxxooo', '#founders', '#cacete'];

$(document).ready(function() {
    'use strict';

    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.section').each(function(){
            var videoID = $(this).attr('id').substring(0, $(this).attr('id').indexOf('-wrapper'));
            $(this).find('video').append('<source src="img/'+ videoID +'.mp4" type="video/mp4">');
        });
    } else {
        $('.section').each(function(){
            $(this).find('video').hide();
        });
    }

    // slides

    $('#main').fullpage({
        css3: true,
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.19, 1, 0.22, 1)',
        anchors: ['hello', 'inkstarter', 'curisco', 'placevomit', 'ijwgh', 'xxxxxxxooo', 'founders', 'cacete'],
        navigation: true,
        navigationTooltips: ['Hello', 'InkStarter.cc', 'Curis.co', 'Placevom.it', 'IJWGH.CLUB', 'XXXXXXX.OOO', 'Founders.com.br', 'Cacete.co'],
        onLeave: function(index){
            $('video')[index-1].pause();
        },
        afterLoad: function(anchorLink){
            $('#' + anchorLink + '-wrapper').find('video')[0].play();
        }
    });

    // target blank

    $('a[rel=external]').attr('target', '_blank');

    // hamburger

    $('.hamburger').on('click',function(){
        $(this).toggleClass('active');
        $('#fp-nav').toggleClass('active');
        if ($(this).hasClass('active')) {
            setTimeout(function(){
                $('#fp-nav ul li').each(function(delay) {
                    $(this).animate({opacity: 0, 'top': '0'}, 0).delay(delay * 73).css({'pointer-events': 'all'}).animate({opacity: 1, 'top': '+=10px'}, 300, 'easeOutExpo');
                });
            },150);
        } else {
            setTimeout(function(){
                $('#fp-nav ul li').each(function(delay) {
                    $(this).css({'pointer-events': 'none'}).delay(delay * 73).animate({opacity: 0, 'top': '0'}, 300, 'easeOutExpo');
                });
            },150);
        }
        return false;
    });

    // versions

    $('.logo').on('click',function(){
        $('#versions a').each(function(delay) {
            $(this).animate({opacity: 0, 'left': '0'}, 0).delay(delay * 73).css({'pointer-events': 'all'}).animate({opacity: 1, 'left': '+=10px'}, 300, 'easeOutExpo');
        });
        return false;
    });

    $('html').on('click',function(event){
        if($(event.target) !== $('logo') && $(event.target) !== $('#versions a')) {
            $('#versions a').each(function(delay) {
                $(this).css({'pointer-events': 'none'}).delay(delay * 73).animate({opacity: 0, 'left': '0'}, 300, 'easeOutExpo');
            });
        }
    });

    // load

    $(window).on('load',function(){
        setTimeout(function(){
            $('#loading').removeClass('active');
        },1000);
    });

    // resize

    $(window).on('debouncedresize',function() {
        $.fn.fullpage.reBuild();
        $.fn.fullpage.moveTo(slidesInfo.indexOf(location.hash)+1);
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