$(function(){


    $(".products__items").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".products__items").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".header__btn-menu").on('click',function () {
        $('.menu__list ul').slideToggle();

    });

});