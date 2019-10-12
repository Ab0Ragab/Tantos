/*global $, document, window*/

$(document).ready(function () {
    
    "use strict";
    
    //nice scroll
    
    $("html").niceScroll();
    
    $("#a").hide();
    
    $(".addList").click(function () {
        
        $("#a").toggle("style");
        
    });
    
    //smooth scroll to div
    
    $('.header li ').click(function () {
        
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    //caching scrolltop element
    
    var scrollbutton = $("#scroll-up");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 50) {
            scrollbutton.show();
        } else {
            scrollbutton.hide();
        }
    });
    
    //click on button to scroll top
    
    scrollbutton.click(function () {
        
        $("html, body").animate({scrollTop : 0}, 400);
        
    });

});

