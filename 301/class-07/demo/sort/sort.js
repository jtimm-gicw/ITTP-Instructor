/*
===========================================================
STEP 0: WHAT SORT IS DOING (THE RULES)
===========================================================

If compareFunction(a, b) is less than 0 → a comes first
If compareFunction(a, b) is 0 → no change in order
If compareFunction(a, b) is greater than 0 → b comes first
*/

console.log("====================================");
console.log("STEP 1: DEFAULT NUMBER SORT (NO RULE)");
console.log("====================================");

// =====================================
// STEP 1: DEFAULT SORT BEHAVIOR
// =====================================

const numbers = [5, 1, 3, 9, 11, 100, 87, 44, 23, 67];

console.log("Before sort:", numbers);

// ⚠️ NO compare function = JavaScript treats numbers like strings
numbers.sort();

console.log("After DEFAULT sort (unexpected behavior):", numbers);

/*
Teacher Note:
Students will expect numeric order,
but JS is comparing values like words.
*/


// =====================================
// STEP 2: CUSTOM SORT (INTENTIONAL RULE)
// =====================================

console.log("====================================");
console.log("STEP 2: FIXING NUMBER SORT WITH RULE");
console.log("====================================");

const numbers2 = [5, 1, 3, 9, 11, 100, 87, 44, 23, 67];

console.log("Before sort:", numbers2);

// ✔ Correct numeric sort
numbers2.sort((a, b) => {
  return a - b;
});

console.log("After numeric sort (correct):", numbers2);

/*
Teacher Note:
a - b creates:
- negative → a comes first
- positive → b comes first
*/


// =====================================
// STEP 3: “BROKEN” CUSTOM LOGIC EXAMPLE
// =====================================

console.log("====================================");
console.log("STEP 3: FUNKY SORT (FOR DEMO DISCUSSION)");
console.log("====================================");

const numbers3 = [5, 1, 3, 9, 11, 100, 87, 44, 23, 67];

console.log("Before sort:", numbers3);

// ❌ Intentionally strange rule (not meaningful sorting)
numbers3.sort((a, b) => {
  return !(a % 2);
});

console.log("After weird sort (parity-based rule):", numbers3);

/*
Teacher Note:
This shows that sort doesn't care WHAT you return,
only WHETHER it's negative, zero, or positive.
*/


// =====================================
// STEP 4: SORTING OBJECTS (REAL WORLD USE)
// =====================================

console.log("====================================");
console.log("STEP 4: SORTING PEOPLE BY NAME");
console.log("====================================");

const people = [
  { name: "Fred", role: "Developer" },
  { name: "Suzy", role: "DevEloper" },
  { name: "Gina", role: "Manager" },
  { name: "Jim", role: "Support" },
];

console.log("Before sort:", people);

// Sort by name (A → Z, case-insensitive)
const peopleSortedByName = people.sort((a, b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
  return 1;
});

console.log("After sort by name:", peopleSortedByName);


// =====================================
// STEP 5: TERNARY REFACTOR VERSION
// =====================================

console.log("====================================");
console.log("STEP 5: TERNARY VERSION (CLEANER)");
console.log("====================================");

const people2 = [
  { name: "Fred", role: "Developer" },
  { name: "Suzy", role: "DevEloper" },
  { name: "Gina", role: "Manager" },
  { name: "Jim", role: "Support" },
];

const peopleSortedTernary = people2.sort(
  (a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
);

console.log("Ternary sort result:", peopleSortedTernary);


// =====================================
// STEP 6 (EXTRA): SORT BY ROLE (NEW EXAMPLE)
// =====================================

console.log("====================================");
console.log("STEP 6: BONUS - SORT BY ROLE");
console.log("====================================");

const people3 = [
  { name: "Fred", role: "Developer" },
  { name: "Suzy", role: "Developer" },
  { name: "Gina", role: "Manager" },
  { name: "Jim", role: "Support" },
];

console.log("Before sort:", people3);

// Sort by role alphabetically
people3.sort((a, b) => {
  if (a.role < b.role) return -1;
  if (a.role > b.role) return 1;
  return 0;
});

console.log("After sort by role:", people3);


/*
Teacher Closing Note:
Sort is not "sorting for you."
It's following YOUR instructions step-by-step.
*/