$(function(){
  $('.bRacket').click(function(){
    $('.bRacketProduct').show();
    $('.bWearProduct').hide();
  });
  $('.bWear').click(function(){
    $('.bRacketProduct').hide();
    $('.bWearProduct').show();
  });
});
