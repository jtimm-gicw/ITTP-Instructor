'use strict';

/*
=====================================================
REFACTORING EXAMPLES
=====================================================

Refactoring means improving existing code without
changing what the code actually does.

The goal is NOT to add new features.

The goal IS to make code:

✓ Easier to read
✓ Easier to maintain
✓ Easier to debug
✓ Easier to reuse
✓ Less likely to contain bugs

A common misconception is that refactoring is only
about making code shorter. Sometimes shorter code is
better, but the real goal is making code easier for
humans to understand and maintain.
*/


/*
=====================================================
PERSON CONSTRUCTOR
=====================================================

This constructor function creates Person objects.

Each Person has:
- a name
- an age

The getName() method is placed on the prototype so
that all Person objects share the same function
instead of creating a new copy for every object.
*/

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.getName = function () {
  return this.name;
};

let person = new Person('Fred', 51);


/*
=====================================================
EXAMPLE 1: CODE THAT WORKS BUT IS REPETITIVE
=====================================================

This code is technically correct.

However, it repeatedly calls:

person.getName()

Multiple times.

Why is this a problem?

1. More typing
2. More repetition
3. Harder to maintain
4. Slightly less efficient

Imagine getName() becomes more complicated later.

Now every repeated call performs extra work.

When we see repeated code, it is often a signal
that refactoring may be helpful.
*/

function sayName(person) {

  if (person.age >= 50) {

    // Calling getName() every time we need it
    return person.getName().toUpperCase();

  } else {

    // Calling getName() again
    return person.getName().toLowerCase();

  }
}

console.log(sayName(person));


/*
=====================================================
EXAMPLE 2: CACHE THE VALUE
=====================================================

Refactoring Principle:

"Don't repeat yourself" (DRY)

Instead of repeatedly asking the object for the
same value, store it once and reuse it.

Benefits:

✓ Less repetition
✓ Easier to read
✓ Easier to modify later
✓ Slight performance improvement

This change is small, but small improvements add
up in large applications.
*/

function sayNameBetter(person) {

  /*
  Store the result once.

  Now if getName() becomes expensive later,
  we only execute it one time.
  */
  let name = person.getName();

  if (person.age >= 50) {
    return name.toUpperCase();
  } else {
    return name.toLowerCase();
  }
}

console.log(sayNameBetter(person));


/*
=====================================================
EXAMPLE 3: USE A TERNARY OPERATOR
=====================================================

A ternary operator is a shorthand version of:

if (condition) {
  return valueA;
} else {
  return valueB;
}

Benefits:

✓ Fewer lines of code
✓ Easier to scan
✓ Clearly shows two possible outcomes

However...

Do NOT use ternaries if they become difficult
to read.

Refactoring should improve readability,
not make code more confusing.
*/

function sayNameEvenBetter(person) {

  let name = person.getName();

  return person.age >= 50
    ? name.toUpperCase()
    : name.toLowerCase();
}

console.log(sayNameEvenBetter(person));


/*
=====================================================
PROMISE REFACTORING
=====================================================

Many developers focus on refactoring normal
functions but forget that Promise chains can
be refactored too.

One of the biggest problems in Promise code is
putting too much logic directly inside .then().

This creates:

✗ Large anonymous functions
✗ Repeated code
✗ Difficult debugging
✗ Difficult testing

Let's look at an example.
*/


/*
=====================================================
SIMULATED ASYNC FUNCTION
=====================================================

Promise.resolve() creates an immediately resolved
Promise.

Normally this might be:

- An API request
- A database query
- A file read

We're using a simple example so we can focus on
the refactoring concepts.
*/

function doSomethingAsync(person) {
  return Promise.resolve(person);
}


/*
=====================================================
UGLY PROMISE CHAIN
=====================================================

This code works.

But notice several problems:

1. Business logic is embedded directly in .then()
2. Anonymous functions are doing multiple jobs
3. Harder to test individual operations
4. Harder to reuse code elsewhere

If another developer needs to uppercase a name,
they must copy this logic.

That's usually a sign that refactoring is needed.
*/

doSomethingAsync(person)

  .then(data => {

    /*
    Modifying data directly.

    This may create side effects because we're
    changing the original object.
    */
    data.name = data.name.toUpperCase();

    console.log('ugly upper', data.name);

    return data;
  })

  .then(differentData => {

    differentData.name = differentData.name.toLowerCase();

    console.log('ugly lower', differentData.name);

  });


/*
=====================================================
BETTER PROMISE CHAIN
=====================================================

Instead of putting all logic inside .then(),
each step is extracted into its own function.

Benefits:

✓ Smaller functions
✓ Easier testing
✓ Easier debugging
✓ Easier reuse
✓ Cleaner Promise chain

Now the Promise chain reads almost like English:

Get data
→ Uppercase name
→ Print name
→ Lowercase name
→ Print name

This is one of the biggest goals of refactoring:
making code tell a story.
*/

doSomethingAsync(person)

  .then(data => changeNameToUpper(data.name))

  .then(name => print(name))

  .then(name => changeNameToLower(name))

  .then(name => print(name));


/*
=====================================================
SINGLE RESPONSIBILITY FUNCTIONS
=====================================================

Each function now has ONE job.

A good refactoring guideline:

"A function should do one thing well."

Small focused functions are:

✓ Easier to understand
✓ Easier to test
✓ Easier to reuse
✓ Easier to fix
*/

function changeNameToUpper(name) {
  return name.toUpperCase();
}

function changeNameToLower(name) {
  return name.toLowerCase();
}

function print(words) {

  console.log('pretty', words);

  /*
  Returning the value allows the next .then()
  in the chain to receive it.

  This is a common Promise pattern.
  */
  return words;
}


/*
=====================================================
REFACTORING TAKEAWAYS
=====================================================

When reviewing code, ask yourself:

1. Am I repeating code?
2. Can this be expressed more clearly?
3. Is this function doing too many things?
4. Can I reuse this logic elsewhere?
5. Will another developer understand this quickly?

Good code is not just code that works.

Good code is code that still makes sense
six months later when someone else has to
maintain it.
=====================================================
*/