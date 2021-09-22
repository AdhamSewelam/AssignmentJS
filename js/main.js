$(".navslide i").click(function () {
    $(".options").toggle(700)
})

$(document).ready(function () {
    $(".para-info:first").css("display", "block");
    $(".title-info").click(function () {
        $(this).next().slideToggle(1000);
        $(".para-info").not($(this).next()).slideUp(1000);
    })
})

function countdown() {
    var date = new Date();
    var eventDate = new Date(2022, 01, 01);

    var currentTiime = date.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " DAYS" + "</h3>";
    document.getElementById("hours").innerHTML = "<h3>" + h + " HOURS" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " MINUTES" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " SECONDS" + "</h3>";

    setTimeout(countdown, 1000);
}
countdown();

$(function(){
    var max =100;
    $("textarea").keyup(function(){
        var length=$(this).val().length;
        var character = max - length;
        if(character<=0)
            {
                 $("#char").text("Your Available Character Finished");
            }
        else{
        $("#char").text(character);
        }
    });
});

$("a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1500);
    
})