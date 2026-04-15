// 301-Prep-Demo_ES6_Classes-T.js


/* 
PART 1 — What is Data Modeling?

We model real-world things like Person, Dog, Car.
Each has:
Attributes (nouns) → data: name, age, color
Behaviors (verbs) → actions: walk(), speak(), drive()
*/

/* 
PART 2 — OLD WAY: Constructor Functions
*/

// Step 1: Create a constructor function
// function Animal(name, legs) {
//   this.name = name;
//   this.legs = legs;
// }

// Step 2: Add behavior via prototype
// Animal.prototype.walk = function() {
//   this.isWalking = true;
// };

// Step 3: Create an instance
// let dog = new Animal('Rex', 4);
// dog.walk();
// console.log(dog); // {name: "Rex", legs: 4, isWalking: true}

/* 
PART 3 — Inheritance with Constructor Functions (Messy)
*/

// Step 4: Subclass using constructor functions
// function Dog(name, legs) {
//   Animal.call(this, name, legs); // call parent constructor
// }
// Dog.prototype = Object.create(Animal.prototype); // link prototype
// let myDog = new Dog('Buddy', 4);
// console.log(myDog);

/* 
PART 4 — ES6 Classes (Modern Way)
*/

/* 
PART 5 — Create a Class
*/

// Step 5: Define class
// class Animal {
//   constructor(name, legs) {
//     this.name = name;
//     this.legs = legs;
//   }

//   walk() {
//     this.isWalking = true;
//   }

//   eat() {
//     this.isEating = true;
//   }
// }

// Step 6: Create an instance
// let dog = new Animal('Rex', 4);
// dog.walk();
// dog.eat();
// console.log(dog); // {name: "Rex", legs: 4, isWalking: true, isEating: true}

/* 
PART 6 — Inheritance with Classes
*/

// Step 7: Create subclass
// class Dog extends Animal {
//   speak() {
//     console.log('Woof!');
//   }
// }

// let myDog = new Dog('Buddy', 4);
// myDog.walk();   // inherited
// myDog.eat();    // inherited
// myDog.speak();  // own method

/* 
PART 7 — Custom Constructor with super
*/

// Step 8: Subclass with extra property
// class Dog extends Animal {
//   constructor(name, legs, furType) {
//     super(name, legs); // call parent constructor
//     this.furType = furType;
//   }

//   speak() {
//     console.log('Woof!');
//   }
// }

// let myDog2 = new Dog('Buddy', 4, 'short hair');
// console.log(myDog2); // {name: "Buddy", legs: 4, furType: "short hair"}

/* 
PART 8 — What’s REALLY Happening?
*/

// Dog.prototype = Object.create(Animal.prototype);
/* 
PART 9 — Constructor vs Class
// Constructor Functions: old syntax, manual inheritance
// Classes: modern syntax, cleaner, uses super(), extends
*/

/* 
Student Task-
Convert this constructor function to a class
*/

// Old function
// function Bird(name) {
//   Animal.call(this, name);
// }
// Bird.prototype.fly = function() {};

// Converted class
// class Bird extends Animal {
//   fly() {
//     console.log(`${this.name} is flying!`);
//   }
// }

// let parrot = new Bird('Polly');
// parrot.fly(); // Polly is flying!


/* 
FAQ:
1. Are classes replacing constructor functions? No
2. Are classes “real” OOP like Java? Not exactly
3. Why use classes? Cleaner syntax, easier inheritance
4. What does extends do? Links prototypes
5. What does super() do? Calls parent constructor
6. Do classes improve performance? No, better developer experience
*/

/* 
TIP:
Practice order:
- Model real-world object (Dog, Car, User)
- Write attributes + methods
- Create base class
- Extend into subclasses
*/