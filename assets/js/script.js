<<<<<<< HEAD
$(function() {
  $('.bRacket').click(function() {
=======
$(document).ready(function(){
  $('#priceone').click(function(){
var priceone = $(this).val();
// il faut enlever l'alert quand on aura crée la fenêtre modale....
alert('le prix est de :' + priceone);
});
});

$(function(){
  $('.bRacket').click(function(){
>>>>>>> c50ece5019db7360765f630c75d3e7813f417e1a
    $('.bRacketProduct').show();
    $('.bWearProduct').hide();
  });
  $('.bWear').click(function() {
    $('.bRacketProduct').hide();
    $('.bWearProduct').show();

  });
  $(".navbar a, footer a").on("click", function(event) {

    event.preventDefault();
    var hash = this.hash;

    $('body,html').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function() {
      window.location.hash = hash;
    });

  });
});
