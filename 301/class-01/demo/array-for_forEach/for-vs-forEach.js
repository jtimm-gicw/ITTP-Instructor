/******************************************************************
  301 DEMO: for vs forEach
  Goal:
  - Understand looping through arrays
  - Compare for vs forEach
******************************************************************/


let people = ['John', 'Cathy', 'Allie', 'Zach'];


// ==========================================
// PART 1 — BASIC FOR LOOP
// ==========================================

// Uncomment to demo:

/*
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
*/


// ==========================================
// PART 2 — BREAK (STOP EARLY)
// ==========================================

// Uncomment to demo:

/*
for (let i = 0; i < people.length; i++) {
  if (i === 2) {
    break; // stops the loop completely
  }
  console.log(people[i]);
}
*/


// ==========================================
// PART 3 — CONTINUE (SKIP ITEM)
// ==========================================

// Uncomment to demo:

/*
for (let i = 0; i < people.length; i++) {
  if (i === 1) {
    continue; // skips Cathy
  }
  console.log(people[i]);
}
*/


// ==========================================
// PART 4 — RETURN FROM A FUNCTION
// ==========================================

// Uncomment to demo:

/*
function findIt(arr, pos = 0) {
  for (let i = 0; i < arr.length; i++) {
    if (i === pos) {
      return arr[i]; // exits function early
    }
  }
  return null;
}

console.log(findIt(people, 3));
*/


// ==========================================
// PART 5 — forEach BASIC
// ==========================================

// Uncomment to demo:

/*
people.forEach(function(item, idx) {
  console.log(idx);
  console.log(item);
});
*/


// ==========================================
// PART 6 — forEach WITH ARROW FUNCTION
// ==========================================

// Uncomment to demo:

/*
people.forEach((item, idx) => {
  console.log(item);
});
*/


// ==========================================
// PART 7 — forEach WITH NAMED FUNCTION
// ==========================================

// Uncomment to demo:

/*
let processor = (item, idx) => {
  console.log(item);
};

people.forEach(processor);
*/


// ==========================================
// PART 8 — IMPORTANT LIMITATIONS
// ==========================================

// Uncomment to explain (these will NOT work):

/*
people.forEach((item, idx) => {
  if (idx === 2) {
    break; // ❌ ERROR
  }
});
*/

/*
people.forEach((item, idx) => {
  if (idx === 2) {
    return; // ❌ only exits THIS iteration, not the loop
  }
  console.log(item);
});
*/


// ==========================================
// PART 9 — QUICK CHALLENGE
// ==========================================

// 1. Print all names
// 2. Stop at "Allie"
// 3. Skip "Cathy"

// Uncomment and solve live:

/*
for (let i = 0; i < people.length; i++) {
  // your code here
}
*/


/******************************************************************
 FINAL TAKEAWAY:

 for = control (break, continue, return)
 forEach = simplicity (clean, readable)

******************************************************************/