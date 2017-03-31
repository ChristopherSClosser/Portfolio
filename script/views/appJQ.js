'use strict';

// const homeView = {};

function hideNav(){
  if (window.innerWidth <= 500){
    $('#main-nav').slideUp('fast');
  }
};

// homeView.init = () => {
  console.log('in the thing im tryin to do');
  $('#home').on('click', function(){
    hideNav();
    $('.github').fadeOut();
    $('.me').fadeOut();
    $('section').fadeOut();
    $('.gallery').fadeIn();
  });
// };

$('#gallery').on('click', function(){
  hideNav();
  $('.github').fadeOut();
  $('section').fadeOut();
  $('.me').fadeOut();
  $('.gallery').fadeIn();
});

$('#me').on('click', function(){
  hideNav();
  $('.github').fadeOut();
  $('.gallery').fadeOut();
  $('section').fadeOut();
  $('.me').fadeIn();
});

$('#github').on('click', function(){
  hideNav();
  $('.gallery').fadeOut();
  $('section').fadeOut();
  $('.me').fadeOut();
  $('.github').fadeIn();
});

//function for mobile menu on page ready
$(function(){
  $('section').hide();

  $('.burger').on('click', function(){
    if ($('nav').is(':hidden')){
      $('#main-nav').slideDown('fast');
    } else {
      $('#main-nav').slideUp('fast');
    }
  });

  $('.list-projects').on('click', function(){
    if ($('ul').is(':hidden')){
      $('#project-list').animate({width:'toggle'},350);
    } else {
      $('#project-list').slideUp('fast');
    }
  });

  $('#project-list li').on('click', function(e){
    e.preventDefault();
    $('.gallery').hide();
    $('.me').hide();

    if ($(this).text() === 'Show all'){
      $('section').fadeIn();
      $('content').fadeIn();
    }else{
      $('content').hide();
      let $select = ($(this).text());
      projectView.projectFilter($select);
      $('section').fadeIn();
    }

    $('#project-list').hide();

    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
  });

  // AJAX call to gitHub API and render
  $.get('/github/user/repos?type=owner')
  .then(
    data => data.map(repo => $('.github').append(`<li>${repo.name}</li>`))
  );

  $(function(){
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
