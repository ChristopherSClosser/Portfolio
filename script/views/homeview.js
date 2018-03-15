'use strict';

(function(module){
  const homeView = {};

  // show only homeView elements
  homeView.init = () => {
    $('.gallery').fadeIn('fast');
    $('.github').fadeOut();
    $('section').fadeOut();
    $('.me').fadeOut();
  };
  module.homeView = homeView;
})(window);

// displays gallery imgs in slide show format
$(function () {
  /* time and transition settings */
  let change_img_time 	= 6000,
    transition_speed	= 400,
    simple_slideshow	= $('#slider'),
    listItems	= simple_slideshow.children('li'),
    listLen	= listItems.length, i	= 0,

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
