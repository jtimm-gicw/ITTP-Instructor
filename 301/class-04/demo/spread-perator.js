// Create an object
// This is our original object
const obj = { name: 'bunnies' };
console.log('Obj is', obj);

// 🎯 STEP 1: Assign it to a new variable
// ⚠️ This does NOT create a copy!
// It creates a REFERENCE (both point to the same object)
const copy = obj;
console.log('Copy is', copy);

// 🎯 STEP 2: Modify the "copy"
copy.name = "rabbit";

// 🚨 Both change because they are the SAME object in memory
console.log('Copy is', copy);
console.log('Obj is also changed to', obj); // 😲 why did this change???

// 🎯 STEP 3: Use the spread operator to create a REAL copy
// This creates a NEW object (not connected to the original)
const clone = { ...obj };

// 🎯 Modify the clone
clone.name = "foofoo";

// ✅ Now only the clone changes
console.log('Clone is', clone);
console.log('Obj is still', obj); // original is unchanged ✅