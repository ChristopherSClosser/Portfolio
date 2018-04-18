'use strict';

(function(module){
  const projectView = {};

  // show only project elements
  projectView.init = () => {
    $('.github').fadeOut();
    $('.gallery').fadeOut();
    $('.me').fadeOut();
    $('section').fadeIn();
    $('content').fadeIn();
  };

  // populates project items
  projectView.makeList = function(){
    Project.all.map(function(myNewProjectObject) {
      $('#project-list').append('<div >' + myNewProjectObject.title + '</div><hr>').hide();
      $('#projects').append(myNewProjectObject.toHtml());
    });
  };

  // displays correct project when selected
  projectView.projectFilter = function(select) {
    $('content a:contains("' + select + '")').parent().parent().fadeIn();
  };

  // gives me a word count for my project bodies
  // projectView.wordCount = function(){
  //   let totalWords = Project.all.map(function(project){
  //     return project.body.split(' ').length;
  //   }).reduce(function(acc, val){
  //     return acc + val;
  //   });
  //   $('.foot').text('Total word count for all projects bodies ' + totalWords);
  // };

  module.projectView = projectView;
})(window);
