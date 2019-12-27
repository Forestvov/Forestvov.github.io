$(function(){

    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'<img class="slider-arrows slider-arrows-left" src="img/arrows-left.png" alt="">',
        nextArrow:'<img class="slider-arrows slider-arrows-right" src="img/arrows-right.png" alt="">'
    });
    $(".catalog__items").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".catalog__items").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.slider__rents').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<img class="slider-arrows slider-arrows-left slider-arrows-rents" src="img/arrows-left.png" alt="">',
        nextArrow:'<img class="slider-arrows slider-arrows-right slider-arrows-rents" src="img/arrows-right.png" alt="">'
    });
});