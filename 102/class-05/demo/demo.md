# 🎨 102-Class_05-DEMO-T

## ⭐ Goal
Students will apply visual design to their existing HTML page using **three CSS methods** (inline, internal, external). Students will learn CSS vocabulary (selector, property, value, rule, hex, RGB, HSL, layout) and see styling update their page in real time.

---

# 🚀 STEP 1: Setup & Overview

## 💬 Notes
- Students already built HTML in Class 04  
- Today they add CSS styling on top of it  

## 🗣️ TELL
“Last class, we built the *structure* of a webpage using HTML. Today, we make it actually look good. CSS controls **colors, layout, spacing, fonts, and design**. By the end, you’ll know three different ways to style a page.”

---

# 📄 STEP 2: Open the HTML File From Class 04

## 🛠️ Do
- Students open their HTML file (`index.html`) inside their reading-notes → 102 folder.

## ℹ️ Explain
“We will be styling this exact page. Every style we write today will immediately change the page.”

## 🗣️ TELL
“Think of HTML as the bones and CSS as the clothes, decorations, and design.”

---

# 🎯 STEP 3: Inline CSS Demo

## 💬 Notes
Start with the simplest method — inside the HTML tag.

## 🛠️ Do
Find the first paragraph and add:


<p style="color: blue; font-size: 20px;">
  Lorem ipsum text styled with inline CSS!
</p>
ℹ️ Explain
style="" holds CSS

Properties: color, font-size

Values: blue, 20px

🗣️ TELL
“This is inline CSS — quick but messy. Developers avoid it for real projects, but it’s important to understand.”

🧩 STEP 4: Internal CSS Demo
💬 Notes
Show how to organize CSS inside the <head>.

🛠️ Do
Add this inside the <head>:


<style>
  h1 {
    color: rgb(0, 150, 255);
    text-align: center;
  }

  img {
    border-radius: 10px;
  }
</style>
ℹ️ Explain
<style> holds CSS inside HTML

Selectors choose elements

Properties + values = rules

Curly braces { } wrap each rule

🗣️ TELL
“This is internal CSS. Useful for small projects or demos.”

🗂️ STEP 5: External CSS Demo (Best Practice)
💬 Notes
Professional developers use external CSS for clean separation of HTML + styling.

🛠️ Do
In GitHub → Add file → Create new file

Name it: style.css

Add:

p {
  color: red;
  padding: 10px;
}
Link it inside the HTML <head>:

<link rel="stylesheet" href="style.css">
🗣️ TELL
“External CSS is the cleanest and most professional method. It keeps styling separate from your HTML.”

🎨 STEP 6: Color Systems (Hex, RGB, HSL)
🛠️ Do
Inside style.css, overwrite the <h1> color three times:

🔶 Hex

h1 {
  color: #ff5733;
}
🔷 RGB

h1 {
  color: rgb(34, 150, 243);
}
🎨 HSL

h1 {
  color: hsl(200, 90%, 50%);
}
🗣️ TELL
“You can use hex, RGB, or HSL to change color. They all work differently but produce similar results.”

🌐 Helpful Color Sites
https://colorhunt.co

https://coolors.co

https://htmlcolorcodes.com

🧱 STEP 7: Layout Basics (Margin + Padding)
🛠️ Do (External CSS)

section {
  margin-bottom: 20px;
}
🛠️ Do (Internal CSS)

<style>
  p {
    padding: 10px;
  }
</style>
🛠️ Do (Inline CSS)

<img src="..." alt="Cookie" style="margin-top: 20px;">
🗣️ TELL
“Margin is the space outside an element.
Padding is the space inside an element.”

🧭 STEP 8: Navigation Bar Styling (External CSS)
🛠️ Do (style.css)

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
🗣️ TELL
“We’re using descendant selectors like nav a. These target only the links inside the <nav> element.”

🖼️ STEP 9: Footer Styling (Inline + Internal + External Mix)
🛠️ Do (Inline)

<footer style="background-color:#f5f5f5; text-align:center;">
🛠️ Do (Internal)

<style>
  footer p {
    font-size: 14px;
  }
</style>
🛠️ Do (External)

footer {
  padding: 20px;
}
🗣️ TELL
“This shows how all three CSS methods affect the same element.”

💾 STEP 10: Commit Work + Review
🛠️ Do
Students commit all updated files to GitHub.

🗣️ TELL
“Today you wrote CSS using all three methods and learned selectors, properties, values, rules, plus color systems like hex, RGB, and HSL.”

⭐ STEP 11: Stretch Goals
Encourage students to explore
Background colors

Font sizes

Borders

Rounded images

Link hover effects

Removing underline from links

💬 Wrap-Up & Discussion
Ask students:
“Which CSS method felt easiest?”

“Why do developers prefer external CSS?”

“How did color systems affect your styling choices?”