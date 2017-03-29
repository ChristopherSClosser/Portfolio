'use strict';
//function for mobile menu on page ready
$(function(){
  $('section').hide();

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
    $('.gallery').fadeOut();
    $('section').hide();
    $('.me').fadeIn();
  });

  $('#project-list li').on('click', function(e) {
    e.preventDefault();
    $('.gallery').hide();
    $('.me').hide();

    if ($(this).text() === 'Show all'){
      $('section').fadeIn();
      $('content').fadeIn();
    }else{
      $('content').hide();
      let select = ($(this).text());
      projectView.projectFilter(select);
      $('section').fadeIn();
    }

    $('#project-list').hide();

    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
  });

  //$('#slides > img:gt(0)').hide();
  // setInterval(function() {
  //   $('#slides > img:first')
  //     .fadeOut(500)
  //     .next()
  //     .fadeIn(500)
  //     .end()
  //     .appendTo('#slides');
  // },3000);

  $(function() {
    let $window = $(window);
    let width = $window.width();
    let height = $window.height();
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
