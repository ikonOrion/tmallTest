$(function(){
    $("div.head-carousel-bar-right a").mouseenter(function(){
        var left = $(this).position().left;
        var top = $(this).position().top;
        var width = $(this).css("width");
        var destLeft = parseInt(left) + parseInt(width)/2;
        $("img#catear").css("left",destLeft);
        $("img#catear").css("top",top-20);
        $("img#catear").fadeIn(500);
    });
    $("div.head-carousel-bar-right a").mouseleave(function(){
        $("img#catear").hide();
    });
});