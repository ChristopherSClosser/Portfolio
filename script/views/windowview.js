'use strict';

//function to handle live window sizing
$(function(){
  let $window = $(window);
  let width = $window.width();
  let height = $window.height();
  $(window).on('resize', function(){
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
    }, 1000);
  });
});
