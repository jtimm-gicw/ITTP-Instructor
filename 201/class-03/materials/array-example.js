'use strict';

/*
  ===============================
        JavaScript Arrays
  ===============================

  An array is a way to store multiple values
  inside ONE variable.

  Think of an array like a list.
*/

/*
  --------------------------------
  CREATING AN ARRAY (ARRAY LITERAL)
  --------------------------------
  Square brackets [] tell JavaScript
  that this is an array.
*/

let colors = ['red', 'blue', 'green'];

/*
  This array contains three strings.
  Each value is separated by a comma.
*/

console.log(colors); // Shows the entire array

/*
  --------------------------------
  INDEX-BASED ACCESS
  --------------------------------
  Each item in an array has a position number
  called an index.

  IMPORTANT:
  Index numbers start at 0 (not 1).
*/

/*
  Index positions:
  colors[0] → 'red'
  colors[1] → 'blue'
  colors[2] → 'green'
*/

console.log(colors[0]); // 'red'
console.log(colors[1]); // 'blue'
console.log(colors[2]); // 'green'

/*
  --------------------------------
  WHAT IF THE INDEX DOES NOT EXIST?
  --------------------------------
*/

console.log(colors[3]); // undefined

/*
  'undefined' means:
  "There is no value stored at this position."

  This is NOT an error.
*/

/*
  --------------------------------
  ARRAYS CAN STORE DIFFERENT DATA TYPES
  --------------------------------
*/

let student = ['Jordan', 25, true];

/*
  This array stores:
  - a string (name)
  - a number (age)
  - a boolean (is enrolled)

  JavaScript allows mixed data types in arrays.
*/

console.log(student[0]); // 'Jordan'
console.log(student[1]); // 25
console.log(student[2]); // true

/*
  --------------------------------
  PRACTICE: READ AND PREDICT
  --------------------------------
*/

let foods = ['pizza', 'tacos', 'sushi'];

/*
  Question:
  What value will each line log?
*/

console.log(foods[1]); // ?
console.log(foods[0]); // ?
console.log(foods[2]); // ?

/*
  --------------------------------
  KEY IDEAS TO REMEMBER
  --------------------------------
  ✔ Arrays store multiple values
  ✔ Use [] to create an array
  ✔ Index numbers start at 0
  ✔ Use array[index] to get a value
  ✔ Missing index = undefined
*/
