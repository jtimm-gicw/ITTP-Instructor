/******************************************************************
  CALLBACK FUNCTIONS DEMO
  ================================================================

  GOALS:
  - Understand what a callback function is
  - Learn how functions can be passed as parameters
  - See how callbacks are commonly used
  - Watch the process through console.log()

******************************************************************/


/* ================================================================
   WHAT IS A CALLBACK FUNCTION?
================================================================ */

/**
 * A callback function is:
 *
 * 👉 A function passed into another function
 *    as an argument (parameter).
 *
 * The receiving function can then
 * "call back" (execute) that function later.
 *
 * VERY IMPORTANT:
 * ------------------------------------------------
 * Functions in JavaScript are VALUES.
 *
 * This means functions can be:
 * - stored in variables
 * - passed into other functions
 * - returned from functions
 */


/* ================================================================
   EXAMPLE 1 — BASIC FUNCTION
================================================================ */

/**
 * First, let's create a normal function.
 */

function sayHello() {
  console.log('Hello from the sayHello function!');
}

/**
 * Calling the function normally:
 */

console.log('\n--- EXAMPLE 1: NORMAL FUNCTION ---');

sayHello();

/**
 * OUTPUT:
 * Hello from the sayHello function!
 */


/* ================================================================
   EXAMPLE 2 — PASSING A FUNCTION AS A PARAMETER
================================================================ */

/**
 * Here is a function that accepts
 * ANOTHER FUNCTION as a parameter.
 */

function processUser(callbackFunction) {

  console.log('Processing user...');

  /**
   * Execute the callback function
   */
  callbackFunction();

  console.log('Finished processing.');
}

/**
 * Pass sayHello INTO processUser
 *
 * IMPORTANT:
 * ------------------------------------------------
 * We write:
 * sayHello
 *
 * NOT:
 * sayHello()
 *
 * WHY?
 * ------------------------------------------------
 * sayHello     = passing the function itself
 * sayHello()   = immediately running the function
 */

console.log('\n--- EXAMPLE 2: CALLBACK FUNCTION ---');

processUser(sayHello);

/**
 * OUTPUT:
 * Processing user...
 * Hello from the sayHello function!
 * Finished processing.
 */


/* ================================================================
   EXAMPLE 3 — ANOTHER CALLBACK FUNCTION
================================================================ */

/**
 * We can pass DIFFERENT callback functions
 * into the SAME function.
 */

function sayGoodbye() {
  console.log('Goodbye from the callback!');
}

console.log('\n--- EXAMPLE 3: DIFFERENT CALLBACK ---');

processUser(sayGoodbye);

/**
 * OUTPUT:
 * Processing user...
 * Goodbye from the callback!
 * Finished processing.
 */


/* ================================================================
   EXAMPLE 4 — USING AN ARROW FUNCTION AS A CALLBACK
================================================================ */

/**
 * Instead of creating a separate named function,
 * we can create the callback directly inline.
 */

console.log('\n--- EXAMPLE 4: INLINE CALLBACK ---');

processUser(() => {
  console.log('This is an inline callback function!');
});

/**
 * OUTPUT:
 * Processing user...
 * This is an inline callback function!
 * Finished processing.
 */


/* ================================================================
   EXAMPLE 5 — CALLBACK WITH DATA
================================================================ */

/**
 * Callbacks become VERY useful
 * when working with data.
 */

function greetUser(name, callback) {

  console.log(`Preparing greeting for ${name}...`);

  /**
   * Send data INTO the callback
   */
  callback(name);
}

/**
 * Callback function receives the data
 */

function displayGreeting(userName) {
  console.log(`Hello ${userName}!`);
}

console.log('\n--- EXAMPLE 5: CALLBACK WITH DATA ---');

greetUser('Jason', displayGreeting);

/**
 * OUTPUT:
 * Preparing greeting for Jason...
 * Hello Jason!
 */


/* ================================================================
   EXAMPLE 6 — CALLBACKS INSIDE forEach()
================================================================ */

/**
 * MANY JavaScript methods use callbacks.
 *
 * forEach() is a VERY common example.
 */

console.log('\n--- EXAMPLE 6: forEach CALLBACK ---');

let people = ['John', 'Cathy', 'Allie'];

people.forEach((person) => {

  /**
   * This function is a CALLBACK
   *
   * forEach() runs this function
   * once for every item in the array.
   */

  console.log(person);
});

/**
 * OUTPUT:
 * John
 * Cathy
 * Allie
 */


/* ================================================================
   EXAMPLE 7 — SIMULATING A DELAY
================================================================ */

/**
 * Callbacks are VERY common with:
 * - timers
 * - APIs
 * - events
 * - async programming
 */

console.log('\n--- EXAMPLE 7: setTimeout CALLBACK ---');

console.log('Waiting 2 seconds...');

/**
 * setTimeout() takes:
 *
 * 1. callback function
 * 2. delay in milliseconds
 */

setTimeout(() => {
  console.log('Timer finished!');
}, 2000);

/**
 * OUTPUT:
 * Waiting 2 seconds...
 *
 * (2 second delay)
 *
 * Timer finished!
 */


/* ================================================================
   HOW CALLBACKS WORK STEP-BY-STEP
================================================================ */

/**
 * STEP 1:
 * ------------------------------------------------
 * Create a function
 *
 * function sayHello() {
 *   console.log('hello');
 * }
 *
 *
 * STEP 2:
 * ------------------------------------------------
 * Pass the function into another function
 *
 * processUser(sayHello);
 *
 *
 * STEP 3:
 * ------------------------------------------------
 * The receiving function executes it
 *
 * callbackFunction();
 *
 *
 * RESULT:
 * ------------------------------------------------
 * The callback runs later when needed.
 */


/* ================================================================
   COMMON REAL-WORLD USES
================================================================ */

/**
 * Callbacks are used everywhere in JavaScript:
 *
 * ✅ Array methods
 *    - forEach()
 *    - map()
 *    - filter()
 *
 * ✅ Timers
 *    - setTimeout()
 *    - setInterval()
 *
 * ✅ Event listeners
 *    - button clicks
 *    - keyboard events
 *
 * ✅ APIs and async programming
 *    - fetching data
 *    - loading information
 */


/* ================================================================
   FINAL TAKEAWAYS
================================================================ */

/**
 * CALLBACK FUNCTION:
 * ------------------------------------------------
 * A function passed into another function.
 *
 * IMPORTANT:
 * ------------------------------------------------
 * functionName     → pass the function
 * functionName()   → run the function
 *
 * CALLBACKS HELP:
 * ------------------------------------------------
 * ✅ make code reusable
 * ✅ organize logic
 * ✅ respond to events
 * ✅ process data later
 * ✅ power modern JavaScript
 */
