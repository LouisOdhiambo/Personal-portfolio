$(document).ready(function (){

    $('.menuTogler').on ('click', function (){
      $(this).toggleClass('open');
      $('.navBar').toggleClass('open');
    });

    $('.navBar').on ('click', function (){
      $('.menuTogler').removeClass('open');
      $('.navBar').removeClass('open');
    });

    $('nav a[href*="#"]').on ('click', function (){
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
      }, 2000);
    });

    $('#up').on ('click', function (){
      $('html, body').animate({
        scrollTop: 0
      }, 2000);
    });

    AOS.init({
      easing:'ease',
      duration: 1800
    });


});