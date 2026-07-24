'use strict';

/*
========================================================
404 HANDLER
========================================================

What is a 404?

It means:

"The page you're looking for
doesn't exist."

Instead of crashing,

our server returns a helpful message.

--------------------------------------------------------
NEXT FILE:
handlers/500.js
--------------------------------------------------------
*/

module.exports = (req,res)=>{

  res.status(404).send({

    error:404,

    route:req.path,

    message:'Not Found'

  });

};