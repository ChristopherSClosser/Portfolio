'use strict';

var projects = [];//this will store my projects

//project constructor
function Project (rawProjectData) {
  for (var key in rawProjectData) {
    this[key] = rawProjectData[key];
  }
};

//method for Project that renders it to the DOM
Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

//creates array of project objects
projectDataSet.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

//makes list of projects in nav
projects.forEach(function(myNewProjectObject) {
  $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
  $('#projects').append(myNewProjectObject.toHtml());

});

var projectView = {};

projectView.projectFilter = function(select) {
  $('content a:contains("' + select + '")').parent().parent().fadeIn();
};
