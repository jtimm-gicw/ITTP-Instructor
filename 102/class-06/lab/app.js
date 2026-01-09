'use strict';

// This is a single-line comment

/*
This is a multi-line comment.
We often use these to explain sections of code.
*/

// =====================================
// PROMPT-BASED VERSION (runs immediately)
// =====================================

// Ask the user for their name as soon as the page loads
const name = prompt("What's your name?");

// Find the subtitle element in the HTML
const subtitle = document.getElementById("subtitle");

// If the user typed something (and not just spaces)
if (name && name.trim() !== "") {
  subtitle.textContent = `Welcome ${name}!`;
} else {
  subtitle.textContent = `Welcome friend!`;
}

// -------------------------------------
// Time-based greeting using prompt
// -------------------------------------

const hourInput = prompt("What hour is it right now? (0-23)");
const hour = Number(hourInput);

const seasonLine = document.getElementById("season-line");

if (hour >= 0 && hour < 12) {
  subtitle.textContent = "Good morning!";
} else if (hour >= 12 && hour < 18) {
  subtitle.textContent = "Good afternoon!";
} else if (hour >= 18 && hour <= 23) {
  subtitle.textContent = "Good evening!";
} else {
  subtitle.textContent = "Be careful, add a number between 0–23";
}

// -------------------------------------
// Color change using prompt
// -------------------------------------

const mainBox = document.getElementById("mainBox");
const color = prompt("Pick a border color (red, green, blue, yellow, #00ff00)");

if (color && color.trim() !== "") {
  mainBox.style.border = "6px solid " + color;
}

/* ======================================================
   BUTTON-BASED VERSION (event-driven)
   👉 Uncomment ONE section at a time for demos
   ====================================================== */

/*
// GREET BUTTON VERSION
// This does NOT run automatically.
// It only runs when the button is clicked.
document.getElementById("btnGreet").addEventListener("click", () => {
  const name = prompt("What is your name?");
  const subtitle = document.getElementById("subtitle");

  subtitle.textContent = name
    ? `Welcome, ${name}! 🎄`
    : "Welcome, friend! 🎄";
});
*/

/*
// TIME BUTTON VERSION
// Notice: No prompt runs until the button is clicked
document.getElementById("btnTime").addEventListener("click", () => {
  const hour = Number(prompt("What hour is it? (0–23)"));
  const seasonLine = document.getElementById("season-line");

  if (hour < 12) {
    seasonLine.textContent = "Good morning ☕";
  } else if (hour < 18) {
    seasonLine.textContent = "Good afternoon 🎁";
  } else {
    seasonLine.textContent = "Good evening ✨";
  }
});
*/

/*
// COLOR BUTTON VERSION
// JavaScript waits quietly until the user clicks
document.getElementById("btnColor").addEventListener("click", () => {
  const color = prompt("Pick a border color:");
  const mainBox = document.getElementById("mainBox");

  if (color) {
    mainBox.style.border = "6px solid " + color;
  }
});
*/
