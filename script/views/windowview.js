'use strict';

//function to handle live window sizing
$(function(){
  let $window = $(window),
    width = $window.width(),
    height = $window.height();

  window.addEventListener('load',function() {
    setTimeout(function(){
      // This hides the address bar:
      window.scrollTo(0, 1);
    }, 0);
  });

  //handles how the nav behaves on a window size change
  $(window).on('resize', function(){
    setInterval(function () {

      if ((width != $window.width()) || (height != $window.height())) {
        width = $window.width();
        height = $window.height();

        if (width >= 739){
          $('#main-nav').show();
        }else if (width <= 739){
          $('#main-nav').hide();
        }
      }
    }, 1000);
  });
});
