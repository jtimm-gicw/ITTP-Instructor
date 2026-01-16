'use strict';

/* =====================================================
ANSWER 1: greetUser
===================================================== */

// This function groups greeting messages together
function greetUser() {
  console.log("Welcome to the website!");
  console.log("We hope you enjoy your stay.");
}

// Calling the function runs the code above
greetUser();



/* =====================================================
ANSWER 2: showWarning
===================================================== */

// This function handles warning alerts
function showWarning() {
  alert("This site uses cookies.");
  alert("Please accept to continue.");
}

// Function call triggers the alerts
showWarning();



/* =====================================================
ANSWER 3: showTotal
===================================================== */

// This function performs a calculation and logs the result
function showTotal() {
  let total = 5 + 10; // local variable inside function
  console.log("Total:", total);
}

// Calling the function runs the calculation
showTotal();



/* =====================================================
ANSWER 4: checkAge
===================================================== */

// This function checks a condition using if/else
function checkAge() {
  let age = 20; // variable scoped to the function

  if (age >= 18) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
}

// Function call executes the conditional logic
checkAge();



/* =====================================================
ANSWER 5: countDown
===================================================== */

// This function runs a loop
function countDown() {
  for (let i = 3; i > 0; i--) {
    console.log(i);
  }
  console.log("Go!");
}

// Calling the function starts the loop
countDown();
