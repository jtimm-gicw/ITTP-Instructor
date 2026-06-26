# JavaScript Array Methods Cheat Sheet

A beginner-friendly guide to the most commonly used array methods in JavaScript, with simple explanations and examples.

---

## 1. forEach()
### What it does:
Loops through an array and runs a function for each item.

### Key Point:
- Does NOT return a new array

### Example:
```javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});
```

---

## 2. map()
### What it does:
Creates a NEW array by transforming each item.

### Key Point:
- Returns a new array (same length)

### Example:
```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]
```

---

## 3. filter()
### What it does:
Creates a NEW array with only items that pass a condition.

### Key Point:
- Returns a new array (can be shorter)

### Example:
```javascript
const numbers = [1, 2, 3, 4];

const evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4]
```

---

## 4. reduce()
### What it does:
Reduces an array to a single value.

### Key Point:
- Useful for totals, sums, or complex calculations

### Example:
```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // 10
```

---

## 5. find()
### What it does:
Returns the FIRST item that matches a condition.

### Key Point:
- Stops once it finds a match

### Example:
```javascript
const numbers = [1, 2, 3, 4];

const found = numbers.find((num) => num > 2);

console.log(found); // 3
```

---

## 6. some()
### What it does:
Checks if ANY item matches a condition.

### Key Point:
- Returns true or false

### Example:
```javascript
const numbers = [1, 2, 3];

const hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven); // true
```

---

## 7. every()
### What it does:
Checks if ALL items match a condition.

### Key Point:
- Returns true or false

### Example:
```javascript
const numbers = [2, 4, 6];

const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven); // true
```

---

## 8. includes()
### What it does:
Checks if an array contains a value.

### Key Point:
- Returns true or false

### Example:
```javascript
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.includes('banana')); // true
```

---

## 9. push()
### What it does:
Adds an item to the END of an array.

### Key Point:
- Modifies the original array

### Example:
```javascript
const numbers = [1, 2];

numbers.push(3);

console.log(numbers); // [1, 2, 3]
```

---

## 10. pop()
### What it does:
Removes the LAST item from an array.

### Key Point:
- Modifies the original array

### Example:
```javascript
const numbers = [1, 2, 3];

numbers.pop();

console.log(numbers); // [1, 2]
```

---

## 11. shift()
### What it does:
Removes the FIRST item from an array.

### Key Point:
- Modifies the original array

### Example:
```javascript
const numbers = [1, 2, 3];

numbers.shift();

console.log(numbers); // [2, 3]
```

---

## 12. unshift()
### What it does:
Adds an item to the BEGINNING of an array.

### Key Point:
- Modifies the original array

### Example:
```javascript
const numbers = [2, 3];

numbers.unshift(1);

console.log(numbers); // [1, 2, 3]
```

---

## 13. slice()
### What it does:
Returns a shallow copy of part of an array.

### Key Point:
- Does NOT modify original array

### Example:
```javascript
const numbers = [1, 2, 3, 4];

const newArr = numbers.slice(1, 3);

console.log(newArr); // [2, 3]
```

---

## 14. splice()
### What it does:
Adds/removes items from an array.

### Key Point:
- Modifies original array

### Example:
```javascript
const numbers = [1, 2, 3];

numbers.splice(1, 1); // remove 1 item at index 1

console.log(numbers); // [1, 3]
```

---

## 15. sort()
### What it does:
Sorts an array.

### Key Point:
- Modifies original array

### Example:
```javascript
const numbers = [3, 1, 2];

numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 3]
```

---

## Quick Summary

| Method   | Returns New Array? | Modifies Original? |
|----------|------------------|-------------------|
| forEach  | ❌ No            | ❌ No             |
| map      | ✅ Yes           | ❌ No             |
| filter   | ✅ Yes           | ❌ No             |
| reduce   | ❌ No (single value) | ❌ No       |
| find     | ❌ No (single value) | ❌ No       |
| some     | ❌ No (boolean)  | ❌ No             |
| every    | ❌ No (boolean)  | ❌ No             |
| push     | ❌ No            | ✅ Yes            |
| pop      | ❌ No            | ✅ Yes            |
| shift    | ❌ No            | ✅ Yes            |
| unshift  | ❌ No            | ✅ Yes            |
| slice    | ✅ Yes           | ❌ No             |
| splice   | ❌ No            | ✅ Yes            |
| sort     | ❌ No            | ✅ Yes            |

---

## Final Tip

If you're working in React or modern JavaScript:
- Prefer methods that DO NOT mutate arrays (`map`, `filter`, `slice`)
- Avoid mutating methods (`push`, `splice`, etc.) when working with state