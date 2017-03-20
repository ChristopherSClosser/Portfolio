'use strict';
//function for mobile menu on page ready
$(function(){
  $('content').hide();
  $('.burger').on('click', function() {
    if ($('nav').is(':hidden')) {
      $('.project').hide();
      $('#main-nav').slideDown('fast');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });
  $('.list-projects').on('click', function() {
    if ($('ul').is(':hidden')) {
      $('#project-list').slideDown('fast');
    } else {
      $('#project-list').slideUp('fast');
    }
  });
  $('#me').on('click', function(e){
    e.preventDefault();
    $('.name').fadeOut();
    $('.me').fadeIn();
  });
  $('#project-list li').on('click', function(e) {
    e.preventDefault();
    $('.name').hide();
    $('.me').hide();
    var select = ($(this).text());
    projectView.projectFilter(select);
    $('#project-list').hide();

    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
  });
});
