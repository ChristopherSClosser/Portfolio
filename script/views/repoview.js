'use strict';

(function(module){
  const repoView = {};

  // Handlebars template compile
  // Save the result in this `templateRender` variable.
  repoView.index = function(){

    let source = $('#repo-template').html();
    let templateRender = Handlebars.compile(source);

    // The jQuery `append` method will append an entire array of HTML elements at once:
    $('.github ul').append(
      repos.with('language').map(templateRender)
    );
  };

  repoView.init = () => {
    hideNav();
    $('.gallery').fadeOut();
    $('section').fadeOut();
    $('.me').fadeOut();
    $('.github').fadeIn();
  }

  module.repoView = repoView;
})(window);
