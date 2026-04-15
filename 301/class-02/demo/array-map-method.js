// ==============================
// 🧠 array.map() DEMO
// ==============================

// --------------------------------
// Example 1: Array of Objects
// --------------------------------
const people = [
  { name: 'John', role: 'Dad' },
  { name: 'Cathy', role: 'Mom' },
  { name: 'Zach', role: 'Kid' },
  { name: 'Allie', role: 'Kid' },
];

// 👉 This is an array of objects
// Each object represents a person with a name and role



// --------------------------------
// Example 2: Basic Number Array
// --------------------------------
const nums = [1, 2, 3, 4, 5, 6, 7];

// 👉 Simple array of numbers
// We will use this to demonstrate transformations



// --------------------------------
// OLD WAY: Using a for loop
// --------------------------------
for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i] * nums[i];
}

// 👉 This loops through the array manually
// 👉 It MODIFIES the original array
// 👉 Each number becomes its square
// Example: 2 → 4, 3 → 9

console.log("Modified nums (for loop):", nums);



// --------------------------------
// USING .map()
// --------------------------------
const squares = nums.map((value) => {
  return {
    num: value,
    squared: value * value
  };
});

// 👉 .map() loops through the array automatically
// 👉 "value" represents each item in the array
// 👉 We RETURN a new object for each item

// 👉 IMPORTANT:
// Whatever we return becomes the new array

console.log("Squares array (map):", squares);



// --------------------------------
// ⚡ SHORTER VERSION (Arrow Function)
// --------------------------------
const addOne = nums.map(x => x + 1);

// 👉 Short syntax (implicit return)
// 👉 Each value is increased by 1
// Example: 1 → 2, 2 → 3

console.log("Add one array:", addOne);



// --------------------------------
// 🧠 KEY TAKEAWAYS
// --------------------------------

// 👉 .map() creates a NEW array
// 👉 It does NOT change the original array (unless you already modified it earlier)
// 👉 It runs a function on each item
// 👉 The return value becomes the new array

