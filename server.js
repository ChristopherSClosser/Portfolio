'use strict';

//  Initialize project using NPM to create and populate a package.json file
const express = require('express');
const requestProxy = require('express-request-proxy');

// Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();

// Connection to DATABASE
const conString = process.env.DATABASE_URL || 'postgres://chris:test@localhost:5432/kilovolt';
const PORT = process.env.PORT || 2020;

// Include all of the static resources as an argument to app.use()
app.use(express.static('.'));
app.get('/github/*', proxyGitHub);

// Handles the request to gitHub
function proxyGitHub(req, res){
  console.log('>>>routing request for gitHub resource<<<');
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers:{
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('.', function(request, response) {
  // Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: '.'})
});

//a new route that will handle a request and send the new.html file back to the user and log the PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
