'use strict';

// =======================
// Basic Setup (unchanged)
// =======================
// We keep this console.log so we know the JS file is connected correctly.
console.log('JS loaded from external file!');


// =======================
// REFACTOR GOAL
// Turn big chunks of code into smaller functions.
// This makes our code:
// - Easier to read
// - Easier to reuse
// - Easier to change later
// =======================


// =======================
// Function 1: Greet the user
// (This used to be at the top as loose code.)
// We wrapped the alerts + name prompt + welcome message
// into one function so it's all in one "job".
// =======================
function greetUser() {
  // Show welcome messages (moved here from the top of the file)
  alert('Welcome to The Awesome Shop!');
  alert('Glad you decided to stop by.');

  // Ask for the user's name (used to be a global variable)
  let userName = prompt('What is your name?');
  console.log('User name:', userName);

  // Use the name in a welcome message on the page
  document.write('<h2>Welcome, ' + userName + '! Thanks for visiting The Awesome Shop.</h2>');
  // WHY: Keeping this inside the function keeps all "greeting logic"
  // in one place instead of scattered in the file.
}


// =======================
// Function 2: Ask for favorite item
// (This used to be loose code with a prompt + if/else chain.)
// We moved it into a function to group this logic together.
// =======================
function askFavoriteItem() {
  // Ask what the user likes most
  let favoriteItem = prompt('Do you like gadgets, snacks, or clothes the most?');

  // Use a conditional to display a custom message
  if (favoriteItem === 'gadgets') {
    document.write('<p>Great choice! Our gadget section is ⚡ AMAZING ⚡.</p>');
  } else if (favoriteItem === 'snacks') {
    document.write('<p>Snacks are awesome! Check out our tasty selections 🍪😋.</p>');
  } else if (favoriteItem === 'clothes') {
    document.write('<p>Fashion time! Our clothes section has all the style 👕✨.</p>');
  } else {
    document.write('<p>No worries! Explore anything that looks fun 😄.</p>');
  }

  // WHY: Putting this in a function makes it clear that this
  // block of code has a single job: handle the "favorite item" question.
}


// =======================
// Function 3: Let the user set the background color
// (This used to be loose code at the bottom.)
// Now it's a function so we can see that this part of the
// program controls the look of the page.
// =======================
function setBackgroundColor() {
  // Ask the user to pick a background color
  let userColor = prompt('Pick a background color for the shop (e.g. red, blue, green, pink):');

  // Apply that color to the page background
  document.body.style.backgroundColor = userColor;

  // NOTE: If the color isn't valid, the browser may ignore it.
  // WHY: Keeping this in a function makes it easy to change
  // how we handle colors later without touching other logic.
}


// =======================
// Optional: Main "driver" function
// This function shows the overall steps of our program.
// It calls each of the smaller functions in order.
// =======================
function runShopExperience() {
  // First: greet the user and ask for their name
  greetUser();

  // Second: ask about their favorite type of item
  askFavoriteItem();

  // Third: let them pick a background color
  setBackgroundColor();
  // WHY: This gives us a "big picture" view of what the script does.
  // If we want to change the flow later, we just edit this function.
}


// =======================
// Start the program
// =======================
// Before refactoring, the code just ran top-to-bottom on its own.
// Now we control everything by calling ONE main function.
runShopExperience();


// =======================
// 🌟 Stretch Goal Ideas (Still commented out)
// NOTE: These could also be turned into functions later
// (for example: function showDiscount(), function showLuckyItem(), etc.)
// =======================

// --- Idea 1: Ask user if they want a discount ---
// let wantsDiscount = confirm('Do you want a secret discount?');
// if (wantsDiscount) {
//   document.write('<h3>You unlocked a 10% discount! 🎉</h3>');
// } else {
//   document.write('<h3>No problem! Enjoy browsing 😄</h3>');
// }

// --- Idea 2: Random number generator for a "lucky item" ---
// let luckyNumber = Math.floor(Math.random() * 5) + 1;
// document.write('<p>Your lucky item number today is: ' + luckyNumber + '</p>');

// --- Idea 3: Display the current time ---
// let currentTime = new Date().toLocaleTimeString();
// document.write('<p>The current time is: ' + currentTime + '</p>');
