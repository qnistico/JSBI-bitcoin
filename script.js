




$( document ).ready(function() {
  new WOW().init();
});




$(window).scroll(function () {
  if ($(document).scrollTop() == 0) {
      $('#header_nav').removeClass('tiny');
  } else {
      $('#header_nav').addClass('tiny');
  }
});









