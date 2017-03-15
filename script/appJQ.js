'use strict';

$('.burger').click(function () {
  if ( $( 'nav' ).is( ':hidden' ) ) {
    $( '#main-nav' ).slideDown( 'slow' );
  } else {
    $( '#main-nav' ).slideUp();
  }
});
