'use strict';

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone().removeClass('template');

  $newProject.attr('data-category', this.category);
  $newProject.attr('data-author', this.author);
  $newProject.find('.byline a').text(this.author);
  $newProject.find('.byline a').attr('href', this.authorUrl);
  $newProject.find('h1:first').text(this.title);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.dateCreated);
  $newProject.find('time[pubdate]').attr('title', this.dateCreated);

  return $newProject;
};
