'use strict';
// This is where we define the client-side routes
//page('route', callback);

page('/home', homeView.init);
console.log('in the route home');
// page('/about', aboutView.init);
// page('/contacts', contactsView.init);
page();//!!!!!!!!!!!!!!!!!!!!!!!!!very important to call page()!!!!!!!!!!!!!!!!!!!!!!!!!
