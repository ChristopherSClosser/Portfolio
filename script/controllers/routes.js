'use strict';
// This is where we define the client-side routes

page('route', callback);

page('/home', homeView.init);

page('/about', aboutView.init);

page();
