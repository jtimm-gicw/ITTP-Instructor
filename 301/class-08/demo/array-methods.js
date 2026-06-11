// 'use strict';

console.clear();

console.log('====================================');
console.log('ARRAY & STRING METHODS DEMO');
console.log('====================================\n');


newArr=[1, 2, 3, 4, 5]
newArr.splice(2, 4, 'c')

console.log(newArr);
// ====================================
// SLICE()
// ====================================

console.log('====================================');
console.log('SLICE() DEMO');
console.log('====================================');

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('Original Array:', arr);

console.log('\n1. slice(0, 2)');
console.log('Take elements starting at index 0 and stop before index 2');
console.log(arr.slice(0, 2));

console.log('\n2. slice(2, 4)');
console.log('Take elements starting at index 2 and stop before index 4');
console.log(arr.slice(2, 4));

console.log('\n3. slice(3, 4)');
console.log('Take one element at index 3');
console.log(arr.slice(3, 4));

console.log('\n4. slice(0, 1)');
console.log('Take first element only');
console.log(arr.slice(0, 1));

console.log('\n5. slice(arr.length - 1)');
console.log('Get the last element');
console.log(arr.slice(arr.length - 1));

console.log('\n6. slice(2)');
console.log('Start at index 2 and take everything after');
console.log(arr.slice(2));

console.log('\n7. slice(-2)');
console.log('Take the last two elements');
console.log(arr.slice(-2));

console.log('\nArray after ALL slice examples:');
console.log(arr);
console.log('Notice: slice() DOES NOT change the original array.\n');


// ====================================
// SPLICE()
// ====================================

console.log('====================================');
console.log('SPLICE() DEMO');
console.log('====================================');

arr1 = ['a', 'b', 'c', 'd', 'e'];

console.log('Original Array:', arr1);

console.log('\n1. splice(1, 0, 99)');
console.log('Insert 99 at index 1');
arr1.splice(1, 0, 99);
console.log(arr1);

console.log('\n2. splice(1, 1)');
console.log('Remove 1 element at index 1');
arr1.splice(1, 1);
console.log(arr1);

console.log('\n3. splice(2, 3, 99)');
console.log('Starting at index 2, remove 3 items and replace them with 99');
arr1.splice(2, 3, 99);
console.log(arr);

console.log('\nNotice: splice() CHANGES the original array.\n');


// ====================================
// JOIN()
// ====================================

console.log('====================================');
console.log('JOIN() DEMO');
console.log('====================================');

arr2 = ['this', 'was', 'fun'];

console.log('Original Array:', arr2);

console.log('\n1. join()');
console.log('Default separator is a comma');
console.log(arr2.join());

console.log('\n2. join("")');
console.log('No separator');
console.log(arr2.join(''));

console.log('\n3. join(".")');
console.log('Period separator');
console.log(arr2.join('.'));

console.log('\n4. join("-")');
console.log('Kebab Case');
console.log(arr2.join('-'));

console.log('\n5. join("_")');
console.log('Snake Case');
console.log(arr2.join('_'));

console.log('\nArray after join examples:');
console.log(arr2);
console.log('Notice: join() DOES NOT change the original array.\n');


// ====================================
// SPLIT()
// ====================================

console.log('====================================');
console.log('SPLIT() DEMO');
console.log('====================================');

let str = 'This is a really cool thing';

console.log('Original String:');
console.log(str);

console.log('\n1. split(" ")');
console.log('Split wherever there is a space');
let words = str.split(' ');
console.log(words);

console.log('\n2. split("i")');
console.log('Split wherever there is the letter i');
let splitByI = str.split('i');
console.log(splitByI);

console.log('\nOriginal String after split examples:');
console.log(str);
console.log('Notice: split() DOES NOT change the original string.\n');


// ====================================
// QUICK REVIEW
// ====================================

console.log('====================================');
console.log('QUICK REVIEW');
console.log('====================================');

console.log(`
slice()  -> Copies part of an array
            DOES NOT modify original array

splice() -> Inserts, removes, or replaces items
            DOES modify original array

join()   -> Converts an array into a string

split()  -> Converts a string into an array
`);

console.log('\nDemo Complete!');