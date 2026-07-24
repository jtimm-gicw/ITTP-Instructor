'use strict';

/*
========================================================
SERVER TESTS
========================================================

Why do we write tests?

Imagine you build a house.

Would you check the doors
only once?

No.

Every time you build another house,

you check again.

Software works the same way.

Tests automatically check
that our code still works.

--------------------------------------------------------
WHAT IS SUPERTEST?

Supertest pretends to be
a web browser.

Instead of opening Chrome,

our tests send requests directly
to our server.

--------------------------------------------------------
*/

const supertest = require('supertest');

const server = require('../server');

const request = supertest(server.app);

describe('API Server', ()=>{

  /*
  --------------------------------------
  TEST THE HOME PAGE
  --------------------------------------
  */

  test('GET / returns Hello World', async()=>{

    const response = await request.get('/');

    expect(response.status).toEqual(200);

    expect(response.text).toEqual('Hello World');

  });

  /*
  --------------------------------------
  TEST THE DATA ROUTE
  --------------------------------------
  */

  test('GET /data returns an object', async()=>{

    const response = await request.get('/data');

    expect(response.status).toEqual(200);

    expect(typeof response.body).toEqual('object');

  });

  /*
  --------------------------------------
  TEST THE MIDDLEWARE

  Did middleware add a timestamp?
  --------------------------------------
  */

  test('Middleware adds timestamp', async()=>{

    const response = await request.get('/data');

    expect(response.body.time).toBeDefined();

  });

  /*
  --------------------------------------
  TEST 404

  Visit a page that doesn't exist.
  --------------------------------------
  */

  test('Unknown route returns 404', async()=>{

    const response = await request.get('/nope');

    expect(response.status).toEqual(404);

  });

  /*
  --------------------------------------
  TEST 500

  Visit the bad route.
  --------------------------------------
  */

  test('Bad route returns 500', async()=>{

    const response = await request.get('/bad');

    expect(response.status).toEqual(500);

  });

});

/*
========================================================
CONGRATULATIONS!

You have now tested:

✔ Home Route

✔ Data Route

✔ Middleware

✔ 404 Errors

✔ 500 Errors

Professional developers write tests
so computers can verify their code
automatically.

Next we'll connect these tests
to GitHub Actions so every push
is tested automatically.
========================================================*/