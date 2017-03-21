'use strict';
//function for mobile menu on page ready
$(function(){
  $('content').hide();
  $('.burger').on('click', function() {
    if ($('nav').is(':hidden')) {
      $('#main-nav').slideDown('fast');
    } else {
      $('#main-nav').slideUp('fast');
    }
    $('nav').show();
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
    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
    $('.name').fadeOut();
    $('section').hide();
    $('.me').fadeIn();
  });
  $('#project-list li').on('click', function(e) {
    e.preventDefault();
    $('.name').hide();
    $('.me').hide();
    console.log($(this).text());
    if ($(this).text() === 'Show all'){
      $('section').show();
      $('content').fadeIn();
    }else{
      $('content').hide();
      var select = ($(this).text());
      projectView.projectFilter(select);
    }
    $('#project-list').hide();
    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
    // $( window ).resize(function() {
    //   if (window.innerWidth >= 500){
    //     $('nav').css('style', 'display: inline-block');
    //   }
    // });
  });
});
