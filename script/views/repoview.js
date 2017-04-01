'use strict';

(function(module) {
  const repoView = {};

  // Handlebars template compile
  // Save the result in this `render` variable.
  repoView.index = function(){

    let source = $('#repo-template').html();
    let templateRender = Handlebars.compile(source);

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('.github ul').append(
      repos.with('name').map(templateRender)
    );
  };
  module.repoView = repoView;
})(window);
