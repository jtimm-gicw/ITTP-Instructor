'use strict';

/*
  STUDENT INSTRUCTIONS

  PART 1:
  - Use prompt() to collect information
  - Display the results on the page

  PART 2:
  - Comment out the prompt-based code
  - Use buttons and click events instead

  IMPORTANT:
  JavaScript will NOT work unless your HTML ids
  exactly match the ids you use in getElementById().
*/

/* =========================
   PART 1: PROMPT PRACTICE
   ========================= */

// STEP 3:
// Ask the user for their name using prompt()
const userName = prompt("What is your name?");

// STEP 4:
// Create an element in HTML and give it an id
// Replace YOUR_MESSAGE_ID with that id
const messageEl = document.getElementById("YOUR_MESSAGE_ID");

// STEP 5:
// Display a message based on the user's input
if (userName && userName.trim() !== "") {
  messageEl.textContent = `Welcome, ${userName}!`;
} else {
  messageEl.textContent = "Welcome, friend!";
}


// STEP 6:
// Ask the user for the current hour (0–23)
const hourInput = prompt("What hour is it? (0–23)");
const hour = Number(hourInput);

// STEP 7:
// Create another element in HTML for the time message
const timeEl = document.getElementById("YOUR_TIME_ID");

// STEP 8:
// Display a message based on the time
if (hour >= 0 && hour < 12) {
  timeEl.textContent = "Good morning ☀️";
} else if (hour < 18) {
  timeEl.textContent = "Good afternoon 🌤️";
} else if (hour <= 23) {
  timeEl.textContent = "Good evening 🌙";
} else {
  timeEl.textContent = "Please enter a number between 0 and 23.";
}


// STEP 9:
// Ask the user to choose a color
const color = prompt("Pick a color for the box border");

// STEP 10:
// Create a box element in HTML and give it an id
const boxEl = document.getElementById("YOUR_BOX_ID");

// STEP 11:
// Change the box border using the user's color
if (color && color.trim() !== "") {
  boxEl.style.border = "5px solid " + color;
}


/* =========================
   PART 2: BUTTON PRACTICE
   (DO NOT USE YET)
   ========================= */

/*
  WHEN YOU ARE READY FOR BUTTONS:

  1. COMMENT OUT the prompt code above
  2. Add buttons to your HTML
  3. Give each button an id
  4. Replace the placeholder ids below
  5. Uncomment ONE section at a time
*/

/*
// Name Button
document.getElementById("YOUR_NAME_BUTTON_ID").addEventListener("click", () => {
  const name = prompt("What is your name?");
  const messageEl = document.getElementById("YOUR_MESSAGE_ID");

  messageEl.textContent = name
    ? `Welcome, ${name}!`
    : "Welcome, friend!";
});
*/

/*
// Time Button
document.getElementById("YOUR_TIME_BUTTON_ID").addEventListener("click", () => {
  const hour = Number(prompt("What hour is it? (0–23)"));
  const timeEl = document.getElementById("YOUR_TIME_ID");

  if (hour < 12) timeEl.textContent = "Good morning ☕";
  else if (hour < 18) timeEl.textContent = "Good afternoon 🎁";
  else timeEl.textContent = "Good evening ✨";
});
*/

/*
// Color Button
document.getElementById("YOUR_COLOR_BUTTON_ID").addEventListener("click", () => {
  const color = prompt("Pick a border color");
  const boxEl = document.getElementById("YOUR_BOX_ID");

  if (color) boxEl.style.border = "5px solid " + color;
});
*/
