'use strict';

//  Initialize your project using NPM to create and populate a package.json file
const express = require('express');

// Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();

const PORT = process.env.PORT || 2020;

// Include all of the static resources as an argument to app.use()
app.use(express.static('.'));

app.get('.', function(request, response) {
  // Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: '.'})
});

//Write a new route that will handle a request and send the new.html file back to the user

app.listen(PORT, function() {

  // Log to the console a message that lets you know which port your server has started on
  console.log('The port is: ' + PORT);
});
