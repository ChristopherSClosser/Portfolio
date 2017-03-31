'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.get('/github/user/repos?type=owner')
      .then(
        // render the data
        data => repos.all = data)
      .then(callback)
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
