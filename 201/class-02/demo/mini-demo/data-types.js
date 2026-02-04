'use strict';

// -------------------------------
// DATA TYPES
// -------------------------------

// STEP 1: Data Types
let username = 'Jason';     // string
let age = 30;              // number
let isStudent = true;      // boolean


// STEP 2: typeof operator
console.log(typeof username);   // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean



// STEP 3: if / else conditional
let score = 85;

if (score >= 70) {
  console.log('You passed!');
} else {
  console.log('You did not pass.');
}



// STEP 4: switch statement
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of the week!');
    break;

  case 'Friday':
    console.log('Almost the weekend!');
    break;

  default:
    console.log('Just another day.');
}

// STEP 5: Logical operators
let hasID = true;
let userAge = 20;

if (userAge >= 18 && hasID) {
  console.log('You may enter.');
}

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log('You can sleep in!');
}


// STEP 6: Arrays
// This is an array called "fruits"
let fruits = [
  "Apple",   // index 0 → first element
  "Banana",  // index 1 → second element
  "Cherry",  // index 2 → third element
  "Orange"   // index 3 → fourth element
];


let favoriteFoods = ['Pizza', 'Tacos', 'Sushi'];

console.log(favoriteFoods[0]); // Pizza
console.log(favoriteFoods[1]); // Tacos
console.log(favoriteFoods[2]); // Sushi

let friends= [John, Sam , Billy, Alice];

console.log(friends[3]); 

let lowTemps = [-5, 0, 22, 32, 8];

console.log(lowTemps); // [-5, 0, 22, 32, 8]

let emptyArray =[];
let quizAns= ['a','b', 'd', 'c'];

let nestedArray= [
  [yes , 'y'], 
  [no, 'no'], 
  [no, 'n']
]; // separate them with a comma

let myArray= ['a','b','c'];
myArray[0]='z';
// ['z','b','c'];


// SWITCH STATEMENT EXAMPLE:
let expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}