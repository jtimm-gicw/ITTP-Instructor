'use strict';

/*
======================================
JavaScript Operators Overview
======================================

Contents-
1. Comparison Operators
2. Assignment Operators

Each section includes:
- What the operator does
- How it is used
- Notes for beginners
- Practical examples

Use this file to read, run, and experiment.
*/

/* =====================================================
   SECTION 1: COMPARISON OPERATORS
===================================================== */

/*
Comparison operators compare two values.
They ALWAYS return a BOOLEAN value:
true or false.
*/

// -------------------------------------
// Equal to (==)
// -------------------------------------
// Compares VALUES only (type coercion happens)

console.log(5 == '5');      // true
console.log(0 == false);    // true

// NOTE:
// == can cause confusing results
// Avoid using it when possible


// -------------------------------------
// Strict Equal to (===)
// -------------------------------------
// Compares VALUE and TYPE (recommended)

console.log(5 === 5);       // true
console.log(5 === '5');     // false

// NOTE:
// Always prefer === in modern JavaScript


// -------------------------------------
// Not Equal (!=)
// -------------------------------------
// Compares values only

console.log(10 != '10');    // false
console.log(10 != 5);       // true


// -------------------------------------
// Strict Not Equal (!==)
// -------------------------------------
// Compares value and type

console.log(10 !== '10');   // true
console.log(10 !== 10);     // false
 

// -------------------------------------
// Greater Than (>)
// -------------------------------------

console.log(8 > 5);         // true
console.log(3 > 5);         // false


// -------------------------------------
// Less Than (<)
// -------------------------------------

console.log(2 < 6);        // true
console.log(6 < 2);         // false


// -------------------------------------
// Greater Than or Equal To (>=)
// -------------------------------------

console.log(10 >= 10);      // true
console.log(9 >= 10);       // false


// -------------------------------------
// Less Than or Equal To (<=)
// -------------------------------------

console.log(5 <= 5);        // true
console.log(7 <= 5);        // false


// -------------------------------------
// Practical Example
// -------------------------------------

const score = 55;

if (score >= 70) {
  console.log('You passed the test.');
} else {
  console.log('You did not pass.');
}


/* =====================================================
   SECTION 2: ASSIGNMENT OPERATORS
===================================================== */

/*
Assignment operators assign values to variables.
Some assignment operators also perform calculations.
*/

// -------------------------------------
// Assignment (=)
// -------------------------------------
// Stores a value in a variable

let total = 10;
console.log(total);         // 10


// -------------------------------------
// Addition Assignment (+=)
// -------------------------------------
// Adds a value and stores the result

total += 5;                 // same as: total = total + 5
console.log(total);         // 15


// -------------------------------------
// Subtraction Assignment (-=)
// -------------------------------------
// Subtracts a value and stores the result

total -= 3;                 // same as: total = total - 3
console.log(total);         // 12


// -------------------------------------
// Multiplication Assignment (*=)
// -------------------------------------
// Multiplies and stores the result

total *= 2;                 // same as: total = total * 2
console.log(total);         // 24


// -------------------------------------
// Division Assignment (/=)
// -------------------------------------
// Divides and stores the result

total /= 4;                 // same as: total = total / 4
console.log(total);         // 6


// -------------------------------------
// Remainder Assignment (%=)
// -------------------------------------
// Stores the remainder after division

total %= 4;                 // same as: total = total % 4
console.log(total);         // 2


// -------------------------------------
// Practical Example: Counter
// -------------------------------------

let counter = 0;

counter += 1;   // increment
counter += 1;
counter -= 1;   // decrement

console.log(counter);       // 1


// -------------------------------------
// Key Takeaways for Students
// -------------------------------------
// - Comparison operators return true or false
// - Assignment operators store or update values
// - +=, -=, *=, /= make code shorter and clearer
// - These operators are commonly used together
