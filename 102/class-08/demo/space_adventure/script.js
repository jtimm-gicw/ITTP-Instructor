'use strict';

/*  
===========================================
Function 1: Get & Validate Rocket Count
===========================================
TELL STUDENTS:
- We keep asking the user how many rockets they want.
- We only accept numbers 1–5.
- If user hits Cancel, we return 0 (which means “do nothing”).
*/

function getRocketCount() {
  
  let count;

  while (true) {
    const input = prompt("How many rockets would you like to launch? (1–5)");

    // If user clicks "Cancel"
    if (input === null) {
      alert("Mission canceled. Maybe next time! 👋");
      return 0; // Returning 0 means “stop and do nothing”
    }

    // Convert text → number
    count = Number(input);

    // Check if valid: number 1–5
    if (!Number.isNaN(count) && count >= 1 && count <= 5) {
      return count; // Valid → end loop
    }

    // Otherwise, invalid!
    alert("Please enter a number between 1 and 5.");
  }
}

/*
===========================================
Function 2: Display the Rockets
===========================================
TELL STUDENTS:
- A loop adds rocket images one by one.
- Each rocket gets a label like “Rocket #1”.
*/

function showRockets(howMany) {
  const container = document.getElementById("rocket-gallery");

  // Clear out anything that was there before
  container.innerHTML = "";

  // Loop from 1 up to howMany
  for (let i = 1; i <= howMany; i++) {
    // A wrapper box for each rocket
    const rocketBox = document.createElement("div");
    rocketBox.classList.add("rocket-box");

    // Rocket image
const img = document.createElement("img");

// Loads img/rocket-1.jpg through img/rocket-5.jpg
img.src = `img/rocket-${i}.jpg`;

img.alt = "Rocket " + i;

// Label like: Rocket #1
const label = document.createElement("p");
label.textContent = "Rocket #" + i;

// Add image + label into wrapper
rocketBox.appendChild(img);
rocketBox.appendChild(label);

// Add wrapper into gallery
container.appendChild(rocketBox);
  }
};

/*
===========================================
MAIN PROGRAM
Runs automatically when page loads
===========================================
*/

const rocketCount = getRocketCount(); // Ask user

if (rocketCount > 0) {
  // Update intro text
  const intro = document.getElementById("intro");
  intro.textContent = `Launching ${rocketCount} rocket(s)!`;

  // Display rockets
  showRockets(rocketCount);
}
