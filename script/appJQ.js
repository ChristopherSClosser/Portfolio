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
  });

  $('.list-projects').on('click', function() {
    if ($('ul').is(':hidden')) {
      $('#project-list').animate({width:'toggle'},350);
    } else {
      $('#project-list').slideUp('fast');
    }
  });

  $('#me').on('click', function(){
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
  });

  $(function() {
    var $window = $(window);
    var width = $window.width();
    var height = $window.height();
    setInterval(function () {
      if ((width != $window.width()) || (height != $window.height())) {
        width = $window.width();
        height = $window.height();
        if (width >= 500){
          $('#main-nav').show();
        }else if (width <= 500){
          $('#main-nav').hide();
        }

      }
    }, 200);
  });
});
