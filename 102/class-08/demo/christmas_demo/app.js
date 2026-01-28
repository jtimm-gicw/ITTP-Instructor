"use strict";

/*
=====================================
APP.JS — LOOPS DEMO
=====================================
*/


/*
=====================================
FUNCTION — BASIC GREETING 
Name: nameGreeting
=====================================
*/

function nameGreeting() {
  const name = prompt("What's your name?");
  const subtitle = document.getElementById("subtitle");

  if (name && name.trim() !== "") {
    subtitle.textContent = `Welcome ${name}!`;
  } else {
    subtitle.textContent = "Welcome friend!";
  }
}


/*
=====================================
FUNCTION — WHILE LOOP
Name: timeGreetingWhileLoop
=====================================
*/

function timeGreetingWhileLoop() {
  let hour;

  while (true) {
    const input = prompt("What hour is it right now? (0–23)");

    if (input === null) {
      return;
    }

    hour = Number(input);

    if (!Number.isNaN(hour) && hour >= 0 && hour <= 23) {
      break;
    }

    alert("Please enter a valid number between 0 and 23.");
  }

  const subtitle = document.getElementById("subtitle");

  if (hour < 12) {
    subtitle.textContent = "Good morning! ☕";
  } else if (hour < 18) {
    subtitle.textContent = "Good afternoon! 🎁";
  } else {
    subtitle.textContent = "Good evening! ✨";
  }
}


/*
=====================================
FUNCTION — FOR LOOP
Name: colorPreviewForLoop
=====================================
*/

function colorPreviewForLoop() {
  const mainBox = document.getElementById("mainBox");

  for (let i = 0; i < 3; i++) {
    const color = prompt("Pick a border color:");

    if (color === null) {
      break;
    }   
  

    mainBox.style.border = "6px solid " + color;
  }
}


/*
=====================================
FUNCTION CALLS
=====================================
*/

nameGreeting();
timeGreetingWhileLoop();
colorPreviewForLoop();


/*
=====================================
BUTTON VERSIONS (COMMENTED OUT)
=====================================
*/

/*
// document.getElementById("btnGreet").addEventListener("click", () => {
//   nameGreeting();
// });
*/

/*
// document.getElementById("btnTime").addEventListener("click", () => {
//   timeGreetingWhileLoop();
// });
*/

/*
// document.getElementById("btnColor").addEventListener("click", () => {
//   colorPreviewForLoop();
// });
*/
