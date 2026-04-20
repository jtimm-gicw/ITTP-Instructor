# Arrow Functions Guide (Step-by-Step)

## What is an Arrow Function?
An arrow function is a shorter way to write a function in JavaScript using the `=>` syntax.

---

## Part 1: How to Create an Arrow Function

### Step 1: Start with a variable
Arrow functions are usually stored in a variable using `const`.

```js
const myFunction = () => {

};
```

---

### Step 2: Add parameters (if needed)
Put parameters inside the parentheses.

```js
const greet = (name) => {

};
```

- If there is **one parameter**, you can remove parentheses:
```js
const greet = name => {

};
```

- If there are **multiple parameters**, keep parentheses:
```js
const add = (a, b) => {

};
```

---

### Step 3: Add function logic inside `{}`

```js
const greet = (name) => {
  return "Hello " + name;
};
```

---

### Step 4: Return a value
Use the `return` keyword if using `{}`

```js
const add = (a, b) => {
  return a + b;
};
```

---

### Step 5: Use implicit return (shortcut)
If your function has **only one line**, you can remove `{}` and `return`:

```js
const add = (a, b) => a + b;
```

---

## Part 2: Converting Regular Functions to Arrow Functions

### Example 1: Basic Function

#### Regular Function:
```js
function sayHello() {
  return "Hello!";
}
```

#### Arrow Function:
```js
const sayHello = () => "Hello!";
```

---

### Example 2: Function with Parameters

#### Regular Function:
```js
function multiply(a, b) {
  return a * b;
}
```

#### Arrow Function:
```js
const multiply = (a, b) => a * b;
```

---

### Example 3: Function with One Parameter

#### Regular Function:
```js
function square(num) {
  return num * num;
}
```

#### Arrow Function:
```js
const square = num => num * num;
```

---

### Example 4: Function with Multiple Lines

#### Regular Function:
```js
function checkEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

#### Arrow Function:
```js
const checkEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
```

---

## Part 3: Quick Conversion Steps

1. Remove the `function` keyword  
2. Add `const functionName =`  
3. Add `=>` after the parameters  
4. Keep or simplify the `return`  

---

## Before vs After

| Regular Function | Arrow Function |
|----------------|---------------|
| `function add(a, b) { return a + b; }` | `const add = (a, b) => a + b;` |

---

## Common Mistakes to Avoid

❌ Forgetting parentheses for multiple parameters  
❌ Using `return` without `{}`  
❌ Forgetting `const` when declaring  

---

## Practice Section

### Exercise 1
Convert this function to an arrow function:
```js
function greet(name) {
  return "Hello " + name;
}
```

---

### Exercise 2
Convert this function:
```js
function double(num) {
  return num * 2;
}
```

---

### Exercise 3
Convert this multi-line function:
```js
function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
```

---

### Exercise 4
Write your own arrow function that:
- Takes two numbers
- Returns their difference

---

## Summary

- Arrow functions are shorter and cleaner  
- Use `=>` instead of `function`  
- You can simplify code with implicit returns  

---

Happy Coding 🚀
