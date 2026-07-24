'use strict';

/*
========================================================
INDEX.JS
========================================================

This file starts our application.

Think of server.js as
building the car.

Think of index.js as
turning the key.

Without index.js,

the server never starts.

--------------------------------------------------------
NEXT FILE:
server.test.js
--------------------------------------------------------
*/

require('dotenv').config();

const server = require('./server');

server.start(process.env.PORT || 3000);