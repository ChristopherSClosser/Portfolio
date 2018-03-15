'use strict';

$(function(){
  // Keep track of last scroll
  var lastScroll = 0;
  $(window).scroll(function(event){
    // Sets the current scroll position
    var st = $(this).scrollTop();
    // Determines up-or-down scrolling
    if (st > lastScroll){
      // function call for downward-scrolling
      $('.ckata').hide();
      $('.linked').hide();
      $('header').slideUp('fast');
    }
    else {
      // function call for upward-scrolling
      $('header').slideDown('fast');
      $('.ckata').fadeIn('fast');
      $('.linked').fadeIn('fast');
    }
    // Updates scroll position
    lastScroll = st;
  });
});

// function for mobile menu on page ready
$(function(){
  $('section').hide();

  $('.burger').on('click', function(){
    if ($('nav').is(':hidden')){
      $('#main-nav').slideDown('fast');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });

  // hide nav into burger when width is small
  $('#home, #github, #gallery, #me').on('click', function(){
    if (window.innerWidth <= 739){
      $('#main-nav').slideUp('fast');
    }
  });

  // displays project list on click for mobile
  $('.list-projects').on('click', function(){
    if ($('.dropdown-content').is(':hidden')){
      // $('#project-list').animate({width: 'toggle'},350);
      $('#project-list').slideDown('fast');
    } else {
      $('#project-list').slideUp('fast');
    }
  });

  // handles projects to display
  $('.dropdown-content').on('click', function(e){
    e.preventDefault();
    $('.github').fadeOut();
    $('.gallery').fadeOut();
    $('.me').fadeOut();

    if (e.target.id === 'all'){
      $('section').fadeIn();
      $('content').fadeIn();
    }else{
      $('content').hide();
      let $select = (e.target.text);
      projectView.projectFilter($select);
      $('section').fadeIn();
    }

    $('.dropdown-content').slideUp('fast');

    if (window.innerWidth <= 739){
      $('#main-nav').slideUp('fast');
    }
  });
});
