'use strict';

(function(module){
  const aboutView = {};

  aboutView.init = () => {
    hideNav();
    $('.github').fadeOut();
    $('.gallery').fadeOut();
    $('section').fadeOut();
    $('.me').fadeIn();
  }
  module.aboutView = aboutView;
})(window);
