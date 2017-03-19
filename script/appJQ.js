'use strict';
//function for mobile menu on page ready
$(function(){
  $('.burger').on('click', function() {
    $('.project').hide();
    if ($('nav').is(':hidden')) {
      $('.project').hide();
      $('#main-nav').slideDown('slow');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });
  $('.list-projects').on('click', function() {
    if ($('ul').is(':hidden')) {
      $('#project-list').slideDown('slow');
    } else {
      $('#project-list').slideUp('fast');
    }
  });
});
