'use strict';

// =======================
// Basic Setup
// =======================
console.log('JS loaded from external file!');

alert('Welcome to The Awesome Shop!');
alert('Glad you decided to stop by.');

// =======================
// ⭐ Dynamic Component #1
// User Input → Welcome Message
// =======================
let userName = prompt('What is your name?');
console.log('User name:', userName);

document.write('<h2>Welcome, ' + userName + '! Thanks for visiting The Awesome Shop.</h2>');

// =======================
// ⭐ Dynamic Component #2
// Using a Conditional
// =======================
let favoriteItem = prompt('Do you like gadgets, snacks, or clothes the most?');

if (favoriteItem === 'gadgets') {
  document.write('<p>Great choice! Our gadget section is ⚡ AMAZING ⚡.</p>');
} else if (favoriteItem === 'snacks') {
  document.write('<p>Snacks are awesome! Check out our tasty selections 🍪😋.</p>');
} else if (favoriteItem === 'clothes') {
  document.write('<p>Fashion time! Our clothes section has all the style 👕✨.</p>');
} else {
  document.write('<p>No worries! Explore anything that looks fun 😄.</p>');
}

// =======================
// ⭐ Dynamic Component #3
// User chooses a color → Set page background
// =======================
let userColor = prompt('Pick a background color for the shop (e.g. red, blue, green, pink):');

document.body.style.backgroundColor = userColor;

// (Optional Safety Check) 
// If a color doesn't work, JS will just ignore it.

// =======================
// 🌟 Stretch Goal Ideas (Commented Out)
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

