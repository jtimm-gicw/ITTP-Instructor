# 102-Class_6: JS Intro. Practice

## Part I

1. Declare the variables

let ________ = "Coding is fun!";     // string
const ________ = 42;                 // number
let ________ = true;                 // boolean


2. Assign values

let username = ________;     // write your name here
let age = ________;          // write a number here
let isStudent = ________;    // true or false


3. Basic Arithmetic

let a = 10;
let b = 5;

let sum = a ______ b;
let difference = a ______ b;
let product = a ______ b;
let quotient = a ______ b;


## Part II Conditional Statments

4. Simple if

let score = 80;

if (score ______ 70) {
  console.log("You passed!");
}


5. If…Else 

let age = 16;

if (age ______ 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an ______.");
}


6. If / Else If / Else 

let time = 15;

if (time < 12) {
  console.log("Good ______!");
} else if (time < 18) {
  console.log("Good ______!");
} else {
  console.log("Good ______!");
}


## Part III Input + Logic

7. Prompt + conditions

let userAge = prompt("How old are you?");

if (userAge ______ 18) {
  document.write("You are under 18.");
} else {
  document.write("You are ______ 18.");
}

## BONUS 

8. Create your own condition

let food = prompt("What is your favorite food?");

if (food === "______") {
  document.write("Great choice!");
} else {
  document.write("______ is good too!");
}


### 📚 Answer Key

1. 
let message = "Coding is fun!";
const numberValue = 42;
let isHappy = true;

2. 
let username = "Jason";   // any name is acceptable
let age = 25;             // any number works
let isStudent = true;     // true or false

3. 
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

4. 
if (score > 70) { }
**(also acceptable: >= depending on instructor preference)**

5. 
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

6. 
if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

7. 
if (userAge < 18) {
  document.write("You are under 18.");
} else {
  document.write("You are over 18.");
}


**BONUS**

8. 
if (food === "pizza") {
  document.write("Great choice!");
} else {
  document.write(food + " is good too!");
}




