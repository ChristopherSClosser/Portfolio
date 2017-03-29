'use strict';

let projectView = {};
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

//displays gallery imgs in slide show format
$(function () {
    /* time and transition settings */
  let change_img_time 	= 6000;
  let transition_speed	= 300;

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
