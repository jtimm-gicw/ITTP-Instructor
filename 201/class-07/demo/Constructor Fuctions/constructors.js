// constructor = A constructor function is a blueprint that lets us create many similar objects in a clean and organized way.

// Original Objects
// Car 1
const toyota = {
  make: "Toyota",
  model: "RAV4",
  year: 2018,
  color: "white",
  drive: function() {
    console.log(`You drive the ${this.model}`);
  }
};

// Car 2
const tesla = {
   make: "Tesla",
  model: "Model 3",
  year: 2024,
  color: "black",
  drive: function() {
    console.log(`You drive the ${this.model}`);
  }
};

// Car 3
const ford = {
  make: "Ford",
  model: "F-150",
  year: 1995,
  color: "blue",
  drive: function() {
    console.log(`You drive the ${this.model}`);
  }
};


// Constructor Function -  uses capital letter for the name
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

// New Instances
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// Methods
car1.drive();
car2.drive();
car3.drive();

// console.log(); car1
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

// console.log(); car2
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

// console.log(); car3
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

// Protoyple Inheritance --> Move the method OUTSIDE the Constructor function 
// Car.prototype.drive = function(){
//     console.log(`You drive the ${this.model}`);

// Car.prototype.start = function() {
//   console.log(`${this.model} is starting...`);
// };

// Car.prototype.stop = function() {
//   console.log(`${this.model} has stopped.`);
// };

// Car.prototype.honk = function() {
//   console.log(`${this.model} says: Beep beep!`);
// };

// Car.prototype.getCarInfo = function() {
//   console.log(`${this.year} ${this.make} ${this.model} in ${this.color}`);
// };

// repaint(newColor)
// Shows that prototypes can modify object data.

// Car.prototype.repaint = function(newColor) {
//   this.color = newColor;
//   console.log(`${this.model} is now ${this.color}`);
// };

// car1.repaint("black");
// This one is powerful because it shows:
//  - Prototypes can change object state
//    this still refers to the specific car

// calculateAge()
// Car.prototype.calculateAge = function() {
//   const currentYear = new Date().getFullYear();
//   return currentYear - this.year;
// };

// The function is shared, but the result is different per car.
// car1.calculateAge();