/*****************************************************
  function-answers.js
  Class 04 – Function Practice ANSWERS
*****************************************************/


/*
=====================================================
1️⃣ ANSWER: Declaring and Calling a Function
=====================================================
*/

function sayHello() {
  console.log("Hello, world!");
}

// Call the function
sayHello();



/*
=====================================================
2️⃣ ANSWER: Function With One Parameter
=====================================================
*/

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

// Call the function
greetUser("Jason");



/*
=====================================================
3️⃣ ANSWER: Function That RETURNS a Value
=====================================================
*/

function addNumbers(num1, num2) {
  return num1 + num2;
}

// Call the function and store the result
let sumResult = addNumbers(5, 7);

// Log the returned value
console.log(sumResult);



/*
=====================================================
4️⃣ ANSWER: Function That RETURNS Multiple Values
=====================================================
*/

function rectangleInfo(width, height) {
  let area = width * height;
  let perimeter = 2 * (width + height);

  return [area, perimeter];
}

// Call the function and store the result
let rectangleResult = rectangleInfo(4, 6);

// Log the returned array
console.log(rectangleResult);



/*
=====================================================
5️⃣ ANSWER: Using Returned Arrays
=====================================================
*/

let rect = rectangleInfo(10, 5);

// Log area
console.log(rect[0]);

// Log perimeter
console.log(rect[1]);



/*
=====================================================
6️⃣ ANSWER: Anonymous Function Expression
=====================================================
*/

let multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

// Call the function and log the result
console.log(multiplyNumbers(3, 4));



/*
=====================================================
7️⃣ ANSWER: Challenge – Create a Function From Scratch
=====================================================
*/

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

// Call the function with different numbers
console.log(isEven(4)); // true
console.log(isEven(7)); // false



/*
=====================================================
⭐ BONUS EXAMPLE ANSWER
=====================================================

BONUS IDEA:
Return BOTH whether a number is even AND a message.
This reinforces returning multiple values.
*/

function isEvenWithMessage(number) {
  let isEvenResult = number % 2 === 0;
  let message = isEvenResult ? "Number is even" : "Number is odd";

  return [isEvenResult, message];
}

// Example usage
let bonusResult = isEvenWithMessage(10);
console.log(bonusResult[0]); // true
console.log(bonusResult[1]); // "Number is even"
