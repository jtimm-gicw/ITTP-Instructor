'use strict';

// Ask for user's name
let userName = prompt('What is your name?');
alert('Welcome to my site, ' + userName + '!');

// Score tracker
let score = 0;

// Helper function to normalize yes/no answers
function normalizeAnswer(answer) {
  return answer.toLowerCase();
}

// Question 1
let q1 = normalizeAnswer(prompt('Did I earn a degree from Florida State University? (yes/no)'));
if (q1 === 'yes' || q1 === 'y') {
  score++;
  console.log('Question 1 correct');
  alert('Correct!');
} else {
  console.log('Question 1 incorrect');
  alert('Not quite!');
}

// Question 2
let q2 = normalizeAnswer(prompt('Have I worked internationally? (yes/no)'));
if (q2 === 'yes' || q2 === 'y') {
  score++;
  console.log('Question 2 correct');
  alert('Correct!');
} else {
  console.log('Question 2 incorrect');
  alert('Incorrect!');
}

// Question 3
let q3 = normalizeAnswer(prompt('Have I taught in Thailand? (yes/no)'));
if (q3 === 'yes' || q3 === 'y') {
  score++;
  console.log('Question 3 correct');
  alert('Correct!');
} else {
  console.log('Question 3 incorrect');
  alert('Nope!');
}

// Question 4
let q4 = normalizeAnswer(prompt('Is my background only in software development? (yes/no)'));
if (q4 === 'no' || q4 === 'n') {
  score++;
  console.log('Question 4 correct');
  alert('Correct!');
} else {
  console.log('Question 4 incorrect');
  alert('That one is incorrect.');
}

// Question 5
let q5 = normalizeAnswer(prompt('Do I enjoy teaching others how to code? (yes/no)'));
if (q5 === 'yes' || q5 === 'y') {
  score++;
  console.log('Question 5 correct');
  alert('Correct!');
} else {
  console.log('Question 5 incorrect');
  alert('Wrong answer!');
}

// Final message
alert(
  userName +
    ', thanks for playing! You got ' +
    score +
    ' out of 5 questions correct.'
);
