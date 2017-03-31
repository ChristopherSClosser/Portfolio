'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  repoView.index = function() {
    ui();
    let source = $('#repo-template').html();
    let templateRender = Handlebars.compile(source);

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      repos.with('name').map(templateRender) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(window);
