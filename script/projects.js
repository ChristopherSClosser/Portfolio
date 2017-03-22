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

//creates array of project objects in order
// Project.loadAll = function(projectDataSet) {
projectDataSet.sort(function(a,b) {
  return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
});
projectDataSet.forEach(function(projectObject) {
  Project.all.push(new Project(projectObject));
});
// };
// Project.fetchAll = function() {
//   if (localStorage.rawData) {
//     Project.loadAll(JSON.parse(localStorage.rawData));
//     projectView.initIndexPage();
//   } else {
//     Project.loadAll($.getJSON('data/hackerIpsum.json').then(function(data){
//       localStorage.setItem('data', data);
//       localStorage.rawData = JSON.stringify(data);
//       Project.loadAll(data);
//       projectView.initIndexPage();
//     }));
//   }
// };

//makes list of projects in nav
Project.all.forEach(function(myNewProjectObject) {
  $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
  $('#projects').append(myNewProjectObject.toHtml());

});

var projectView = {};

projectView.projectFilter = function(select) {
  $('content a:contains("' + select + '")').parent().parent().fadeIn();
};
