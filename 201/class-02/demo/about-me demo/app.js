'use strict';
/*
  'use strict' forces JavaScript to follow stricter rules.
  This helps catch errors and is REQUIRED by the lab.
*/

// --------------------------------------------------
// CONFIRM + IF / ELSE EXAMPLE
// --------------------------------------------------

/*
  confirm() shows a pop-up with OK and Cancel.
  OK returns true, Cancel returns false.
*/
let answer1 = confirm('Are you ready to rumble?');

/*
  This if statement checks if answer1 is true.
*/
if (answer1 === true) {
  // This runs if the user clicked OK
  console.log('LET\'S GET READY TO RUMBLE!!!');
} else {
  // This runs if the user clicked Cancel
  console.log('Oh. Well then.');
}

// --------------------------------------------------
// LOGICAL OPERATORS EXAMPLE
// --------------------------------------------------

/*
  These variables store boolean values.
  Booleans can only be true or false.
*/
let first = true;
let second = false;
let third = true;

/*
  AND operator (&&):
  BOTH conditions must be true.
*/
if (first && third) {
  console.log('first and third were both true');
}

/*
  OR operator (||):
  Only ONE condition must be true.
*/
else if (first || second) {
  console.log('first or second was true!');
}

/*
  This condition checks only third.
*/
else if (third) {
  console.log('first and second were false, but third was true.');
}

/*
  This runs if NONE of the above conditions are true.
*/
else {
  console.log('Were any of my variables true?');
}

// --------------------------------------------------
// PROMPT + SWITCH STATEMENT
// --------------------------------------------------

/*
  prompt() asks the user for text input.
  The value is stored as a string.
*/
let color = prompt('What is your favorite color');

/*
  We convert the user's input to lowercase
  so capitalization does not matter.
*/
switch (color.toLowerCase()) {

  case 'red':
    console.log('Your favorite color was red!');
    break;

  case 'blue':
    console.log('Your favorite color was blue!');
    break;

  /*
    default runs if no case matches.
  */
  default:
    console.log('i don\'t know what your favorite color was ¯\\_(ツ)_/¯');
}
