'use strict';

/* =====================================================
ANSWER 1: Print 1 through 5
===================================================== */

// FOR loop is used because we KNOW how many times it should run
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/*
WHY FOR?
- Clear start (1)
- Clear end (5)
- Clear step (i++)
*/



/* =====================================================
ANSWER 2: Print "Hello!" 3 times
===================================================== */

// FOR loop is best when repeating a known number of times
for (let i = 0; i < 3; i++) {
  console.log("Hello!");
}

/*
WHY FOR?
- Runs exactly 3 times
- Easy to read and control
*/



/* =====================================================
ANSWER 3: Countdown 5 to 1
===================================================== */

// FOR loop works well for countdowns
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Done!");

/*
WHY FOR?
- Known starting number
- Known stopping number
- Step changes predictably
*/



/* =====================================================
ANSWER 4: Keep going until number > 10
===================================================== */

let number = 3;

// WHILE loop is used because we do NOT know how many times it will run
while (number <= 10) {
  console.log("Number is:", number);
  number++;
}

/*
WHY WHILE?
- Loop depends on a condition
- We don't know how many times it will repeat
- Runs until condition becomes false
*/



/* =====================================================
ANSWER 5: Print 0 through 4
===================================================== */

// FOR loop is ideal for simple counting
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
WHY FOR?
- Fixed number of repetitions
- Common counting pattern
*/



/* =====================================================
ANSWER 6: Double until 20
===================================================== */

let value = 1;

// WHILE loop is better because the number changes unpredictably
while (value < 20) {
  console.log(value);
  value = value * 2;
}

/*
WHY WHILE?
- Loop depends on changing value
- Number of loops is unknown
- Condition controls when it stops
*/
