'use strict';

/*
========================================================
SERVER.JS
========================================================

This is the main file of our Express application.

Think of this file as the "traffic controller."

Its job is to:

✔ Create the Express app
✔ Import other files (modules)
✔ Create routes
✔ Connect middleware
✔ Connect error handlers
✔ Export the application

Notice that this file DOES NOT start the server.
We'll do that later in index.js.

--------------------------------------------------------
NEXT FILE:
middleware/stamper.js
--------------------------------------------------------
*/

const express = require('express');
const app = express();

// Import our custom modules
const stamper = require('./middleware/stamper');
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

/*
--------------------------------------------------------
ROUTE #1
--------------------------------------------------------

GET /

When someone visits the home page,
send back "Hello World"

Notice that our middleware runs FIRST.
*/

app.get('/', stamper, (req, res) => {

  res.status(200).send('Hello World');

});

/*
--------------------------------------------------------
ROUTE #2
--------------------------------------------------------

GET /data

Return a simple JSON object.

Notice we're using the timestamp
that middleware added to our request.
*/

app.get('/data', stamper, (req, res) => {

  let outputObject = {

    10: "even",

    5: "odd",

    time: req.timestamp

  };

  res.status(200).json(outputObject);

});

/*
--------------------------------------------------------
BAD ROUTE

This intentionally creates an error.

We'll use this later to test
our 500 error handler.
*/

app.get('/bad', (req, res, next) => {

  next('Something went wrong!');

});

/*
--------------------------------------------------------
ERROR HANDLERS

These MUST come AFTER all routes.
*/

app.use('*', notFoundHandler);

app.use(errorHandler);

/*
--------------------------------------------------------
START FUNCTION

Starts our server.
*/

function start(port){

  app.listen(port, ()=>{

    console.log(`Server running on Port ${port}`);

  });

}

/*
--------------------------------------------------------
EXPORTS

We're exporting BOTH:

app
start()

Why?

Our tests need access to app.

index.js needs access to start().
*/

module.exports = {

  app,

  start

};