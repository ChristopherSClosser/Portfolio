'use strict';
//function for mobile menu
$(function(){
  $('.burger').on('click', function () {
    if ( $('nav').is(':hidden') ) {
      $('#main-nav').slideDown('slow');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });

  var $nav = $('#main-nav');
  var $w = $(window).width();
  if($w >= 500) {
    console.log('the window is larger than ', $w);
    $nav.removeClass('hidden');
  }else{
    $nav.addClass('hidden');
  }
});
