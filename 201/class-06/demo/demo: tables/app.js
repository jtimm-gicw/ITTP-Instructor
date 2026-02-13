/*
201-Class_06-Mini-Demo_JS_Tables-T
🧱 JavaScript → HTML Table

REMEMBER:
👉 Create → Fill → Attach
*/

/* ===============================
   STEP 1: GET THE PARENT (ANCHOR)
================================= */

// This is where the table will live
// If we don’t anchor first, nothing shows up
const container = document.getElementById('tableContainer');

// 🧠 CHECK-IN
// Q: Why do we need a parent element first?
// A: Because everything must be attached somewhere in the DOM


/* ===============================
   STEP 2: CREATE THE <table>
================================= */

// Create the table element
const table = document.createElement('table');

// Attach it immediately to the container
container.appendChild(table);

// Now the table exists in the DOM


/* ===============================
   STEP 3: CREATE A HEADER ROW
================================= */

// Tables are made of rows (<tr>)
const headerRow = document.createElement('tr');

// Attach header row to table
table.appendChild(headerRow);


/* ===============================
   STEP 4: ADD HEADER CELLS (<th>)
================================= */

// Example headers
const headers = ['Name', 'Age', 'Favorite Food'];

// Loop prevents copy-paste and keeps order consistent
for (let i = 0; i < headers.length; i++) {

  // Create a header cell
  const th = document.createElement('th');

  // Fill it with text
  th.textContent = headers[i];

  // Attach it to the header row
  headerRow.appendChild(th);
}

// 🧠 CHECK-IN
// Q: Why use <th> instead of <td>?
// A: Headers describe the data and improve accessibility


/* ===============================
   STEP 5: CREATE A DATA ROW
================================= */

// This row will hold actual data
const dataRow = document.createElement('tr');

// Attach it to table
table.appendChild(dataRow);


/* ===============================
   STEP 6: ADD DATA CELLS (<td>)
================================= */

// Example row data
const rowData = ['Alex', '25', 'Pizza'];

for (let i = 0; i < rowData.length; i++) {

  // Create a data cell
  const td = document.createElement('td');

  // Fill it with content
  td.textContent = rowData[i];

  // Attach to the row
  dataRow.appendChild(td);
}

// 🧠 CHECK-IN
// Q: What happens if <td> count doesn’t match headers?
// A: The table becomes misaligned


/* ===============================
   STEP 7: MULTIPLE ROWS (SCALING)
================================= */

// Data as an array of arrays
const people = [
  ['Alex', 25, 'Pizza'],
  ['Jordan', 30, 'Sushi'],
  ['Sam', 22, 'Tacos']
];

// Outer loop → controls rows
for (let i = 0; i < people.length; i++) {

  const row = document.createElement('tr');
  table.appendChild(row);

  // Inner loop → controls cells
  for (let j = 0; j < people[i].length; j++) {

    const cell = document.createElement('td');
    cell.textContent = people[i][j];
    row.appendChild(cell);
  }
}

// 🧠 CHECK-IN
// Q: What does outer loop control?
// A: Number of rows
// Q: What does inner loop control?
// A: Number of cells per row


/* ===============================
   STEP 8 (OPTIONAL): SEMANTIC SECTIONS
================================= */

/*
Good to mention — not required Day 1

const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

Then:
Header rows → thead
Data rows → tbody
*/


/* ===============================
   🎯 STUDENT MENTAL TEMPLATE
================================= */

/*
1️⃣ Get parent
2️⃣ Create table
3️⃣ Add header row
4️⃣ Add <th> cells
5️⃣ Add data rows
6️⃣ Add <td> cells
7️⃣ Use loops to scale
*/


/* ===============================
   ⚠️ COMMON STUDENT MISTAKES
================================= */

/*
❌ Forgetting to append elements
❌ Creating but never attaching
❌ Mixing <th> and <td>
❌ Hard-coding instead of looping
*/


/*
🏆 ONE-SENTENCE RULE:

Tables are built row by row,
and rows are built cell by cell.
*/
