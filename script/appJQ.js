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
    $('#project-list').hide();

    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
  });
});
