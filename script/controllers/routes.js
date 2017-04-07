'use strict';
// This is where we define the client-side routes

page('/home', homeView.init);

page('/about', aboutView.init);

page('/gallery', homeView.init);

page('/github', repoView.init);

page('/projects', projectView.init);

page();
