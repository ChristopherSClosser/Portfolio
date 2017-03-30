'use strict';

let projectView = {};
//populates project li items
projectView.makeList = function(){
  Project.all.map(function(myNewProjectObject) {
    $('#project-list').append('<li>' + myNewProjectObject.title + '</li><hr>').hide();
    $('#projects').append(myNewProjectObject.toHtml());
  });
};

//displays correct project when selected
projectView.projectFilter = function(select) {
  $('content a:contains("' + select + '")').parent().parent().fadeIn();
};

//gives me a word count for my project bodies
projectView.wordCount = function(){
  let totalWords = Project.all.map(function(project){
    return project.body.split(' ').length;
  }).reduce(function(acc, val){
    return acc + val;
  });
  $('.foot').text('Total word count for all projects bodies ' + totalWords);
};


//displays gallery imgs in slide show format
$(function () {
    /* time and transition settings */
  let change_img_time 	= 6000;
  let transition_speed	= 400;

  let simple_slideshow	= $('#slider'), listItems	= simple_slideshow.children('li'), listLen	= listItems.length, i	= 0,

  changeList = function () {
    listItems.eq(i).fadeOut(transition_speed, function () {
  	  i += 1;
  	  if (i === listLen) {
  		  i = 0;
  	  }
  	  listItems.eq(i).fadeIn(transition_speed);
    });
  };

  listItems.not(':first').hide();
  setInterval(changeList, change_img_time);
});
