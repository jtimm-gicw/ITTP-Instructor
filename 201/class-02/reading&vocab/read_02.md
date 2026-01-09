# 201-Read_01

# Class 2 Knowledge Check: HTML, CSS, & JavaScript Basics

This document reviews key concepts from **Class 2**.  
All answers are written in **clear, beginner-friendly language**, as explained by a coding teacher.

---

## 1. Why is it important to use semantic elements in our HTML?

Semantic elements clearly describe **what the content is** instead of just how it looks.

**Why this matters:**
- Makes your code easier to read and understand
- Helps screen readers and accessibility tools
- Improves SEO (search engines understand your page better)
- Makes teamwork easier when others read your code

Examples of semantic elements:
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## 2. How many levels of headings are there in HTML?

There are **6 levels of headings** in HTML:

- `<h1>` through `<h6>`

`<h1>` is the most important heading  
`<h6>` is the least important

---

## 3. What are some uses for the `<sup>` and `<sub>` elements?

- `<sup>` (superscript)  
  - Used for exponents or footnotes  
  - Example: `x<sup>2</sup>`

- `<sub>` (subscript)  
  - Used for chemical formulas or math  
  - Example: `H<sub>2</sub>O`

---

## 4. When using the `<abbr>` element, what attribute must be added to provide the full expansion of the term?

You must add the **`title` attribute**.

*Example:*
```html
<abbr title="World Health Organization">WHO</abbr>
```
## 5. What are ways we can apply CSS to our HTML?

**There are three main ways:**

*External CSS (best practice)*

- Uses a **separate** .css file

- Keeps code **clean and reusable**

*Internal CSS*

Written inside a <style> tag in the HTML file

*Inline CSS*

Written directly *on an HTML element* **(not recommended)**

## 6. Why should we avoid using inline styles?

*Inline styles should be avoided because they:*

* Make code messy and hard to read

* Are difficult to update or reuse

* Override other styles unexpectedly

* *reak separation of concerns (HTML + CSS mixed together)

## 7. Review the CSS code below:
`h2` {
  `color: black;`
  `padding: 5px;`
}

**a. What is representing the selector?**

`h2` is the selector

*It tells CSS which elements to style*

**b. Which components are the CSS declarations?**

`color: black;`

`padding: 5px;`

*Each declaration sets a style rule.*

**c. Which components are considered properties?**

- color

-padding

*Properties describe what is being styled.*

## 8. What data type is a sequence of text enclosed in single quote marks?

A string

*Example:*

let name = 'Jason';

## 9. List 4 types of JavaScript operators.

- Assignment (=)

- Arithmetic (+, -, *, /)

- Comparison (==, ===, >, <)

- Logical (&&, ||, !)

## 10. Describe a real-world problem you could solve with a function.

*Example:*
A function that checks if a user is old enough to sign up for a website.

**Why a function helps:**

- Avoids repeating code

- Keeps logic organized

- Makes code reusable

## 11. An if statement checks a __ and if it evaluates to ___, then the code block will execute.

An if statement *checks a condition*

*If it evaluates to **true***, the *code block runs*

## 12. What is the use of an else if?

**else if** allows you to *check another condition* if the *first one is **false***.

It is used when there are *multiple possible outcomes*.

## 13. List 3 different types of comparison operators.

`==` (equal to)

`===` (strictly equal to)

> (greater than)

## 14. What is the difference between the logical operator && and ||?

`&&` (AND)

*All conditions* must be **true**

`||` (OR)

*At least one condition* must be **true**
