# Arrow Functions Guide - Solution Key

## Exercise 1
### Original:
```js
function greet(name) {
  return "Hello " + name;
}
```

### Arrow Function:
```js
const greet = name => "Hello " + name;
```

---

## Exercise 2
### Original:
```js
function double(num) {
  return num * 2;
}
```

### Arrow Function:
```js
const double = num => num * 2;
```

---

## Exercise 3
### Original:
```js
function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
```

### Arrow Function:
```js
const isPositive = (num) => {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};
```

### Simplified Version:
```js
const isPositive = num => num > 0;
```

---

## Exercise 4
### Example Answer:
```js
const subtract = (a, b) => a - b;
```
