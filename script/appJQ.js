'use strict';
//function for mobile menu on page ready
$(function(){
  $('section').hide();
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
  $('#project-list li').on('click', function(e) {
    e.preventDefault();
    console.log(this);
    $('#project-list').slideUp('fast');
    $('element').fadeOut('fast');
    $('.projects').fadeIn('slow');
  });
});
