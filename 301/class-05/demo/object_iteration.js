/**
 * =========================================================
 * OBJECT ITERATION DEMO
 * =========================================================
 *
 * GOAL:
 * Learn how to loop through and access data inside objects.
 *
 * In this demo students will practice:
 * 1. Accessing object properties
 * 2. Using for...in loops
 * 3. Using Object.keys()
 * 4. Using Object.values()
 * 5. Using Object.entries()
 * 6. Using forEach() callbacks
 *
 * IMPORTANT IDEA:
 * Objects store data as KEY : VALUE pairs
 *
 * Example:
 * {
 *   name: 'John'
 * }
 *
 * KEY   -> name
 * VALUE -> John
 *
 * =========================================================
 */


/**
 * =========================================================
 * STEP 1 — CREATE AN OBJECT
 * =========================================================
 *
 * Objects store related information together.
 *
 * This object has:
 * - a string value
 * - another string value
 * - an array value
 *
 * NOTICE:
 * Objects can contain many different data types.
 */

let person =
  {
    'name':'John',
    'role':'Dad',
    'interests': ['Coaching','Teaching'],
  };


/**
 * =========================================================
 * STEP 2 — ACCESSING A PROPERTY DIRECTLY
 * =========================================================
 *
 * We can access object properties using DOT NOTATION.
 *
 * Syntax:
 * objectName.propertyName
 *
 * This accesses the "name" property inside the person object.
 */

console.log(person.name);

/**
 * OUTPUT:
 * John
 */


/**
 * =========================================================
 * STEP 3 — USING A for...in LOOP
 * =========================================================
 *
 * GOAL:
 * Loop through every PROPERTY in the object.
 *
 * IMPORTANT:
 * The variable "property" changes during each loop.
 *
 * Loop 1:
 * property = 'name'
 *
 * Loop 2:
 * property = 'role'
 *
 * Loop 3:
 * property = 'interests'
 *
 * IMPORTANT:
 * We use BRACKET NOTATION here:
 *
 * person[property]
 *
 * Why?
 * Because the property name changes dynamically.
 */

for( let property in person ) {

  // Print the current key and its value
  console.log(property, person[property]);
}

/**
 * OUTPUT:
 *
 * name John
 * role Dad
 * interests ['Coaching', 'Teaching']
 */


/**
 * =========================================================
 * STEP 4 — USING Object.keys()
 * =========================================================
 *
 * Object.keys() extracts ALL KEYS from the object
 * and returns them inside an ARRAY.
 *
 * Since it returns an array,
 * we can use array methods like forEach().
 */

let properties = Object.keys(person);


/**
 * Print the array of keys
 */

console.log(properties);

/**
 * OUTPUT:
 * ['name', 'role', 'interests']
 */


/**
 * =========================================================
 * STEP 5 — LOOP THROUGH THE KEYS ARRAY
 * =========================================================
 *
 * Since "properties" is now an array,
 * we can use forEach().
 *
 * forEach() runs a callback function once
 * for every item in the array.
 */

properties.forEach( property => {

  /**
   * property changes each loop:
   *
   * 'name'
   * 'role'
   * 'interests'
   */

  console.log(property, person[property]);

});

/**
 * OUTPUT:
 *
 * name John
 * role Dad
 * interests ['Coaching', 'Teaching']
 */


/**
 * =========================================================
 * STEP 6 — SHORTER VERSION
 * =========================================================
 *
 * Instead of storing Object.keys() inside a variable first,
 * we can chain methods together.
 *
 * This is common in modern JavaScript and React.
 */

Object.keys(person).forEach( property => {

  console.log(property, person[property]);

});


/**
 * =========================================================
 * STEP 7 — USING Object.values()
 * =========================================================
 *
 * Object.values() returns ONLY THE VALUES
 * from the object.
 *
 * The keys are removed.
 */

console.log(Object.values(person));

/**
 * OUTPUT:
 *
 * [
 *   'John',
 *   'Dad',
 *   ['Coaching', 'Teaching']
 * ]
 */


/**
 * =========================================================
 * STEP 8 — LOOP THROUGH THE VALUES
 * =========================================================
 *
 * Since Object.values() returns an ARRAY,
 * we can use forEach().
 */

Object.values(person).forEach(value => {

  /**
   * value changes each loop:
   *
   * 'John'
   * 'Dad'
   * ['Coaching', 'Teaching']
   */

  console.log(value);

});

/**
 * OUTPUT:
 *
 * John
 * Dad
 * ['Coaching', 'Teaching']
 */


/**
 * =========================================================
 * STEP 9 — USING Object.entries()
 * =========================================================
 *
 * Object.entries() returns BOTH:
 * - the key
 * - the value
 *
 * Each item becomes an array:
 *
 * [key, value]
 */

Object.entries(person).forEach(entry => {

  console.log(entry);

});

/**
 * OUTPUT:
 *
 * ['name', 'John']
 * ['role', 'Dad']
 * ['interests', ['Coaching', 'Teaching']]
 */


/**
 * =========================================================
 * STEP 10 — UNDERSTANDING CALLBACK FUNCTIONS
 * =========================================================
 *
 * A CALLBACK FUNCTION is:
 * A function passed into another function.
 *
 * Example:
 *
 * forEach(value => {
 *   console.log(value);
 * });
 *
 * The arrow function is the callback.
 *
 * forEach() repeatedly CALLS that function.
 */


/**
 * =========================================================
 * IMPORTANT NOTES ABOUT forEach()
 * =========================================================
 *
 * forEach():
 * ✅ loops through arrays
 * ✅ runs a callback function
 *
 * forEach() DOES NOT:
 * ❌ return a new array
 * ❌ stop with break
 * ❌ skip with continue
 *
 * IMPORTANT:
 * Use forEach() when you want to PERFORM ACTIONS.
 */


/**
 * =========================================================
 * FINAL TAKEAWAYS
 * =========================================================
 *
 * Objects store data using key-value pairs.
 *
 * Object iteration methods:
 *
 * for...in
 * -> loops through object keys
 *
 * Object.keys()
 * -> returns array of keys
 *
 * Object.values()
 * -> returns array of values
 *
 * Object.entries()
 * -> returns arrays of [key, value]
 *
 * forEach()
 * -> loops through arrays using a callback function
 *
 * =========================================================
 */