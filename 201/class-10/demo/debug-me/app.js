'use strict';

// Quick Check
console.log('File loaded');

// 1- Order of execution
document.getElementById('run-order').addEventListener('click', orderDemo);

function orderDemo() {
  console.clear();
  console.log('--- ORDER OF EXECUTION ---');

  showMsg();
  msgExpression(); // ❌ This will throw an error

  function showMsg() {
    console.log('I am the showMsg function');
  }

  const msgExpression = function () {
    console.log('I am the msgExpression function expression');
  };
}

// 2- Scope Demo
document.getElementById('run-scope').addEventListener('click', scopeDemo);

function scopeDemo() {
  console.clear();
  console.log('--- SCOPE DEMO ---');

  const name = 'Dan';

  function scopyFunc(doggy) {

    function privateFunc() {
      const privateVar = 'woof!';
      return doggy + ' says ' + privateVar;
    }

    console.log('doggy is only inside function: ' + doggy);
    console.log(privateVar); // ❌ ReferenceError

    return privateFunc();
  }

  scopyFunc('Fido');
}

// 3- Object Content (this)
document.getElementById('run-object').addEventListener('click', objectDemo);

function objectDemo() {
  console.clear();
  console.log('--- OBJECT CONTEXT ---');

  const teacherBot = {
    first: 'Dan',
    last: 'Schwartz',
    age: 35,
    speak: function () {
      return 'Hello humanoid, I am ' + this.first + ' ' + this.last;
    }
  };

  console.log(teacherBot.speak());
  console.log(age); // ❌ ReferenceError
}

// 4- Stack Demo
document.getElementById('run-stack').addEventListener('click', stackDemo);

function stackDemo() {
  console.clear();
  console.log('--- STACK DEMO ---');

  report(2, 4);
}

function report(x, y) {
  const sum = 'The sum is ' + add(x, y);
  const product = 'The product is ' + multiply(x, y);
  console.log(sum);
  console.log(product);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// 5- Error Types
document.getElementById('run-errors').addEventListener('click', errorDemo);

function errorDemo() {
  console.clear();
  console.log('--- ERROR TYPES ---');

  // ❌ SyntaxError (commented so file loads)
  // const name == 'Dan';

  // ❌ ReferenceError
  // console.log(notDefinedVar);

  // ❌ TypeError
  const someObj = { a: 10 };
  someObj.push(20);

  // ❌ RangeError
  // new Array(-1);
}

// 5- Try & Catch
document.getElementById('run-trycatch').addEventListener('click', tryCatchDemo);

function tryCatchDemo() {
  console.clear();
  console.log('--- TRY / CATCH ---');

  try {
    const someObj = { a: 10 };
    someObj.push(20); // ❌ TypeError
  } catch (exception) {
    console.log('An error occurred!');
    console.log('Error type:', exception.name);
    console.log('Message:', exception.message);
  } finally {
    console.log('Cleanup always runs.');
  }
}

