'use strict';

/*
==================================================
loop-examples.js
Demo: JavaScript Loops — for vs while
Code 201
==================================================
*/

/*
🧠 WHAT IS A LOOP?

A loop lets JavaScript repeat an action
instead of writing the same code over and over.

TELL:
"If you’re doing the same thing again and again,
you probably need a loop."
*/

/* ==================================================
🔹 PART 1: FOR LOOPS
================================================== */

/*
WHEN TO USE A for LOOP:
- You know how many times something should run
- You are counting numbers
- You are looping through an array
*/

/*
STRUCTURE OF A for LOOP:

for (start; condition; change) {
  // code to repeat
}
*/

/* ✅ FULL for LOOP EXAMPLE */
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints 0,1,2,3,4
}

/*
EXPLANATION:
- let i = 0 → start counting at 0
- i < 5 → loop runs while i is less than 5
- i++ → increment i by 1 after each loop
*/

/* ==================================================
REAL-WORLD EXAMPLE: LOOPING THROUGH AN ARRAY
================================================== */

let fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/*
TELL:
"We know how many items are in the array,
so a for loop makes sense."
*/

/* ==================================================
🔹 PART 2: WHILE LOOPS
================================================== */

/*
WHEN TO USE A while LOOP:
- You don’t know how many times it will run
- You want to keep going until something changes
*/

/* ✅ FULL while LOOP EXAMPLE */

let count = 0;

while (count < 3) {
  console.log(count); // Prints 0,1,2
  count++; // VERY IMPORTANT: prevents an infinite loop
}

/*
EXPLANATION:
- count < 3 → loop runs while this condition is true
- count++ → increment inside the loop to eventually stop it
*/

/* ==================================================
REAL-WORLD while LOOP EXAMPLE
================================================== */

let isLoggedIn = false;

while (!isLoggedIn) {
  console.log('Waiting for user to log in...');
  isLoggedIn = true; // Simulate user login to stop loop
}

/*
TELL:
"We don’t know when the user will log in,
so while loop is better here."
*/

/* ==================================================
⚠️ COMMON BEGINNER MISTAKE: INFINITE LOOP
================================================== */

/*
// ❌ BROKEN CODE (DO NOT RUN)
let brokenCount = 0;

while (brokenCount < 3) {
  console.log(brokenCount);
  // forgot brokenCount++, this loop never ends
}
*/

/* ✅ FIXED VERSION */

let fixedCount = 0;

while (fixedCount < 3) {
  console.log(fixedCount);
  fixedCount++; // Now the loop stops correctly
}

/* ==================================================
🧑‍💻 QUICK PRACTICE ANSWERS
================================================== */

/* ✅ for LOOP PRACTICE
Goal: Print numbers 1 through 5
*/
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/*
EXPLANATION:
- Start at 1
- Keep looping while i is 5 or less
- Increment i by 1 each time
- Print i each loop
*/

/* ✅ while LOOP PRACTICE
Goal: Print numbers until a variable reaches 5
*/
let practiceCount = 1;

while (practiceCount <= 5) {
  console.log(practiceCount);
  practiceCount++;
}

/*
IMPORTANT:
If you forget practiceCount++, the loop will never stop (infinite loop 🚨)
*/

/* ==================================================
🔁 KEY DIFFERENCES: for vs while
================================================== */

/*
Feature       | for Loop                | while Loop
--------------------------------------------------------
Best used     | know how many times     | don't know how many times
Setup         | all in one line         | condition only
Common use    | arrays, counting        | waiting/checking condition
Risk          | low                     | infinite loop if not careful
*/

/*
TELL:
- Counting → for loop
- Waiting for a change → while loop
*/

/* ==================================================
✅ KEY TAKEAWAYS
================================================== */

/*
- Loops repeat code
- for loops are great for counting and arrays
- while loops run until a condition changes
- Always make sure your loop can stop
*/
