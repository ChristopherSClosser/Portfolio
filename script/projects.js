'use strict';

var projects = [];//this will store my projects

function Project (rawProjectData) {
  for (var key in rawProjectData) {
    this[key] = rawProjectData[key];
  }
};

//method for Project that renders it to the DOM
Project.prototype.toHtml = function() {
  var $newProject = $('section.template').clone().removeClass('template');

  $newProject.find('h1:first').html(this.title);
  $newProject.find('.body').html(this.body);
  $newProject.find('.date').text(this.dateCreated);

  return $newProject;
};

projectDataSet.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(myNewProjectObject){
  $('#projects').append(myNewProjectObject.toHtml());
});
