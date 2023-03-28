$(".burger-wrap").click(function () {
        $(".header__navigation").toggleClass("header__navigation--open");
        $(".burger").toggleClass('burger--close');
});
$('a.anchor').on('click', function (e) {
    e.preventDefault();
    var $anchor = $(this).attr('href');
    var $stop = $($anchor).offset().top - 0;
    $('body,html').stop(true, true).animate({scrollTop: $stop}, 1000);
    return false;
});