'use strict';

(function(module){
  const aboutView = {};

  //show only aboutView elements
  aboutView.init = () => {
    $('.github').fadeOut();
    $('.gallery').fadeOut();
    $('section').fadeOut();
    $('.me').fadeIn();
  };

  module.aboutView = aboutView;
})(window);
