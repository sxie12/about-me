// This is the JavaScript file

$(window).scroll(function() {
    /* Use math expression to make it fade depending on height
     * and limit the amount of fade to 0.6
     */
    var topOff = $(window).scrollTop();
    if (topOff <= 0) {
        $('.desktop_header_table').css("opacity", 1);
        $('.header').css("opacity", 1);
    } 
    else {
        $('.desktop_header_table').css("opacity", 0.6);
        $('.header').css("opacity", 0.6);
    }
});

var hover = $('.header').hover(function() {
        $('.desktop_header_table').css("opacity", 1);
        $('.header').css("opacity", 1);
});


$(document).ready(hover);
