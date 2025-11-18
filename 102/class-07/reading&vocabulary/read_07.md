# 102-Read_07-T 
**JavaScript Basics & New Vocabulary**

## 🆕 New Vocabulary

### 📄 Script
A script is a small file of code that tells the computer what to do.  
In JavaScript, it’s usually a `.js` file your webpage runs.

### 🧠 Programmatic Problem Solving
Breaking a problem into small steps and using code to solve each step logically and efficiently.

### 🔢 Expression
Any piece of code that produces a value.  
**Examples:**  
5 + 3, "Hello", x * 2, true

### ➕ Operator
A symbol that performs an action on values.

**Types of operators:**
- Math: + - * /
- Comparison: > < ==
- Logic: && || !

### 🧰 Function
A reusable block of code that performs a specific task.

### 🛠️ Function Declaration
The code that defines a function — it tells JavaScript what the function does.

```js
function greet() {
  console.log("Hi!");
}
```

### ▶️ Function Call
Using the function — telling JavaScript to run it.

```js
greet();
```

### 🏷️ Parameters
Placeholders in a function declaration for data the function needs.

```js
function greet(name) { ... }
```

`name` is the parameter.

### 📨 Arguments
The actual values you pass into the function when calling it.

```js
greet("Jason");
```

"Jason" is the argument.

### 🔁 Return Value
The value a function sends back when it finishes running.

```js
function add(a, b) {
  return a + b;
}
```

`a + b` is the return value.

### 🧹 Refactoring
Improving your code without changing what it does — making it cleaner, simpler, or easier to read.

---

# ❓ Q&A: Core JavaScript Concepts

## 1️⃣ What is control flow?
Control flow is the order in which your code runs from top to bottom.

JavaScript normally runs code line by line, but control flow can change when you use:
- if / else statements  
- loops  
- functions  

These tools allow your program to:
- Make decisions  
- Repeat actions  
- Jump to different parts of code  

**💬 Simple analogy:**  
Control flow is like giving directions: sometimes you go straight, sometimes left, sometimes you loop around — it depends on conditions.

## 2️⃣ What is a JavaScript function?
A function is a reusable block of code that performs a specific task.  
You write it once, then use it whenever you need.

Functions help you:
- Organize code  
- Avoid repeating yourself  
- Make programs easier to read and fix  

**Example:**
```js
function greet() {
  console.log("Hello!");
}
```

## 3️⃣ What does it mean to invoke (call) a function?
To invoke or call a function means to run it.

Think of a function like a light switch:
- Writing the function = building the switch  
- Calling the function = flipping the switch on  

```js
greet();  // Runs the code inside the function
```

If you don’t call it, it never runs.

## 4️⃣ What are the parentheses () for when defining a function?
Parentheses hold **parameters** — placeholders for data the function might need.

```js
function greet(name) {
  console.log("Hello, " + name);
}
```

- `name` is a parameter  
- It works like a variable inside the function  
- When you call the function, you give it a value (an argument)  

**Example call:**

```js
greet("Jason");
```

If the function doesn’t need data, the parentheses are still required:

```js
function sayHi() {
  console.log("Hi!");
}
```
