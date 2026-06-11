'use strict';

/*
=====================================================
PROMISES DEMO
=====================================================

Promises are JavaScript objects used to handle
asynchronous operations.

An asynchronous operation is work that takes time
to complete, such as:

- Calling an API
- Reading a file
- Querying a database
- Waiting for a timer

Instead of freezing the program while waiting,
JavaScript starts the task and keeps running other
code.

Think of a Promise as saying:

"Start this work now. When it finishes, let me know
whether it succeeded or failed."
*/


/*
=====================================================
CREATE A FUNCTION THAT RETURNS A PROMISE
=====================================================

longTask() simulates a task that takes an unknown
amount of time to complete.

The function returns a Promise object.

A Promise has two possible outcomes:

1. resolve()  -> Success
2. reject()   -> Failure

The status parameter determines whether the Promise
succeeds or fails.
*/

let longTask = (status) => new Promise((resolve, reject) => {

  /*
  Generate a random number between 0 and 999.

  This represents how long the task will take
  to complete (in milliseconds).

  Every call to longTask() will take a different
  amount of time.
  */
  let timer = Math.floor(Math.random() * 1000);

  /*
  setTimeout() simulates a slow operation.

  JavaScript schedules this callback to run later
  and immediately continues executing the rest of
  the program.

  This demonstrates asynchronous behavior.
  */
  setTimeout(() => {

    /*
    If status contains a truthy value,
    the Promise succeeds.

    resolve() sends a value to the .then() handler.
    */
    if (status) {
      resolve(`Good (${status} / ${timer})`);
    }

    /*
    If status is falsy, the Promise fails.

    reject() sends an error to the .catch() handler.
    */
    else {
      reject('Bad');
    }

  }, timer);
});


/*
=====================================================
RUNNING A SINGLE ASYNC TASK
=====================================================

The task begins immediately.

JavaScript DOES NOT stop and wait for it.

Instead:

1. Start the task.
2. Continue running other code.
3. When finished, run .then() or .catch().

This is why asynchronous code often appears to
run "out of order."
*/

longTask('First One')

  // Runs if resolve() was called
  .then(task => console.log('Task', task))

  // Runs if reject() was called
  .catch(console.error);


/*
=====================================================
MULTIPLE ASYNC TASKS (INDEPENDENT)
=====================================================

Each longTask() starts immediately.

Since they all have different random timers,
they will finish in an unpredictable order.

The order they START is:

i-1
i-2
i-3
i-4

But the order they FINISH could be:

i-3
i-1
i-4
i-2

or any other combination.

This is one of the most important concepts when
working with asynchronous JavaScript.
*/

console.log('------- Individually ----------');

longTask('i - 1')
  .then(task => console.log('Task', task))
  .catch(console.error);

longTask('i - 2')
  .then(task => console.log('Task', task))
  .catch(console.error);

longTask('i - 3')
  .then(task => console.log('Task', task))
  .catch(console.error);

longTask('i - 4')
  .then(task => console.log('Task', task))
  .catch(console.error);


/*
=====================================================
CHAINING PROMISES
=====================================================

Sometimes tasks must happen in a specific order.

For example:

1. Log in
2. Get user profile
3. Get user settings
4. Display dashboard

Each step depends on the previous step.

Promise chaining guarantees that each task waits
for the previous task to finish before starting.

This creates sequential execution.
*/

console.log('------- Chained ----------');

longTask('c - 1')

  /*
  When c-1 finishes:

  1. Print the result
  2. Return a new Promise

  Returning a Promise causes the next .then()
  to wait for that Promise to finish.
  */
  .then(data => {
    console.log(data);
    return longTask('c - 2');
  })

  /*
  c-2 cannot start until c-1 finishes.
  */
  .then(data => {
    console.log(data);
    return longTask('c - 3');
  })

  /*
  c-3 cannot start until c-2 finishes.
  */
  .then(data => {
    console.log(data);
    return longTask('c - 4');
  })

  /*
  c-4 cannot start until c-3 finishes.
  */
  .then(data => {
    console.log(data);
  });


/*
=====================================================
PROMISE.ALL()
=====================================================

Promise.all() is used when:

- You want multiple tasks to run at the same time
- You need ALL results before continuing

Example:

Fetch weather
Fetch movies
Fetch restaurants

Run them simultaneously and wait until all
three are finished.

Promise.all() returns a single Promise.
*/

console.log('------- Promise.all() ----------');

/*
Create an empty array to store Promises.
*/
let stuffToDo = [];

/*
Create 10 Promises.

Each Promise starts immediately and runs
independently.
*/
for (let i = 1; i <= 10; i++) {
  stuffToDo.push(longTask(`pa - ${i}`));
}

/*
Promise.all() waits until EVERY Promise
inside the array is resolved.

Important:

Even if the tasks finish in random order,
the resulting array preserves the original
order of the Promises.

Example:

Tasks finish:
pa-3
pa-1
pa-7
pa-2

Response array:
[
  pa-1,
  pa-2,
  pa-3,
  ...
]

Order of completion does NOT matter.
Order in the array DOES.
*/
Promise.all(stuffToDo)

  .then(things => {
    console.log('Promise.all() Response Array', things);
  })

  /*
  If ANY Promise rejects, Promise.all()
  immediately rejects and jumps to catch().
  */
  .catch(console.error);


/*
=====================================================
KEY TAKEAWAYS
=====================================================

1. Promises manage asynchronous operations.

2. resolve() = success
   reject() = failure

3. .then() handles successful results.

4. .catch() handles errors.

5. Multiple Promises started independently
   may finish in any order.

6. Chained Promises run one after another.

7. Promise.all() runs tasks simultaneously
   and waits for all of them to finish.

8. JavaScript continues executing code while
   Promises are waiting in the background.

This non-blocking behavior is one of the reasons
JavaScript is efficient for web applications.
*/