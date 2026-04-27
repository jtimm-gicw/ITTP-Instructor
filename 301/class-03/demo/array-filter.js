/**************************************************
 * array.filter() DEMO 
 **************************************************/

/**************************************************
 * STEP 1 — BASIC IDEA
 **************************************************/

// .filter() loops through an array
// It returns a NEW array
// It keeps items where the condition is TRUE

// Syntax:
array.filter((item) => {
  return condition;
});


/**************************************************
 * STEP 2 — FILTER NUMBERS (EVENS)
 **************************************************/

const nums = [1, 2, 3, 4, 5, 6, 7];

const evens = nums.filter((num) => {
  // num % 2 gives the remainder
  // even numbers have remainder 0
  return !(num % 2);
});

console.log('Original nums:', nums);
console.log('Even numbers:', evens);

/*
EXPECTED OUTPUT:
Original nums: [1,2,3,4,5,6,7]
Even numbers: [2,4,6]
*/


/**************************************************
 * STEP 3 — SIMPLER VERSION (ARROW FUNCTION)
 **************************************************/

// const evensShort = nums.filter(num => !(num % 2));
// console.log('Evens (short version):', evensShort);


/**************************************************
 * STEP 4 — FILTER OBJECTS
 **************************************************/

// const people = [
//   { name: 'John', role: 'Dad' },
//   { name: 'Cathy', role: 'Mom' },
//   { name: 'Zach', role: 'Kid' },
//   { name: 'Allie', role: 'Kid' },
// ];

// Keep only parents (NOT kids)
// const parents = people.filter(person => person.role !== 'Kid');

// console.log('All people:', people);
// console.log('Parents only:', parents);

/*
EXPECTED OUTPUT:
Parents only:
[
  { name: 'John', role: 'Dad' },
  { name: 'Cathy', role: 'Mom' }
]
*/


/**************************************************
 * STEP 5 — HOW FILTER WORKS (IMPORTANT)
 **************************************************/

// Think of it like this:
// For each item:
//   IF condition is TRUE → keep it
//   IF condition is FALSE → remove it


/**************************************************
 * STEP 6 — COMMON MISTAKE (NO RETURN)
 **************************************************/

// const test = nums.filter((num) => {
//   // no return statement!
// });

// console.log('No return result:', test);

/*
EXPECTED OUTPUT:
[]
Why? Because nothing returned TRUE
*/


/**************************************************
 * STEP 7 — MORE PRACTICE EXAMPLES
 **************************************************/

// Get numbers greater than 3
// const greaterThanThree = nums.filter(num => num > 3);
// console.log('> 3:', greaterThanThree);

// Get only kids
// const kids = people.filter(person => person.role === 'Kid');
// console.log('Kids:', kids);

// Get names starting with 'A'
// const namesStartingWithA = people.filter(person => person.name.startsWith('A'));
// console.log('Names starting with A:', namesStartingWithA);


/**************************************************
 * FINAL TAKEAWAYS
 **************************************************/

// .filter():
// - returns a NEW array
// - does NOT change the original array
// - only keeps items where condition is TRUE

// Mental Model:
// "Filter = keep what matches"


/**************************************************
 * CHECK-IN QUESTIONS (ASK STUDENTS)
 **************************************************/

// 1. What does .filter() return?
// 2. Does it change the original array?
// 3. What must the callback return?
// 4. What happens if nothing returns true?
// 5. When would you use filter?