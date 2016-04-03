
$( document ).ready(function() {
  $('<img/>').attr('src', 'img/nyc.jpg').load(function() {
     $(this).remove(); // prevent memory leaks as @benweet suggested
     $('#background-image').css('background-image', 'url(img/nyc.jpg)');
     $('#background-image').addClass('fadeIn');
  });
});
