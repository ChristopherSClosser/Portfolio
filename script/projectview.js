'use strict';

var projectView = {};
//populates project li items
projectView.makeList = function(){
  Project.all.forEach(function(myNewProjectObject) {
    $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
    $('#projects').append(myNewProjectObject.toHtml());
  });
};

//displays correct project when selected
projectView.projectFilter = function(select) {
  $('content a:contains("' + select + '")').parent().parent().fadeIn();
};
