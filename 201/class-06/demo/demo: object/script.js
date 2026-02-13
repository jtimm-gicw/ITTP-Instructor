/*
Code 201 - Objects Demo
Topic: Understanding Objects and "this"

Goal:
- Learn what objects are
- Learn how methods work
- Learn how "this" refers to the object calling the method
*/


/* =====================================
   1️⃣ SIMPLE OBJECT
===================================== */

let dog = {
  // Properties (data about the object)
  name: "Geno",
  age: 5,
  color: "white",

  // Method (function inside the object)
  speak: function() {
    console.log(this.name + " says Woof!");
    // "this.name" refers to the object calling this method...dog{}
  }
};

// Accessing properties
console.log(dog.name); // prints "Geno"
console.log(dog.age);  // prints 5

// Calling a method
dog.speak(); // prints "Geno says Woof!"


/* =====================================
   2️⃣ TWO OBJECTS WITH SIMILAR METHODS
===================================== */

let cat = {
  name: "Whiskers",
  age: 3,
  speak: function() {
    console.log(this.name + " says Meow!");
    // Here, "this" refers to cat
  }
};

// Call each object's method
dog.speak(); // this === dog
cat.speak(); // this === cat


/* =====================================
   3️⃣ SHARED METHOD ACROSS MULTIPLE OBJECTS
===================================== */

// Function that can be used by multiple objects
function assignAge(newAge) {
  this.age = newAge;
  console.log(this.name + " is now " + this.age + " years old.");
}

// Create objects using the shared method
let rabbit = {
  name: "Hopper",
  age: 0,
  getAge: assignAge
};

let turtle = {
  name: "Shelly",
  age: 0,
  getAge: assignAge
};

// Call the shared method for each object
rabbit.getAge(2);   // this === rabbit
turtle.getAge(100); // this === turtle


/* =====================================
   4️⃣ WHY USE "this"?
===================================== */

/*
- If we wrote "dog.age = ..." inside a method, it would only ever work for dog.
- Using "this.age = ..." allows the same method to work for any object.
- "this" always points to the object that called the method.
*/


/* =====================================
   5️⃣ KEY TAKEAWAYS
===================================== */

/*
1. Objects store data in key:value pairs.
2. Functions inside objects are called methods.
3. "this" refers to the object that called the method.
4. Using "this" makes methods reusable across objects.
*/
