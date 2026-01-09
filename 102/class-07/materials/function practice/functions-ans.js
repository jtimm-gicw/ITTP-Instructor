
// 1. Greeting
function greetUser() {
  const name = prompt("What is your name?");
  const greeting = document.getElementById("message");

  if (name && name.trim() !== "") {
    greeting.textContent = `Hello, ${name}!`;
  } else {
    greeting.textContent = "Hello, friend!";
  }
}

greetUser();


// 2. Time Greeting
function showTimeGreeting() {
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
}

showTimeGreeting();


// 3. Color Box
function changeBoxColor() {
  const color = prompt("Pick a border color");
  const box = document.getElementById("box");

  if (color && color.trim() !== "") {
    box.style.border = "5px solid " + color;
  }
}

changeBoxColor();


// 4. function toggleDarkMode() {
  const wantsDarkMode = confirm("Turn on dark mode?");
  const page = document.body;

  if (wantsDarkMode) {
    page.style.backgroundColor = "#222";
    page.style.color = "white";
  }


toggleDarkMode();


// 5. function logMessage() {
function logMessage() {
  console.log("JavaScript is running!");
}

logMessage();


// Variable to remember current state
let isOn = true;

// Function that toggles the message
function toggleMessage() {
  const toggleText = document.getElementById("toggle-text");

  if (isOn) {
    toggleText.textContent = "The message is OFF";
    isOn = false;
  } else {
    toggleText.textContent = "The message is ON";
    isOn = true;
  }
}

// Call the function once to test
toggleMessage();

