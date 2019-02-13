<<<<<<< HEAD
$(document).ready(function(){
  $('#priceone').click(function(){
var priceone = $(this).val();
// il faut enlever l'alert quand on aura crée la fenêtre modale....
alert('le prix est de :' + priceone);
=======
$(function(){
  $('.bRacket').click(function(){
    $('.bRacketProduct').show();
    $('.bWearProduct').hide();
  });
  $('.bWear').click(function(){
    $('.bRacketProduct').hide();
    $('.bWearProduct').show();
>>>>>>> 74f61c8e3f65df07c4dfa2e5d25aeca5c0edbf0e
  });
});
