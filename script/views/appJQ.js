'use strict';

function hideNav(){
  if (window.innerWidth <= 500){
    $('#main-nav').slideUp('fast');
  }
};

$('#home').on('click', function(){
  hideNav();
  $('.github').fadeOut();
  $('.me').fadeOut();
  $('section').fadeOut();
  $('.gallery').fadeIn();
});

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
  //call to get github-projects the callback is the repoView
  repos.requestRepos(repoView.index);
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
    $('.github').fadeOut();
    $('.gallery').fadeOut();
    $('.me').fadeOut();

    if ($(this).text() === 'Show all'){
      $('section').fadeIn();
      $('content').fadeIn();
    }else{
      $('content').hide();
      let $select = ($(this).text());
      projectView.projectFilter($select);
      $('section').fadeIn();
    }

    $('#project-list').slideUp('fast');

    if (window.innerWidth <= 500){
      $('#main-nav').slideUp('fast');
    }
  });
});
