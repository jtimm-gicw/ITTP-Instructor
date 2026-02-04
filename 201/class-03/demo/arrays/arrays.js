'use strict';

/*
  ===============================
  JavaScript Arrays Demo
  ===============================

  This file demonstrates:
  - What an array is
  - How to create an array using an array literal
  - How index-based access works
  - What happens when you access an index that does not exist
*/

/*
  --------------------------------
  WHAT IS AN ARRAY?
  --------------------------------
  An array is a way to store multiple values
  inside a single variable.
*/

// Instead of doing this:
// let name1 = 'Alex';
// let name2 = 'Sam';
// let name3 = 'Jordan';

// We can do this:
let names = ['Alex', 'Sam', 'Jordan'];

/*
  The square brackets [] tell JavaScript:
  "This is an array"

  Each value inside the array is separated
  by a comma.
*/

console.log(names); // Logs the entire array

/*
  --------------------------------
  INDEX-BASED ACCESS
  --------------------------------
  Each item in an array has a position number
  called an index.

  IMPORTANT RULE:
  Index numbers start at 0, not 1.
*/

// Accessing values using index numbers
console.log(names[0]); // 'Alex'
console.log(names[1]); // 'Sam'
console.log(names[2]); // 'Jordan'

/*
  names[0] → first item
  names[1] → second item
  names[2] → third item
*/

/*
  --------------------------------
  WHAT IF THE INDEX DOES NOT EXIST?
  --------------------------------
*/

console.log(names[3]); // undefined

/*
  JavaScript returns 'undefined' because
  there is no value stored at index 3.

  This is NOT an error.
  It just means "nothing is there".
*/

/*
  --------------------------------
  ARRAYS CAN STORE DIFFERENT DATA TYPES
  --------------------------------
*/

let person = ['Alex', 30, true];

/*
  This array contains:
  - a string
  - a number
  - a boolean

  JavaScript allows mixed data types in arrays.
*/

console.log(person[0]); // 'Alex'
console.log(person[1]); // 30
console.log(person[2]); // true

/*
  --------------------------------
  PRACTICE EXAMPLE
  --------------------------------
*/

let foods = ['pizza', 'tacos', 'sushi'];

/*
  Index positions:
  foods[0] → 'pizza'
  foods[1] → 'tacos'
  foods[2] → 'sushi'
*/

console.log(foods[1]); // 'tacos'
console.log(foods[0]); // 'pizza'

/*
  --------------------------------
  KEY TAKEAWAYS
  --------------------------------
  - Arrays store multiple values
  - Use [] to create an array (array literal)
  - Index numbers start at 0
  - Access values using array[index]
  - Accessing a missing index returns undefined
*/
