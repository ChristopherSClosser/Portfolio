'use strict';

const homeView = {};

homeView.init = () => {
  $('.github').fadeOut();
  $('section').fadeOut();
  $('.me').fadeOut();
  $('.gallery').fadeIn();
};


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

  //displays gallery imgs in slide show format
  $(function () {
      /* time and transition settings */
    let change_img_time 	= 6000;
    let transition_speed	= 400;

    let simple_slideshow	= $('#slider'), listItems	= simple_slideshow.children('li'), listLen	= listItems.length, i	= 0,

    changeList = function () {
      listItems.eq(i).fadeOut(transition_speed, function () {
    	  i += 1;
    	  if (i === listLen) {
    		  i = 0;
    	  }
    	  listItems.eq(i).fadeIn(transition_speed);
      });
    };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
  });


//function to handle live window sizing
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
