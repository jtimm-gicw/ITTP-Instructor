"use strict";

/*
=================================================
APP.JS — LOOPS DEMO (AFTER FUNCTION REFACTOR)
=================================================

TODAY’S GOAL:
- Learn WHY loops are useful
- Learn HOW while loops and for loops work
- See loops used inside real functions we already built

IMPORTANT:
- We are NOT re-teaching functions today
- Assume functions already exist
- We are ONLY explaining the NEW loop logic
*/

/*
=====================================
FUNCTION — BASIC GREETING (NO LOOP)
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
=================================================
FUNCTION 1 — WHILE LOOP EXAMPLE
=================================================
FUNCTION NAME: timeGreetingWhileLoop

WHY A WHILE LOOP?
- We do NOT know how many times the user will enter bad input
- The loop should keep running UNTIL the input is valid
- This makes a while loop the BEST choice
*/

function timeGreetingWhileLoop() {
  let hour; // declared outside the loop so we can use it later

  /*
  WHILE LOOP STRUCTURE
  -------------------
  while (true) means:
  - Keep looping forever
  - We manually STOP it with:
    - break → valid input
    - return → user cancels
  */

  while (true) {
    const input = prompt("What hour is it right now? (0–23)");

    // If the user clicks Cancel, STOP everything
    if (input === null) {
      return;
    }

    // Convert input from string → number
    hour = Number(input);

    /*
    VALIDATION CHECK
    ----------------
    We only EXIT the loop if:
    - hour is a real number
    - hour is between 0 and 23
    */
    if (!Number.isNaN(hour) && hour >= 0 && hour <= 23) {
      break; // EXIT LOOP — input is valid
    }

    // If input is invalid, loop runs again
    alert("Please enter a valid number between 0 and 23.");
  }

  /*
  LOOP IS DONE
  ------------
  At this point, hour is guaranteed to be valid
  */

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
=================================================
FUNCTION 2 — FOR LOOP EXAMPLE
=================================================
FUNCTION NAME: colorPreviewForLoop

WHY A FOR LOOP?
- We know EXACTLY how many times we want to loop
- The loop runs a fixed number of times
- This makes a for loop the BEST choice
*/

function colorPreviewForLoop() {
  const mainBox = document.getElementById("mainBox");

  /*
  FOR LOOP STRUCTURE
  -----------------
  for (start; condition; change)

  start: let i = 0        → loop counter
  condition: i < 3        → loop runs 3 times
  change: i++             → increase counter
  */

  for (let i = 0; i < 3; i++) {
    const color = prompt(
      "Pick a border color (Attempt " + (i + 1) + " of 3)"
    );

    // If user clicks Cancel, stop early
    if (color === null) {
      break;
    }

    // Apply the color
    mainBox.style.border = "6px solid " + color;
  }

  /*
  AFTER THE LOOP
  --------------
  - The loop ends after 3 tries
  - Or earlier if the user cancels
  */
}


/*
=================================================
FUNCTION CALLS
=================================================
These run automatically when the page loads.
Comment out one at a time when demoing.
*/

// WHILE LOOP DEMO
timeGreetingWhileLoop();

// FOR LOOP DEMO
// colorPreviewForLoop();


/*
=================================================
BUTTON VERSIONS (COMMENTED OUT — FOR LATER)
=================================================
Uncomment these once students learn event listeners.
*/

/*
// TIME GREETING BUTTON (WHILE LOOP)
document.getElementById("btnTime").addEventListener("click", () => {
  timeGreetingWhileLoop();
});
*/

/*
// COLOR PREVIEW BUTTON (FOR LOOP)
document.getElementById("btnColor").addEventListener("click", () => {
  colorPreviewForLoop();
});
*/


/*
=================================================
KEY TEACHING TAKEAWAYS (SAY THIS OUT LOUD)
=================================================

- WHILE loops are for UNKNOWN repetition
- FOR loops are for KNOWN repetition
- Loops prevent duplicated code
- Loops make programs safer and smarter
- We stop loops with break or return

=================================================
END OF FILE
=================================================
*/
