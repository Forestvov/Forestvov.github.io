$(function(){

    document.querySelector('.menu-icon__wrapper').onclick = function(){
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    }
    $(".menu-icon__wrapper").on('click',function () {
        $('.menu ul').slideToggle();
    });
    
});