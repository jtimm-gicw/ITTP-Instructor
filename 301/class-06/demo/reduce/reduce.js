// ==========================================
// ARRAY.REDUCE() LIVE DEMO
// ==========================================

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log('Original numbers array:', numbers);

// array.reduce(((accumulator, val, idx) => {
  // your code
//}), intialValue);)

// Use .reduce() to add all numbers together
const total = numbers.reduce((accumulator, val, idx) => {

  console.log('Current Index:', idx);
  console.log('Accumulator BEFORE:', accumulator);
  console.log('Current Value:', val);

  // Add current value to accumulator
  const result = accumulator + val;

  console.log('New Accumulator Value:', result);

  // Return the updated accumulator
  return result;

  // Initial accumulator value
}, 100);


// Final result after all iterations
console.log('FINAL TOTAL:', total);

console.log('PART 2 - POKEMON DATA');



// Array of pokemon objects
const pokemon = [
  {
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    name: 'bulbasaur'
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    name: 'ivysaur'
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
    name: 'venusaur'
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    name: 'charmander'
  },
  {
    url: 'https://pokeapi.co/api/v2/pokemon/5/',
    name: 'charmeleon'
  }
];

console.log('Pokemon Array:');
console.log(pokemon);

// Use reduce to create an indexed object
const indexed = pokemon.reduce((acc, val, idx) => {

  console.log('Current Pokemon:', val.name);

  // Add a new property to the object
  acc[val.name] = val.url;

  console.log('Updated Object So Far:');
  console.log(acc);

  // Return updated object
  return acc;

  // Initial value is an empty object
}, {});

console.log('FINAL INDEXED OBJECT:');
console.log(indexed);

console.log('PART 4 - CREATE ARRAY OF NAMES');


// Use reduce to create a new array
// containing only pokemon names
const names = pokemon.reduce((acc, val, idx) => {

  console.log('Current Pokemon:', val.name);

  // Add the name to the accumulator array
  acc.push(val.name);

  console.log('Updated Names Array:');
  console.log(acc);

  // Return updated array
  return acc;

  // Initial value is an empty array
}, []);

console.log('FINAL NAMES ARRAY:');
console.log(names);

console.log('KEY TAKEAWAYS');


console.log('1. .reduce() loops through an array');
console.log('2. The accumulator stores a running value');
console.log('3. The return value becomes the next accumulator');
console.log('4. The initial value determines the accumulator type');
console.log('5. .reduce() can return numbers, arrays, or objects');