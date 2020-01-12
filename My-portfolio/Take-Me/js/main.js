$(function () {
        new WOW().init();
        $('.form-select,.review-top__select').niceSelect();
        $('.magical-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                prevArrow: false,
                nextArrow: false,
                variableWidth: true
        });
        $('.services-slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt=""></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt=""></button>',
        });
        $('.box-tags').tagify({
                placeholder: 'input tag'
        });
        $(function () {
                $('.more').click(function () {
                        $(this).parent().next().toggle(700);
                });
        });
        $('.more').on('click',function(){
                $(this).toggleClass('active');
        })

        $(".js-range-slider").ionRangeSlider({
                type: "double",
                skin: "round",
                min: 0,
                max: 5000,
                from: 20,
                to: 4000,
                prefix: "$"
        });

});
