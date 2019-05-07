$(document).ready(function() {
  // $('body').hide(3000).delay(1000).show(1000); body hiding animation jquery

  $('figure img').mouseenter(function() {
    $(this).fadeTo(600, .01);
  }).mouseleave(function() {
    $(this).fadeTo(1000, 1);
  }).click(function() {
    $(this).next().toggle(700);
  });

  // footer animation

  $('footer').click(function() {
    $(this).animate({
      top: '-=50px',
      opacity: '-=.2'
    }, 900)
  }).dblclick(function() {
    $(this).animate({
      top: '0',
      opacity: '1'
    }, 900)
  });

  $('header').click(function() {
    $(this).animate({
      width: '50%'
    }, 900)
  }).dblclick(function() {
    $(this).animate({
      width: '100%'
    }, 900)
  });
});
