'use strict';

(function(module) {
  const repoView = {};

  repoView.index = function() {
    let source = $('#repo-template').html();
    let templateRender = Handlebars.compile(source);

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#github-projects').append(
      repos.with('name').map(templateRender) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(window);
