'use strict';

/*
========================================================
STAMPER MIDDLEWARE
========================================================

Middleware runs BEFORE a route.

Request

↓

Middleware

↓

Route

↓

Response

Today's middleware is simple.

It adds the current date and time
onto the request object.

Later we'll learn middleware for:

✔ Authentication

✔ Logging

✔ Validation

✔ Permissions

--------------------------------------------------------
NEXT FILE:
handlers/404.js
--------------------------------------------------------
*/

module.exports = (req, res, next)=>{

  req.timestamp = new Date();

  next();

};