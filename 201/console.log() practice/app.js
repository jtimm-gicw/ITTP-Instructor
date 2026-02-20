'use strict';

// 1️⃣ Simple message
console.log("JavaScript is connected!");

// 2️⃣ Show a variable
let name = "Jason";
console.log("Hello, " + name);

// 3️⃣ Show math running
let total = 5 + 10;
console.log("5 + 10 =", total);

// Error catching
// console.log(myVariable);

// functions
// 1️⃣ Create a simple function
function greet(name) {
  console.log("The greet function ran!");
  return "Hello, " + name;
}

// 2️⃣ Call the function
let message = greet("Jason");

// 3️⃣ Log the returned value
console.log("Function returned:", message);