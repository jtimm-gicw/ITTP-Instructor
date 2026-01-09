/****************************************************
 * VARIABLE SCOPE DEMO (Beginner Friendly)
 * 
 * Variable scope = where a variable can be
 * recognized and accessed in your program.
 * 
 * There are two main types:
 * 1. Global Scope  - declared outside functions
 * 2. Local Scope   - declared inside functions
 ****************************************************/


/****************************************************
 * GLOBAL SCOPE
 * This variable exists outside of any function.
 * It can be accessed from anywhere in the program.
 ****************************************************/
let x = 3;


/****************************************************
 * FUNCTION ONE
 * This function has its own local scope.
 ****************************************************/
function functionOne() {
  // Local variable (only exists inside functionOne)
  let x = 1;

  // JavaScript will use the LOCAL x first
  console.log("functionOne x:", x);
}


/****************************************************
 * FUNCTION TWO
 * This function has a different local scope.
 ****************************************************/
function functionTwo() {
  // This x is different from functionOne's x
  let x = 2;

  // Even though the name is the same, it's legal
  console.log("functionTwo x:", x);
}


/****************************************************
 * FUNCTION THREE
 * This function does NOT declare x locally.
 ****************************************************/
function functionThree() {
  // No local x exists here
  // JavaScript looks in the global scope
  console.log("functionThree x:", x);
}


/****************************************************
 * INVOKING THE FUNCTIONS
 ****************************************************/
functionOne();    // Outputs: 1 (local x)
functionTwo();    // Outputs: 2 (local x)
functionThree();  // Outputs: 3 (global x)


/****************************************************
 * FUNCTIONS CANNOT SEE INSIDE OTHER FUNCTIONS
 ****************************************************/
function houseOne() {
  // Trying to use y here will cause an error
  // console.log(y); // ❌ ReferenceError
}

function houseTwo() {
  let y = 10; // y is local to houseTwo
}


/****************************************************
 * KEY NOTES:
 * - Variables declared inside a function are LOCAL
 * - Local variables only exist inside their function
 * - Functions cannot access each other's variables
 * - Global variables are accessible everywhere
 * - Local variables override global variables
 * 
 * Best Practice:
 * Avoid global variables in large programs to
 * prevent naming conflicts and bugs.
 ****************************************************/
