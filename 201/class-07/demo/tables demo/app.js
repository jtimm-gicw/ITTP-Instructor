/*
JavaScript → HTML Table
🏨 Hotel Guests Per Week

🧠 Big Picture Reminder:
We are NOT writing HTML in JavaScript.
We are creating elements one piece at a time and attaching them.

RULE:
👉 Create → Fill → Attach
*/


/* =====================================
   STEP 1: GET THE PARENT (ANCHOR POINT)
====================================== */

// Grab the div with id="tableContainer"
const container = document.getElementById('tableContainer');



/* =====================================
   STEP 2: CREATE THE <table>
====================================== */

// Create table element
const table = document.createElement('table');

// Attach table to container
container.appendChild(table);

// 🔎 At this point:
// The table exists in the DOM,
// but it has no rows yet.



/* =====================================
   STEP 3: CREATE A HEADER ROW
====================================== */

// Create a <tr> for the header
const headerRow = document.createElement('tr');

// Attach headerRow to the table
table.appendChild(headerRow);

// 🔎 Now we have:
// table
//   └── tr
//
// But no header cells yet!



/* =====================================
   STEP 4: ADD HEADER CELLS (<th>)
====================================== */


const headers = ['Day', 'Number of Guests'];

for (let i = 0; i < headers.length; i++) {

   const th = document.createElement('th');
   th.textContent = headers[i];
   headerRow.appendChild(th);

}





/* =====================================
   STEP 5: CREATE HOTEL DATA OBJECT
====================================== */



const hotel = {
  name: 'Ocean View Hotel',
  minGuests: 50,
  maxGuests: 150,
  dailyGuests: [],
  totalGuests: 0
};




/* =====================================
   STEP 6: RANDOM NUMBER FUNCTION
====================================== */



function getRandomGuests(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





/* =====================================
   STEP 7: GENERATE ROWS
====================================== */



const days = [
  'Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday','Sunday'
];

for (let i = 0; i < days.length; i++) {

   const row = document.createElement('tr');
   table.appendChild(row);

   const guests = getRandomGuests(hotel.minGuests, hotel.maxGuests);

   hotel.dailyGuests.push(guests);
   hotel.totalGuests += guests;

   const dayCell = document.createElement('td');
   dayCell.textContent = days[i];
   row.appendChild(dayCell);

   const guestCell = document.createElement('td');
   guestCell.textContent = guests;
   row.appendChild(guestCell);

}





/* =====================================
   STEP 8: TOTAL ROW
====================================== */

/*

const totalRow = document.createElement('tr');
table.appendChild(totalRow);

const totalLabel = document.createElement('td');
totalLabel.textContent = 'Total Guests';
totalRow.appendChild(totalLabel);

const totalValue = document.createElement('td');
totalValue.textContent = hotel.totalGuests;
totalRow.appendChild(totalValue);

*/


/*
🧠 LIVE DEMO TEACHING FLOW:

1️⃣ Show nothing renders
2️⃣ Add table → show empty box
3️⃣ Add header row → show structure
4️⃣ Uncomment headers → now it looks real
5️⃣ Then reveal data logic
6️⃣ Then reveal totals

Build visually, not all at once.
*/
