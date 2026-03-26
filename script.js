

$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('header').removeClass("header-fixed");
        } else {
            $('header').addClass("header-fixed");
        }
    });

    $('.menu-toggle').on('click', function () {
        $('.nav-links').toggleClass('active');
    });
})