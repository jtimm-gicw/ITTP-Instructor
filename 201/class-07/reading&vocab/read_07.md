# 201-Read_07
---

## 1️⃣ Why Do We Need Domain Modeling?

### ✅ Short Answer

We use **domain modeling** to understand the problem **before** we write code.

### 🧠 Explanation

Domain modeling helps us:

* Identify **what things exist** in the problem (objects)
* Decide **what data** those things need (properties)
* Define **what they can do** (methods)

> ✨ Instead of guessing while coding, we **plan first**.

---

### 🍪 Example: Cookie Shop App

If we’re building a cookie shop app, domain modeling helps us identify:

* 🍪 **Cookie**
* 👤 **Customer**
* 🧾 **Order**

Before writing JavaScript, we sketch out:

* What a **cookie has** → name, price, quantity
* What an **order does** → add cookies, calculate total

> 👉 **Interview Takeaway**
> Domain modeling reduces bugs, confusion, and rewrites because you design before you code.

---

## 2️⃣ Why Should Tables NOT Be Used for Page Layouts?

### ✅ Short Answer

Tables should be used for **data**, not layout, because they hurt **accessibility, readability, and maintenance**.

### 🧠 Explanation

Using tables for layout:

* ❌ Confuses screen readers
* ❌ Makes CSS harder to manage
* ❌ Breaks responsive design
* ❌ Mixes structure with presentation

---

### ✅ Correct Tools for Page Layout

Use semantic HTML and CSS instead:

* `<div>`
* `<section>`
* `<header>`
* **CSS Flexbox** or **CSS Grid**

---

### 📊 When Tables *Are* Correct

Use tables **only** for displaying data such as:

* 📅 Schedules
* 📑 Reports
* 💲 Price lists
* 🎓 Grades

> 👉 **Interview Takeaway**
> Tables are for **tabular data**, not page structure.

---

## 3️⃣ Semantic HTML Elements Used in a `<table>`

### ✅ Answer

Here are **three semantic elements** commonly used in tables:

---

### 1️⃣ `<thead>` — Table Header

* Holds the **header row**
* Usually contains **column labels**

```html
<thead>
  <tr>
    <th>Name</th>
    <th>Price</th>
  </tr>
</thead>
```

---

### 2️⃣ `<tbody>` — Table Body

* Holds the **main data rows**
* Where most table content goes

```html
<tbody>
  <tr>
    <td>Salmon Cookie</td>
    <td>$5</td>
  </tr>
</tbody>
```

---

### 3️⃣ `<tfoot>` — Table Footer

* Holds **summary or totals**
* Often used for totals or final notes

```html
<tfoot>
  <tr>
    <td>Total</td>
    <td>$50</td>
  </tr>
</tfoot>
```

> 👉 **Interview Takeaway**
> Semantic table elements improve accessibility, readability, and structure.

---

## 4️⃣ What Is a Constructor?

### ✅ Short Answer

A **constructor** is a special function used to create objects with the **same structure**.

### 🧠 Explanation

Instead of writing the same object over and over, constructors let us:

* Create **many objects**
* With shared properties and methods
* Using a **blueprint**

---

### 🏗 Example: Cookie Constructor

```js
function Cookie(name, price) {
  this.name = name;
  this.price = price;
}

const salmon = new Cookie("Salmon", 5);
const chocolate = new Cookie("Chocolate", 3);
```

### 🌟 Advantages

* ✅ Less repeated code
* ✅ Easier to scale
* ✅ More organized
* ✅ Objects stay consistent

> 👉 **Interview Takeaway**
> Constructors let you create reusable, scalable object blueprints.

---

## 5️⃣ How Does `this` Differ: Object Literal vs Constructor?

### ✅ Short Answer

`this` refers to **different things** depending on how the object is created.

---

### 🧱 Object Literal

```js
const dog = {
  name: "Buddy",
  speak() {
    console.log(this.name);
  }
};
```

* `this` refers to **that specific object**
* Works only for **one object**

---

### 🏗 Constructor Function

```js
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Max");
```

* `this` refers to the **new object being created**
* Changes each time you use `new`

> 👉 **Interview Takeaway**
> In constructors, `this` is **dynamic** — it points to the new instance.

---

## 6️⃣ Prototypes & Inheritance (Real-World Analogy)

⚠️ **Very common front-end interview question**

### ✅ Short Answer

**Prototypes** allow objects to share behavior instead of duplicating it.

---

### 🏫 Analogy: School System

Think of a school:

* There is a **Teacher Handbook**
* It explains rules, lesson structure, and policies
* Every teacher follows it

📘 You don’t rewrite the handbook for each teacher — **they inherit it**.

---

### 🧠 JavaScript Version

```js
function Teacher(name) {
  this.name = name;
}

Teacher.prototype.teach = function () {
  console.log("Teaching students");
};

const jason = new Teacher("Jason");
```

What happens:

* `jason` does **not** store `teach`
* JavaScript looks up the **prototype chain**
* Finds `teach` in `Teacher.prototype`

---

### ✅ Why This Matters

* 💾 Saves memory
* 🔁 Keeps code DRY (Don’t Repeat Yourself)
* 🛠 Makes updates easy
* ⚡ Core to JavaScript performance

> 👉 **Interview Takeaway**
> Prototypes are **shared behavior**. Inheritance lets objects access that behavior.

---

## 🧠 Final Interview Tip for Students

If you can clearly explain:

* Domain modeling
* Semantic HTML
* Constructors vs object literals
* Prototypes using a real-world analogy

✨ **You are already answering junior front-end interview questions correctly.**

---

🚀 *End of Read 07-T*

