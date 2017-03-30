'use strict';

//  Initialize project using NPM to create and populate a package.json file
const express = require('express');

// Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://chris:test@localhost:5432/kilovolt';
const PORT = process.env.PORT || 2020;

// Include all of the static resources as an argument to app.use()
app.use(express.static('.'));

app.get('.', function(request, response) {
  // Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: '.'})
});

//Write a new route that will handle a request and send the new.html file back to the user and log the PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
