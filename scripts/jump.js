$(document).ready(function() {
$('.nav_jump').click(function(event) {
    var id = $(this).attr("href");
    // var offset = 70;
    var target = $(id).offset().top;
    $('html, body').animate({
      scrollTop: target
    }, 800);
    event.preventDefault();
  });
});
