/******************************************************************
  forEach() DEMO
******************************************************************/

console.log('JavaScript Connected!');

/* ================================================================
   SAMPLE ARRAY
================================================================ */

let people = ['John', 'Cathy', 'Allie', 'Zach'];


/* ================================================================
   EXAMPLE 1 — BASIC forEach()
================================================================ */

/**
 * forEach() loops through EVERY item in the array.
 */

console.log('\n--- EXAMPLE 1: BASIC LOOP ---');

people.forEach((item) => {
  console.log(item);  
});


/* ================================================================
   EXAMPLE 2 — USING INDEX
================================================================ */

/**
 * item = current value
 * idx  = current position number
 */

console.log('\n--- EXAMPLE 2: INDEX ---');

people.forEach((item, idx) => {
  console.log(`${idx}: ${item}`);
});


/* ================================================================
   EXAMPLE 3 — GREETING PEOPLE
================================================================ */

/**
 * A common use:
 * processing or displaying data
 */

console.log('\n--- EXAMPLE 3: GREETINGS ---');

people.forEach((person) => {
  console.log(`Hello ${person}!`);
});


/* ================================================================
   EXAMPLE 4 — WORKING WITH NUMBERS
================================================================ */

console.log('\n--- EXAMPLE 4: TOTAL ---');

let prices = [5, 10, 15];
let total = 0;

prices.forEach((price) => {
  total += price;
});

console.log('Final Total:', total);


/* ================================================================
   EXAMPLE 5 — OBJECTS
================================================================ */

console.log('\n--- EXAMPLE 5: OBJECTS ---');

let students = [
  { name: 'Jason', grade: 95 },
  { name: 'Maria', grade: 88 },
  { name: 'Lee', grade: 100 }
];

students.forEach((student) => {
  console.log(`${student.name} earned ${student.grade}`);
});


/* ================================================================
   IMPORTANT LIMITATION
================================================================ */

/**
 * forEach() cannot stop early.
 * It always loops through everything.
 */

console.log('\n--- LIMITATION EXAMPLE ---');

people.forEach((item, idx) => {

  // skips only THIS iteration
  if (idx === 2) {
    return;
  }

  console.log(item);
});

/**
 * OUTPUT:
 * John
 * Cathy
 * Zach
 */