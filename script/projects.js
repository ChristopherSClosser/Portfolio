'use strict';

Project.all = [];//this will store my projects

//project constructor
function Project (rawProjectData) {//change to rawData
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

//creates array of project objects in order newest first
// Project.loadAll = function(rawData) {
//   rawData.sort(function(a,b) {
//     return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
//   });
//   rawData.forEach(function(projectObject) {
//     Project.all.push(new Project(projectObject));
//   });
// };

// projectDataSet.sort(function(a,b) {
//   return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
// });
// projectDataSet.forEach(function(projectObject) {
//   // console.log('this is data', data);
//   Project.all.push(new Project(projectObject));
// });

Project.fetchAll = function() {
  if (localStorage.rawData) {
    // console.log('<---------------this is the stringified JSON--------------->', JSON.stringify(localStorage.rawData));
    // console.log('<----------------this is the parsed JSON--------------->', JSON.parse(localStorage.rawData));
    var data = JSON.parse(localStorage.rawData);
    //projectView.initIndexPage();
  } else {
    ($.getJSON('data/raw.json').then(function(data){
      localStorage.setItem('data', data);
      localStorage.rawData = JSON.stringify(data);
      // console.log('<----------------This is stingyfied rawData--------------->', localStorage.rawData);
      // Project.loadAll(data);
      //projectView.initIndexPage();
    }));
  }
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
// console.log(myNewProjectObject.title);
// Project.all.forEach(function(myNewProjectObject) {
//   console.log(myNewProjectObject.title);
//   $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
//   $('#projects').append(myNewProjectObject.toHtml());
// });

// console.log('<----------------This is Project.all--------------->', Project.all);
//makes list of projects in nav
// projectView.popList = function(){
//   Project.all.forEach(function(myNewProjectObject) {
//     $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
//     $('#projects').append(myNewProjectObject.toHtml());
//
//   });
// };
var projectView = {};

projectView.projectFilter = function(select) {
  $('content a:contains("' + select + '")').parent().parent().fadeIn();
};

//need to separate projectview.js and project.js
