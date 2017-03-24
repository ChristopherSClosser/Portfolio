'use strict';

// Done: Initialize your project using NPM to create and populate a package.json file
const express = require('express');

// Done: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();

const PORT = process.env.PORT || 2020;

// Done: Include all of the static resources as an argument to app.use()
app.use(express.static('.'));

app.get('.', function(request, response) {
  // Done: Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: '.'})
});

//Write a new route that will handle a request and send the new.html file back to the user
// app.get('/new', function(request, response){
//   response.sendFile('public/new.html', {root: '.'});
// });
app.listen(PORT, function() {

  // Done: Log to the console a message that lets you know which port your server has started on
  console.log('The port is: ' + PORT);
});
