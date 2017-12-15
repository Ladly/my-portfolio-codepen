$(document).ready(function(){
  $("#certif").click(function() {
    $('html, body').animate({
      scrollTop: $(".certificates").offset().top
    }, 2000);
  });
  $("#portf").click(function() {
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top
    }, 2000);
  });
  $("#contact").click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-me").offset().top
    }, 2000);
  });
  $("#about").click(function() {
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top
    }, 2000);
  });
});

