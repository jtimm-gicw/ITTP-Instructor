'use strict';

/************************************
 ARROW FUNCTIONS
************************************/


// =============================
// STEP 1: FUNCTION EXPRESSION (OLD WAY)
// =============================

// const theOldWay = function(course) {
//   return `I am currently enrolled in ${course}`;
// };

// console.log('Old way:', theOldWay('Code 301'));


// =============================
// STEP 2: BASIC ARROW FUNCTION
// =============================

// const theNewWay = (course) => {
//   return `I am currently enrolled in ${course}`;
// };

// console.log('Arrow function:', theNewWay('Code 301'));


// =============================
// STEP 3: REMOVE PARENTHESES (ONE PARAM)
// =============================

// const withoutParens = course => {
//   return `I am currently enrolled in ${course}`;
// };

// console.log('Without parentheses:', withoutParens('Code 301'));


// =============================
// STEP 4: ONE-LINER (IMPLICIT RETURN)
// =============================

// const oneLiner = course => `I am currently enrolled in ${course}`;

// console.log('One-liner:', oneLiner('Code 301'));


// =============================
// STEP 5: MULTIPLE PARAMETERS
// =============================

// const add = function(num1, num2) {
//   return `${num1} + ${num2} = ${num1 + num2}`;
// };

// console.log(add(4, 5));


// =============================
// STEP 6: MULTIPLE PARAMS (ARROW)
// =============================

// const addArrow = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// console.log(addArrow(4, 5));


// =============================
// STEP 7: MULTI-LINE FUNCTION
// =============================

// const multiLiner = word => {
//   word = word.toUpperCase();
//   return word;
// };

// console.log(multiLiner('hello'));


// =============================
// STEP 8: RETURNING OBJECTS (OLD WAY)
// =============================

// const oldObject = function(array) {
//   return {
//     first: array[0],
//     second: array[1],
//     third: array[2]
//   };
// };

// console.log(oldObject(['a', 'b', 'c']));


// =============================
// STEP 9: RETURNING OBJECTS (ARROW WAY)
// =============================

// const newObject = array => ({
//   first: array[0],
//   second: array[1],
//   third: array[2]
// });

// console.log(newObject(['a', 'b', 'c']));


// =============================
// STEP 10: PRACTICE CONVERSIONS
// =============================

// let sum = function(a, b, c, d) {
//   return a + b + c + d;
// };

// console.log(sum(1, 2, 3, 4));


// let message = function(name) {
//   return `Hello, ${name}!`;
// };

// console.log(message('Allie'));


// =============================
// STEP 11: THIS (IMPORTANT!)
// =============================

// function Student(name) {
//   this.name = name;
// }

// Student.prototype.sayName = function() {
//   console.log(this.name);
// };

// let joe = new Student('Joe');
// joe.sayName(); // Works


// =============================
// STEP 12: THIS BREAKS WITH ARROW
// =============================

// Student.prototype.sayName = () => {
//   console.log(this.name);
// };

// joe.sayName(); // ❌ undefined or window


// =============================
// STEP 13: SCOPE COMPARISON
// =============================

// Student.prototype.scope = function() {
//   console.log('Normal function this:', this);
// };

// Student.prototype.scopeArrow = () => {
//   console.log('Arrow function this:', this);
// };

// joe.scope();        // correct
// joe.scopeArrow();   // incorrect


// =============================
// STEP 14: STUDENT PRACTICE
// =============================

// TODO:
// Convert these to arrow functions:

// function multiply(a, b) {
//   return a * b;
// }

// function greet(name) {
//   return `Hi ${name}`;
// }


// =============================
// STEP 15: CHALLENGE
// =============================

// TODO:
// Write an arrow function that:
// - Takes an array
// - Returns only even numbers

// Example:
// [1,2,3,4] → [2,4]


/************************************
 END OF FILE
************************************/