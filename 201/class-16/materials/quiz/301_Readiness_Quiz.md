# JavaScript 201 → 301 Readiness Quiz

## Questions

### 1. What will this output?
```javascript
let x = 10;

function test() {
  console.log(x);
  let x = 20;
}

test();
```
A. 10
B. 20
C. undefined
D. ReferenceError

2. What will this return?
```javascript
function add(a, b) {
  return a + b;
}
add("5", 2);

A. 7
B. '7'
C. '52'
D. NaN
```
3. What will this output?
```javascript
let obj = {
  value: 10,
  getValue: function() {
    return this.value;
  }
};

let fn = obj.getValue;
console.log(fn());
```
A. 10
B. undefined
C. Error
D. null

4. What will this output?
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  return this.name;
};

let p1 = new Person("Alex");
let p2 = new Person("Jordan");

console.log(p1.sayName === p2.sayName);
```
A. true
B. false
C. undefined
D. Error

5. What will this output?
```javascript
function Car(make) {
  this.make = make;
}

let car1 = new Car("Toyota");
let car2 = new Car("Honda");

car1.make = "Ford";

console.log(car1.make, car2.make);
```
A. Ford Ford
B. Toyota Honda
C. Ford Honda
D. Honda Ford

6. What will this output?
```javascript
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

console.log(i);
```
A. 0,1,2
B. 0,1,2,3
C. 1,2,3
D. 0,1,2 then 3

7. What will this output?
```javascript
for (let i = 1; i <= 3; i++) {
  if (i === 2) continue;
  console.log(i);
}
```
A. 1,2,3
B. 1,3
C. 2,3
D. 1,2

8. What will this return?
```javascript
let nums = [1,2,3];

let result = nums.map(n => {
  n * 2;
});

console.log(result);
```
A. [2,4,6]
B. [undefined, undefined, undefined]
C. [1,2,3]
D. Error

9. What will this return?
```javascript
let nums = [1,2,3,4];

let result = nums.filter(n => n % 2);

console.log(result);
```
A. [2,4]
B. [1,3]
C. [1,2,3,4]
D. []

10. What will this output?
```javascript
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.pop();

console.log(stack);
```
A. [1]
B. [2]
C. [3]
D. []

11. What will this output?
```javascript
function outer() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let fn = outer();

console.log(fn());
console.log(fn());
```
A. 1,1
B. 1,2
C. 2,2
D. 0,1

12. What will this output?
```javascript
let data = { name: "Sam" };

localStorage.setItem("user", JSON.stringify(data));

let result = JSON.parse(localStorage.getItem("user"));

console.log(result.name);
```
A. undefined
B. Sam
C. null
D. Error

13. What does passing undefined to a default parameter do?

A. Uses default value
B. Returns undefined
C. Throws error
D. Uses null

14. Why do two instances share the same prototype method?

A. Closure
B. Shared reference
C. Loop
D. Scope

15. What does continue do in a loop?

A. Stops loop
B. Skips iteration
C. Restarts loop
D. Ends function

16. What does continue do in a loop?

A. Stops loop
B. Skips iteration
C. Restarts loop
D. Ends function

17. What happens when accessing a let variable before declaration?

A. Returns undefined
B. Returns null
C. Throws ReferenceError
D. Returns 0

18. What does passing undefined to a default parameter do?

A. Uses default value
B. Returns undefined
C. Throws error
D. Uses null

19. What is the result of '5' + 2?

A. 7
B. '7'
C. '52'
D. NaN

20. Why must objects be stringified for localStorage?

A. Storage limits
B. Only strings allowed
C. Arrays only
D. Security

21. Why does parsing restore object functionality?

A. Converts back to object
B. Adds methods
C. Fixes errors
D. Loops