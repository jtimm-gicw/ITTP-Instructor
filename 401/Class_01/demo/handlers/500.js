'use strict';

/*
========================================================
500 HANDLER
========================================================

500 means:

"The server had an unexpected error."

Instead of crashing,

we catch the error and send
information back.

This helps developers debug
their applications.

--------------------------------------------------------
NEXT FILE:
index.js
--------------------------------------------------------
*/

module.exports = (error, req, res, next)=>{

  res.status(500).send({

    error:500,

    route:req.path,

    message:`SERVER ERROR: ${error}`

  });

};