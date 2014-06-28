///* My Fancy Javascript + jQuery */
$(document).ready(function () {
    if ($(document).width() >= 820) { /* If the document's width is greater than 820px aka. our css media query... */
        /*
         **
         ** HEADER BEHAVIOUR
         **
         */
        $('nav li:not([id])').mouseenter(function () {
            $(this).animate({
                backgroundColor: "#5F856A",
                color: "#ffffff"
            }, 400);
        });
        $('nav li:not([id])').mouseleave(function () {
            $(this).animate({
                backgroundColor: "transparent",
                color: "#5F856A"
            }, 400);
        });

        /*
         **
         ** PROJECT SELECTION BEHAVIOUR
         **
         */
        $("#middle article[id^='proj'] h3").css('opacity', '0');
        $("#middle article[id^='proj']").mouseenter(function () {
            $(this).find('h3').animate({
                opacity: 1
            }, 300);
        });
        $("#middle article[id^='proj']").mouseleave(function () {
            $(this).find('h3').animate({
                opacity: 0
            }, 300);
        });
    } else {
        $("#middle h3").show();
        $("#mobileMenu").click(function () {
            if (!$("nav").is(":visible")) {
                $("nav").slideDown(300);
            } else {
                $("nav").slideUp(300);
            }
        });
    }
});