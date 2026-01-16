'use strict';

/*
==================================================
APP.JS — FUNCTION-BASED VERSION 

What we did:
• Took code that ran immediately
• Wrapped each behavior into a function
• Separated WHAT the code does from WHEN it runs

Important rule:
👉 Functions do NOT run until they are called
==================================================
*/

// =====================================
// FUNCTION 1: Greet the User by Name
// =====================================

function greetUser() {
  // Ask the user for their name
  const name = prompt("What's your name?");

  // Find the subtitle element in the HTML
  const subtitle = document.getElementById("subtitle");

  /*
  If the user typed something AND it’s not just spaces:
  • name exists
  • name.trim() removes extra spaces
  */
  if (name && name.trim() !== "") {
    subtitle.textContent = `Welcome ${name}! 🎄`;
  } else {
    // If they clicked cancel or left it blank
    subtitle.textContent = "Welcome friend! 🎄";
  }
}

/*
Teaching note:
• This function does ONE job
• It does not run automatically
• JavaScript is waiting for us to call it
*/

// =====================================
// FUNCTION 2: Time-Based Greeting
// =====================================

function timeGreeting() {
  // Ask the user for the current hour
  const hourInput = prompt("What hour is it right now? (0–23)");

  // Convert the input from text to a number
  const hour = Number(hourInput);

  // Find the subtitle element again
  const subtitle = document.getElementById("subtitle");

  /*
  We use if / else if / else to choose ONE message.
  The first condition that matches will run.
  */
  if (hour >= 0 && hour < 12) {
    subtitle.textContent = "Good morning! ☕";
  } else if (hour >= 12 && hour < 18) {
    subtitle.textContent = "Good afternoon! 🎁";
  } else if (hour >= 18 && hour <= 23) {
    subtitle.textContent = "Good evening! ✨";
  } else {
    // This runs if the input is NOT a valid number
    subtitle.textContent = "Please enter a number between 0 and 23.";
  }
}

/*
Teaching note:
• Conditionals let us respond differently to user input
• Order matters in else-if chains
*/

// =====================================
// FUNCTION 3: Change the Border Color
// =====================================

function changeBorderColor() {
  // Ask the user to pick a color
  const color = prompt(
    "Pick a border color (red, green, blue, yellow, #00ff00)"
  );

  // Find the main content box
  const mainBox = document.getElementById("mainBox");

  /*
  Only change the border if the user typed something
  This prevents empty or accidental changes
  */
  if (color && color.trim() !== "") {
    mainBox.style.border = "6px solid " + color;
  }
}

/*
Teaching note:
• JavaScript can directly change CSS
• .style modifies inline styles on the element
*/

// =====================================
// NOTHING RUNS YET
// =====================================

/*
IMPORTANT:
• No functions are called in this file yet
• This is intentional
• We will decide WHEN these run later
• Either on page load OR with buttons
*/
