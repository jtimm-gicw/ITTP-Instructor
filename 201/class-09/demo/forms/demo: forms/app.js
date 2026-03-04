'use strict';

/* =====================================================
   PART 1: BASIC CLICK EVENT
   ===================================================== */

// STEP 1: Grab the div
let clickBox = document.getElementById('click-box');

// STEP 2: Add event listener 
// clickBox.addEventListener('click', handleClick);

// STEP 3: Create the function
function handleClick() {
  // Add something here
  // console.log('Box clicked');
}



/* =====================================================
   PART 2: FORM SETUP
   ===================================================== */

// STEP 4: Grab the form
let guestForm = document.getElementById('guest-form');

// STEP 5: Add submit listener 
// guestForm.addEventListener('submit', handleSubmit);



/* =====================================================
   PART 3: HANDLE FORM SUBMIT
   ===================================================== */

function handleSubmit(event) {

  // STEP 6: Prevent page refresh
  // event.preventDefault();

  // STEP 7: Grab input fields
  // let nameInput = document.getElementById('guest-name');
  // let ageInput = document.getElementById('guest-age');

  // STEP 8: Get values
  // let name = nameInput.value;
  // let age = ageInput.value;

  // STEP 9: Call function to add row
  // addGuestToTable(name, age);

  // STEP 10: Reset form
  // guestForm.reset();
}



/* =====================================================
   PART 4: ADD ROW TO TABLE
   ===================================================== */

function addGuestToTable(name, age) {

  // STEP 11: Grab table body
  // let tableBody = document.querySelector('#guest-table tbody');

  // STEP 12: Create row
  // let row = document.createElement('tr');

  // STEP 13: Create cells
  // let nameCell = document.createElement('td');
  // nameCell.textContent = name;

  // let ageCell = document.createElement('td');
  // ageCell.textContent = age;

  // STEP 14: Append cells to row
  // row.appendChild(nameCell);
  // row.appendChild(ageCell);

  // STEP 15: Append row to table
  // tableBody.appendChild(row);
}



/* =====================================================
   PART 5: querySelectorAll PREP
   ===================================================== */

function updateGuestCount() {

  // STEP 16: Select all rows
  // let rows = document.querySelectorAll('#guest-table tbody tr');

  // console.log(rows.length);
}

