$(function() {
  $('.bRacket').click(function() {
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
