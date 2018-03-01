'use strict';

//function to handle live window sizing
$(function(){
  let $window = $(window),
    width = $window.width(),
    height = $window.height();

  function quickHideAddressBar() {
    setTimeout(function() {
      if(window.pageYOffset !== 0) return;
      window.scrollTo(0, window.pageYOffset + 1);

    }, 1000);
  }
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
