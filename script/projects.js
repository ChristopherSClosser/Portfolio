'use strict';
(function(module){
Project.all = [];//this will store my projects

//project constructor
function Project (rawProjectData) {
  for (var key in rawProjectData) {
    this[key] = rawProjectData[key];
  }
};

//method for Project that renders it to the DOM
Project.prototype.toHtml = function() {
  let source = $('#project-template').html();
  let templateRender = Handlebars.compile(source);
  return templateRender(this);
};

//looks for localStorage and/or saves to
Project.fetchAll = function(callback) {
  if (localStorage.rawData) {
    let data = JSON.parse(localStorage.rawData);
    Project.makeProjects(data);
    projectView.makeList();
  } else {
    //ajax call
    $.getJSON('data/raw.json')
    .then(function(data){
      localStorage.setItem('data', data);
      localStorage.rawData = JSON.stringify(data);
      Project.makeProjects(data);
      projectView.makeList();
    }, function(err) {
      console.error(err);
    });
  }
};

//creates array of project objects in order newest first
Project.makeProjects = function(data){
  data.sort(function(a,b) {
    return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
  });
  data.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  });
};
  module.Project = Project;
})(window);
