'use strict';

var projects = [];//this will store my projects

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

projectDataSet.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(myNewProjectObject, list) {
  var list = myNewProjectObject.title;
  $('#project-list').append('<li>' + myNewProjectObject.title + '</li>').hide();
  $('#projects').append(myNewProjectObject.toHtml());
  console.log(myNewProjectObject.title);
});
