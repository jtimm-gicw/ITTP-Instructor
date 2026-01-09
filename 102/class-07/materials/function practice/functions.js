'use strict';

/*
=====================================
LIVE PRACTICE: FUNCTIONS
=====================================

INSTRUCTIONS FOR EACH PRACTICE:

1. READ the code.
2. TURN the code into a function.
3. GIVE the function a clear name.
4. CALL the function so it runs.

DO NOT change what the code does.
ONLY reorganize it into a function.
*/

/* =====================================
   PRACTICE 1: Greeting Message
   ===================================== */

// CURRENT CODE (works already):
const name = prompt("What is your name?");
const greeting = document.getElementById("message");

if (name && name.trim() !== "") {
  greeting.textContent = `Hello, ${name}!`;
} else {
  greeting.textContent = "Hello, friend!";
}

/*
TODO:
- Wrap this code in a function called greetUser
- Call the function
*/



/* =====================================
   PRACTICE 2: Time of Day Message
   ===================================== */

// CURRENT CODE:
const hourInput = prompt("What hour is it? (0–23)");
const hour = Number(hourInput);
const timeMessage = document.getElementById("time");

if (hour < 12) {
  timeMessage.textContent = "Good morning ☀️";
} else if (hour < 18) {
  timeMessage.textContent = "Good afternoon 🌤️";
} else {
  timeMessage.textContent = "Good evening 🌙";
}

/*
TODO:
- Turn this into a function called showTimeGreeting
- Call the function
*/



/* =====================================
   PRACTICE 3: Change Box Color
   ===================================== */

// CURRENT CODE:
const color = prompt("Pick a border color");
const box = document.getElementById("box");

if (color && color.trim() !== "") {
  box.style.border = "5px solid " + color;
}

/*
TODO:
- Turn this into a function called changeBoxColor
- Call the function
*/



/* =====================================
   PRACTICE 4: Confirm Choice
   ===================================== */

// CURRENT CODE:
const wantsDarkMode = confirm("Turn on dark mode?");
const page = document.body;

if (wantsDarkMode) {
  page.style.backgroundColor = "#222";
  page.style.color = "white";
}

/*
TODO:
- Turn this into a function called toggleDarkMode
- Call the function
*/



/* =====================================
   PRACTICE 5: Console Message
   ===================================== */

// CURRENT CODE:
console.log("JavaScript is running!");

/*
TODO:
- Turn this into a function called logMessage
- Call the function
*/


/* =====================================
   BONUS PRACTICE 6: Toggle Text Message
   ===================================== */

/*
GOAL:
Create a function that CHANGES the text on the page
each time the function runs.

WHAT IT SHOULD DO:
- The page has an element with the id "toggle-text"
- The first time the function runs, it should say:
  "The message is ON"
- The next time it runs, it should say:
  "The message is OFF"
- Then ON again, then OFF again, every time

RULES:
- You MUST create:
  1. A variable OUTSIDE the function
  2. A function named toggleMessage
  3. An if / else statement inside the function
- Call the function once to test it

HINTS:
- You need to remember the current state
- Think: true / false
- The function should UPDATE the page
*/

// ✏️ WRITE YOUR CODE BELOW THIS LINE



