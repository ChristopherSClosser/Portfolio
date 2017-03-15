'use strict';

// $('.burger').click(function() {
//   if ($('nav').hasClass('hidden')){
//     $('nav').removeClass('hidden').addClass('main-nav-mini');
//     $('.main-nav-mini').slideDown('slow', function(){});
//   }else{
//     $('nav').removeClass('main-nav-mini').addClass('hidden');
//     $('.main-nav-mini').slideUp('slow', function(){});
//   }
// });
$('.burger').click(function () {
  if ( $( 'nav' ).is( ':hidden' ) ) {
    $( '#main-nav' ).slideDown( 'slow' );
  } else {
    $( '#main-nav' ).slideUp();
  }
});
