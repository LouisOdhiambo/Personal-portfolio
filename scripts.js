$(document).ready(function (){
    $('.menuTogler').on ('click', function (){
      $(this).toggleClass('open');
      $('.navBar').toggleClass('open');
    });
});