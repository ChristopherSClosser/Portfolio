'use strict';
//function for mobile menu on page ready
$(function(){
  $('content').hide();
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
    $('.name').fadeOut();
    var select = ($(this).text());
    projectView.projectFilter(select);
    console.log(select);
    $('#project-list').slideUp('fast');
  });
});
