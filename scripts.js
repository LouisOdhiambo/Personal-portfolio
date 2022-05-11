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


    let i = 0;
    let target = document.getElementById("typewriter");
    let text = target.innerHTML;
    target.innerHTML = ' ';
    let speed = 75; //speed duration of effect in millisec

    typeWriter(); //to call function
    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello there!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I specialize in Java')
    .pauseFor(2000)
    .deleteChars(4)
    .typeString('Kotlin')
    .pauseFor(2000)
    .deleteChars(6)
    .typeString('and flutter')
    .pauseFor(2000)
    .deleteAll()
    .typeString('You can find more below')
    .pauseFor(2500)
    .start();

});