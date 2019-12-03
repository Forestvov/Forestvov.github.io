$('.selection__text-top').hide();
$('.selection__text-middle').hide();
$('.selection__text-bot').hide();

$('.selection__btn-top').on('click', function(event) {
    $(this).toggleClass("active");
    $('.selection__text-top').slideToggle('show');
});

$('.selection__btn-bot').on('click', function(event) {
    $(this).toggleClass("active");
    $('.selection__text-bot').slideToggle('show');
});

$('.selection__btn-middle').on('click', function(event) {
    $(this).toggleClass("active");
    $('.selection__text-middle').slideToggle('show');
});


$('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
});