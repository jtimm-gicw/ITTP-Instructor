'use strict';

/************************************
 ES6 CLASSES DEMO FILE
************************************/

// =============================
// STEP 1: Constructor Function (OLD WAY)
// =============================

// function Animal(name, legs) {
//   this.name = name;
//   this.legs = legs;
// }

// Animal.prototype.walk = function() {
//   this.isWalking = true;
// };

// let oldDog = new Animal('Rex', 4);
// oldDog.walk();
// console.log('Old way:', oldDog);


// =============================
// STEP 2: Inheritance (OLD WAY - COMPLEX)
// =============================

// function Dog(name, legs) {
//   Animal.call(this, name, legs);
// }

// Dog.prototype = Object.create(Animal.prototype);

// let oldDog2 = new Dog('Buddy', 4);
// oldDog2.walk();
// console.log('Old inheritance:', oldDog2);


// =============================
// STEP 3: ES6 CLASS (MODERN WAY)
// =============================

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

// let animal = new Animal('Rex', 4);
// animal.walk();
// animal.eat();
// console.log('Class version:', animal);


// =============================
// STEP 4: INHERITANCE WITH CLASSES
// =============================

// class Dog extends Animal {
//   speak() {
//     console.log('Woof!');
//   }
// }

// let myDog = new Dog('Buddy', 4);
// myDog.walk();
// myDog.eat();
// myDog.speak();
// console.log('Dog with inheritance:', myDog);


// =============================
// STEP 5: ADDING CUSTOM PROPERTIES WITH SUPER
// =============================

// class Dog extends Animal {
//   constructor(name, legs, furType) {
//     super(name, legs);
//     this.furType = furType;
//   }

//   speak() {
//     console.log('Woof!');
//   }
// }

// let advancedDog = new Dog('Buddy', 4, 'short hair');
// advancedDog.walk();
// advancedDog.speak();
// console.log('Dog with extra property:', advancedDog);


// =============================
// STEP 6: MULTIPLE SUBCLASSES
// =============================

// class Bird extends Animal {
//   fly() {
//     console.log('Flying!');
//   }
// }

// let bird = new Bird('Parrot', 2);
// bird.walk();
// bird.fly();
// console.log('Bird:', bird);


// =============================
// STEP 7: INSTANCE CHECKING
// =============================

// let testDog = new Dog('Max', 4, 'long hair');

// console.log(testDog instanceof Dog);     // true
// console.log(testDog instanceof Animal);  // true


// =============================
// STEP 8: STUDENT PRACTICE
// =============================

// TODO: Create a class called Vehicle
// - properties: name, wheels
// - method: drive()

// TODO: Create a subclass called Car
// - extends Vehicle
// - add method honk()

// TODO: Create an instance and test all methods


// =============================
// STEP 9: CHALLENGE (ADVANCED)
// =============================

// TODO:
// Create a class Person
// properties: name, age
// method: speak()

// Create a subclass Student
// add property: course
// method: study()

// Test everything with console logs



