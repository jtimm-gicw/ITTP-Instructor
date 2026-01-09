# Class 6 Prep Demo: Cookie Shop 
## HTML + CSS Review

⭐ **Goal**
Before introducing JavaScript, students will reinforce **HTML structure** and **CSS styling** by building a small website for a **cookie shop**. This demo practices:
- Proper HTML document structure
- Semantic HTML tags
- Inline CSS (small example)
- Internal CSS (small example)
- **Mostly external CSS** (best practice)

---

## PART 1: HTML — Structure & Content

### STEP 1: Create the Project Files

**TELL:**  
Today we’re building a simple website for a cookie shop. Before we add any styles or JavaScript, we need our project files — just like real developers do.

**DO / CODE:**
1. Create a new folder called:
   ```
   cookie-shop
   ```
2. Inside the folder, create:
   - `index.html`
   - `styles.css`

**STUDENT TIP:**  
File names are case-sensitive on many systems. Keep everything lowercase and spelled exactly.

**IMPORTANT NOTE:**  
Separating files helps keep code organized and easier to maintain.

**ASK STUDENTS:**  
Why might it be a bad idea to put all our code in one file?

---

### STEP 2: Add the HTML Boilerplate

**TELL:**  
This is the required structure every HTML page needs. Nothing fancy — just the foundation.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sweet Crumbs Cookie Shop</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>

  </body>
</html>
```

**ASK STUDENTS:**  
What do you think would happen if we removed the `<link>` tag?

---

### STEP 3: Add Semantic HTML Content

**TELL:**  
HTML is about meaning and structure. Let’s describe the cookie shop using clear, semantic tags.

```html
<header>
  <h1>Sweet Crumbs Cookie Shop</h1>
  <p style="color: brown;">Freshly baked cookies every day!</p>
</header>

<main>
  <section>
    <h2>Our Cookies</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </section>

  <section>
    <h2>Best Sellers</h2>
    <ul>
      <li>Chocolate Chip</li>
      <li>Oatmeal Raisin</li>
      <li>Peanut Butter</li>
    </ul>
  </section>

  <section>
    <h2>Visit Us</h2>
    <p>Lorem ipsum dolor sit amet.</p>
  </section>
</main>

<footer>
  <p>© 2026 Sweet Crumbs</p>
</footer>
```

**IMPORTANT NOTE:**  
The `style` attribute is an example of **inline CSS**.

---

### STEP 4: Lorem Ipsum Shortcut

**TELL:**  
When developers need fake text quickly, we don’t type it all out.

**DO / CODE:**
Type `lorem` and press **Tab** or **Enter** in VS Code.

**STUDENT TIP:**  
You can type `lorem10`, `lorem20`, etc. to control the amount of text.

---

## PART 2: CSS — Styling the Cookie Shop

### STEP 5: Internal CSS (Small Example)

```html
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>
```

---

### STEP 6: External CSS (Main Focus)

```css
body {
  background-color: #fff7f0;
  margin: 0;
}

header {
  background-color: #8b4513;
  color: white;
  padding: 20px;
}

main {
  padding: 20px;
}

section {
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 6px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f0d9c3;
}
```

---

## WRAP-UP

**TELL:**  
HTML gives structure. CSS gives style. JavaScript will add behavior next class.


## 🔹 PART 3: JavaScript — INTERACTIVITY & LOGIC

### ⭐ Goal
Students will practice using JavaScript to add simple interactivity to their page using variables, functions, and events.

---

### STEP 1: Connect JavaScript to HTML
Explain that JavaScript must be linked to the HTML file.

```html
<script src="script.js"></script>
```

**Teaching Tip:**  
Always place the script tag at the bottom of the HTML file so the page loads before JavaScript runs.

---

### STEP 2: Variables (Storing Information)
Introduce variables as labeled boxes that store data.

```js
let userName = "Jason";
let age = 30;
```

**TELL:**  
“Variables let us remember information so we can use it later.”

---

### STEP 3: Functions (Reusable Actions)
Explain functions as instructions we can reuse.

```js
function greetUser() {
  alert("Welcome to my site!");
}
```

**Important Note:**  
Functions do not run until we call them.

---

### STEP 4: Events (User Interaction)
Explain events as things the user does.

```js
button.addEventListener("click", greetUser);
```

**Teaching Tip:**  
Connect events to real-life actions like clicking a remote or pressing a doorbell.

---

### STEP 5: Console.log for Debugging
Show how developers check their work.

```js
console.log("Button clicked!");
```

**TELL:**  
“The console is your best friend when something doesn’t work.”
