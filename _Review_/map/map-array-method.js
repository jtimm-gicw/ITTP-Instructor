/**
 * =========================================
 * JAVASCRIPT ARRAY METHOD: map()
 * =========================================
 *
 * WHAT IS map()?
 * -----------------------------------------
 * The map() method creates a NEW array
 * by transforming each item in an existing array.
 *
 * IMPORTANT:
 * - map() does NOT change the original array
 * - map() returns a NEW array
 * - map() loops through every item
 *
 * SYNTAX:
 * -----------------------------------------
 * const newArray = oldArray.map((item) => {
 *   return transformedItem;
 * });
 */

/* =====================================================
   EXAMPLE 1:
   Convert numbers into doubled values
===================================================== */

const numbers = [1, 2, 3, 4, 5];

// map() goes through each number
// and returns number * 2
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);

/**
 * WHAT HAPPENS?
 * -----------------------------------------
 * number = 1  → returns 2
 * number = 2  → returns 4
 * number = 3  → returns 6
 * etc...
 *
 * FINAL RESULT:
 * [2, 4, 6, 8, 10]
 */

/* =====================================================
   EXAMPLE 2:
   Convert strings to uppercase
===================================================== */

const fruits = ["apple", "banana", "orange"];

// map() transforms each string
// into uppercase text
const uppercaseFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

console.log("\nOriginal fruits:", fruits);
console.log("Uppercase fruits:", uppercaseFruits);

/**
 * WHAT HAPPENS?
 * -----------------------------------------
 * "apple"  → "APPLE"
 * "banana" → "BANANA"
 * "orange" → "ORANGE"
 *
 * FINAL RESULT:
 * ["APPLE", "BANANA", "ORANGE"]
 */

/* =====================================================
   EXAMPLE 3:
   Working with objects
===================================================== */

const students = [
  { name: "Jason", score: 90 },
  { name: "Maria", score: 85 },
  { name: "Lee", score: 95 },
];

// map() creates a new array
// containing only student names
const studentNames = students.map((student) => {
  return student.name;
});

console.log("\nStudent objects:", students);
console.log("Student names:", studentNames);

/**
 * WHAT HAPPENS?
 * -----------------------------------------
 * { name: "Jason", score: 90 } → "Jason"
 * { name: "Maria", score: 85 } → "Maria"
 * { name: "Lee", score: 95 }   → "Lee"
 *
 * FINAL RESULT:
 * ["Jason", "Maria", "Lee"]
 */

/* =====================================================
   BONUS EXAMPLE:
   Using map() in React
===================================================== */

/**
 * map() is VERY common in React because
 * it helps display lists of data.
 *
 * Example:
 *
 * const names = ["Jason", "Maria", "Lee"];
 *
 * function App() {
 *   return (
 *     <div>
 *       {names.map((name) => {
 *         return <p>{name}</p>;
 *       })}
 *     </div>
 *   );
 * }
 *
 * React uses map() to create UI elements
 * from arrays of data.
 */

/* =====================================================
   KEY TAKEAWAYS
===================================================== */

/**
 * map():
 * -----------------------------------------
 * ✅ Loops through an array
 * ✅ Returns a NEW array
 * ✅ Transforms data
 * ✅ Does NOT modify original array
 * ✅ Commonly used in React
 *
 * BEST USED WHEN:
 * -----------------------------------------
 * You want to transform data into
 * something new.
 */