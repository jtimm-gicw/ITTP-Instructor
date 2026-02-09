# 201-Read_04
+
# 📘 Reading Assignment
**Class 4: HTML, CSS Layout, JavaScript & Pair Programming**

---

## 🧱 Learn HTML  
### Creating Hyperlinks

### **1. To create a basic link, we wrap text or other content inside what element?**
**Answer:**  
We use the **anchor (`<a>`) element**.

```html
<a href="https://example.com">Visit Example</a>
```

The `<a>` tag tells the browser that the content inside it should be clickable.

---

### **2. The `href` attribute contains what information?**
**Answer:**  
The `href` attribute contains the **destination** of the link.

It can link to:
- Another website (`https://google.com`)
- Another page on your site (`about.html`)
- An email address (`mailto:hello@email.com`)
- A section on the same page (`#section1`)

Think of `href` as *where the link goes*.

---

### **3. What are some ways we can ensure links on our pages are accessible to all readers?**
**Answer:**  
Accessible links should:
- Use **descriptive text** (avoid “click here”)
- Be usable with a **keyboard**
- Have **good color contrast**
- Not rely on color alone to show they are links

Accessibility helps screen reader users and improves usability for everyone.

---

## 🎨 CSS Layout  
### Normal Flow & Positioning

### **4. What is meant by “normal flow”?**
**Answer:**  
Normal flow is the browser’s **default layout behavior**.

- Block elements stack vertically
- Inline elements stay inside text
- Elements do not overlap

If no layout CSS is applied, the page uses normal flow.

---

### **5. What are a few differences between block-level and inline elements?**
**Answer:**  

**Block-level elements:**
- Take up the full width
- Start on a new line
- Stack vertically  
Examples: `<div>`, `<p>`, `<section>`

**Inline elements:**
- Stay within text
- Do not start a new line
- Only take up as much space as needed  
Examples: `<span>`, `<a>`

---

### **6. ___ positioning is the default for every HTML element.**
**Answer:**  
**Static** positioning.

Static elements follow normal flow and are not affected by `top`, `left`, `right`, or `bottom`.

---

### **7. Name a few advantages to using absolute positioning on an element.**
**Answer:**  
Absolute positioning allows you to:
- Precisely place elements
- Overlay content (badges, icons, labels)
- Position elements relative to a specific parent
- Remove elements from normal flow

It’s best for small UI elements, not full page layouts.

---

### **8. What is a key difference between fixed positioning and absolute positioning?**
**Answer:**  
- **Absolute positioning** is relative to the nearest positioned parent
- **Fixed positioning** is relative to the browser window and stays in place while scrolling

Fixed elements “stick” to the screen.

---

## 🧠 Learn JavaScript  
### Functions – Reusable Blocks of Code

### **9. Describe the difference between a function declaration and a function invocation.**
**Answer:**  
- A **function declaration** defines the function
- A **function invocation** runs the function

```js
function sayHello() {
  console.log("Hello!");
}

sayHello();
```

Declaration = recipe  
Invocation = cooking the meal

---

### **10. What is the difference between a parameter and an argument?**
**Answer:**  
- A **parameter** is a placeholder in the function definition
- An **argument** is the actual value passed in

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Jason");
```

`name` → parameter  
`"Jason"` → argument

---

## 🤝 Miscellaneous  
### Pair Programming

### **11. Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.**
**Answer:**  

**Benefit 1: Better problem solving**  
Two people bring different perspectives, making it easier to spot mistakes and solve problems faster.

**Benefit 2: Learning by explaining**  
Explaining your code out loud strengthens understanding and builds confidence.

Pair programming helps you learn faster, communicate better, and work more like a real developer.

---

✨ *If you can explain these answers in your own words, you’re on the right track.*


