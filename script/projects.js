'use strict';

Project.all = [];//this will store my projects

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

//looks for localStorage and/or saves to
Project.fetchAll = function() {
  if (localStorage.rawData) {
    var data = JSON.parse(localStorage.rawData);
  } else {
    //ajax call
    ($.getJSON('data/raw.json').then(function(data){
      localStorage.setItem('data', data);
      localStorage.rawData = JSON.stringify(data);
    }));
  }
  // Project.makeProjects();
  data.sort(function(a,b) {
    return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
  });
  data.forEach(function(projectObject) {
    // console.log('this is data', data);
    Project.all.push(new Project(projectObject));
  });
  Project.all.forEach(function(myNewProjectObject) {
    console.log(myNewProjectObject.title);
    $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
    $('#projects').append(myNewProjectObject.toHtml());
  });
};

//creates array of project objects in order newest first
// Project.makeProjects(function(){
//   data.sort(function(a,b) {
//     return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
//   });
//   data.forEach(function(projectObject) {
//     // console.log('this is data', data);
//     Project.all.push(new Project(projectObject));
//   });
//   Project.all.forEach(function(myNewProjectObject) {
//     console.log(myNewProjectObject.title);
//     $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
//     $('#projects').append(myNewProjectObject.toHtml());
//   });
// });
//displays correct project when selected
var projectView = {};

projectView.projectFilter = function(select) {
  $('content a:contains("' + select + '")').parent().parent().fadeIn();
};
