'use strict';
//function for mobile menu
$(function(){
  $('.burger').on('click', function() {
    if ($('nav').is(':hidden')) {
      $('#main-nav').slideDown('slow');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });
  $('.list-projects').on('click', function() {
    if ($('ul').is(':hidden')) {
      $('#project').slideDown('slow');
    } else {
      $('#project').slideUp('fast');
    }
  });
});
