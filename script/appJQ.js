'use strict';

$(document).ready(function(){
  $('.burger').on('click', function () {
    if ( $('nav').is(':hidden') ) {
      $('#main-nav').slideDown('slow');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });

  var x = $('#main-nav');
  var w = $(window).width();
  if(w >= 500) {
    console.log('the window is larger than ', w);
    x.removeClass('hidden');
  }else{
    x.addClass('hidden');
  }
});
