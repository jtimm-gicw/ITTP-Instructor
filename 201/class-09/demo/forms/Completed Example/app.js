'use strict';

/* =========================================================
   PART 1: BASIC EVENT LISTENER (Inline Callback Function)
   ========================================================= */

// STEP 1: Grab the div from the HTML
let clickBox = document.getElementById('click-box');

// STEP 2: Add a click event listener
// This uses an INLINE callback function
clickBox.addEventListener('click', function () {
  alert('The box was clicked!');
});


/* =========================================================
   PART 2: SEPARATE CALLBACK FUNCTION
   ========================================================= */

// STEP 3: Create a named function
function handleBoxClick() {
  console.log('Box clicked using separate function!');
}

// STEP 4: Attach it like this instead (optional demo)
// clickBox.addEventListener('click', handleBoxClick);



/* =========================================================
   PART 3: FORM + SUBMIT EVENT LISTENER
   We will build this LIVE in class
   ========================================================= */

// STEP 1: Grab the form element
let guestForm = document.getElementById('guest-form');

// STEP 2: Add a submit event listener
guestForm.addEventListener('submit', handleSubmit);


/*
  This function runs when the form is submitted
*/
function handleSubmit(event) {

  // STEP 3: Prevent page refresh
  // VERY IMPORTANT for forms
  event.preventDefault();

  console.log('Form submitted!');

  // STEP 4: Grab input fields
  let nameInput = document.getElementById('guest-name');
  let ageInput = document.getElementById('guest-age');

  // STEP 5: Get values from inputs
  let name = nameInput.value;
  let age = ageInput.value;

  // STEP 6: Send values to table function
  addGuestToTable(name, age);

  // STEP 7: Clear form fields
  guestForm.reset();
}



/* =========================================================
   FUNCTION TO ADD A NEW ROW TO THE TABLE
   ========================================================= */

function addGuestToTable(name, age) {

  // STEP 8: Grab table body
  let tableBody = document.querySelector('#guest-table tbody');

  // STEP 9: Create new row
  let row = document.createElement('tr');

  // STEP 10: Create cells
  let nameCell = document.createElement('td');
  nameCell.textContent = name;

  let ageCell = document.createElement('td');
  ageCell.textContent = age;

  // STEP 11: Attach cells to row
  row.appendChild(nameCell);
  row.appendChild(ageCell);

  // STEP 12: Attach row to table
  tableBody.appendChild(row);

  // STEP 13: Update row count
  updateGuestCount();
}



/* =========================================================
   PART 4: document.querySelectorAll() DEMO
   This prepares students for lab totals re-render
   ========================================================= */

function updateGuestCount() {

  // STEP 14: Select ALL rows in table body
  let allRows = document.querySelectorAll('#guest-table tbody tr');

  // querySelectorAll returns a NodeList
  console.log('Current number of guests:', allRows.length);
}
