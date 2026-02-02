/******************************************************
 STEP 1: GET THE PARENT (ANCHOR POINT)
******************************************************/

// Find the div where the table will live
const container = document.getElementById('tableContainer');

// If we don't anchor to the DOM, nothing will show up


/******************************************************
 STEP 2: CREATE THE <table>
******************************************************/

// Create a table element (it exists in memory only for now)
const table = document.createElement('table');

// Attach the table to the container
// Now the table exists in the DOM
container.appendChild(table);


/******************************************************
 STEP 3: CREATE A HEADER ROW (<tr>)
******************************************************/

// Tables are built with rows
const headerRow = document.createElement('tr');

// Attach the header row to the table
table.appendChild(headerRow);


/******************************************************
 STEP 4: ADD HEADER CELLS (<th>)
******************************************************/

// Each item represents one column title
const headers = ['Name', 'Age', 'Favorite Food'];

// Loop through the headers array
for (let i = 0; i < headers.length; i++) {

  // Create a header cell
  const th = document.createElement('th');

  // Add text to the cell
  th.textContent = headers[i];

  // Attach the cell to the header row
  headerRow.appendChild(th);
}

// One <th> per column
// Looping prevents copy-paste errors


/******************************************************
 STEP 5: CREATE A DATA ROW (<tr>)
******************************************************/

// This row will hold actual data
const dataRow = document.createElement('tr');

// Attach the row to the table
table.appendChild(dataRow);


/******************************************************
 STEP 6: ADD DATA CELLS (<td>)
******************************************************/

// Example data that matches the headers
const rowData = ['Alex', '25', 'Pizza'];

// Loop through the data
for (let i = 0; i < rowData.length; i++) {

  // Create a data cell
  const td = document.createElement('td');

  // Add the data text
  td.textContent = rowData[i];

  // Attach the cell to the row
  dataRow.appendChild(td);
}

// IMPORTANT: Number of <td> cells must match headers


/******************************************************
 STEP 7: MULTIPLE ROWS (SCALING PATTERN)
******************************************************/

// Data stored as an array of arrays
// Each inner array = one row
const people = [
  ['Alex', 25, 'Pizza'],
  ['Jordan', 30, 'Sushi'],
  ['Sam', 22, 'Tacos']
];

// Outer loop controls ROWS
for (let i = 0; i < people.length; i++) {

  // Create a new table row
  const row = document.createElement('tr');

  // Attach the row to the table
  table.appendChild(row);

  // Inner loop controls CELLS
  for (let j = 0; j < people[i].length; j++) {

    // Create a data cell
    const cell = document.createElement('td');

    // Add the correct piece of data
    cell.textContent = people[i][j];

    // Attach cell to the current row
    row.appendChild(cell);
  }
}

// This nested loop is the CORE table pattern
// Rows → Cells → Data


/******************************************************
 STEP 8: OPTIONAL — SEMANTIC TABLE SECTIONS
******************************************************/

// Not required day one, but good to mention
// Shows how tables are structured professionally

/*
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Header rows go in thead
// Data rows go in tbody
*/
