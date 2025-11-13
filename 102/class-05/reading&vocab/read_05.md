🌈 Class 5 — Intro to CSS (Style & Design Basics)
🎨 **What is the purpose of CSS?**

CSS controls the appearance of your web page.
HTML = structure
CSS = design

*CSS lets you change:*
Colors
Fonts
Sizes
Spacing
Layout
Overall look and feel

**Three Ways to Insert CSS**
1️⃣ Inline CSS

CSS written inside an HTML tag.

<p style="color: red;">Hello!</p>

2️⃣ Internal CSS

CSS inside a <style> tag in the <head>.

<style>
  p { color: blue; }
</style>

3️⃣ External CSS (⭐ best practice)

A separate style.css file linked to your HTML.

<link rel="stylesheet" href="style.css">

🖍️ *Example CSS Rule:* Make All <p> Tags Red
p {
  color: red;
}

**CSS Vocabulary for Beginners**
🎨 *CSS* (Cascading Style Sheets)
The language that controls how your website looks.
It “cascades,” meaning styles on higher levels can pass down to elements below.

🎯 **Rule**

A complete block of CSS that styles something.
Example:

p {
  color: blue;
}

🏷️**Selector**

The part that chooses which HTML element to style.
Example:
p selects all <p> elements.

⚙️ **Property & Value**

*Property:* what you want to change

*Value:* how you want it to look

*Example:*

color: red;


property → color

value → red

{ } **Curly Braces**

Curly braces hold the CSS rules.
Think of them like a “style container.”

h1 {
  font-size: 30px;
}

## 🎨 Color Systems in CSS
🎨 **Hex Codes**

Hexadecimal color values written with a #
Example:

color: #ff0000;


(where #ff0000 = red)

🔍 *Where to find hex codes:*

https://colorhunt.co

https://coolors.co

https://htmlcolorcodes.com

🌈 **RGB** (Red, Green, Blue)

Mixing values from 0–255 to create colors.
*Example:*

color: rgb(255, 0, 0);
(full red)

🔍 *Try custom RGB colors:*

https://www.w3schools.com/colors/colors_rgb.asp

🎨 **HSL** (Hue, Saturation, Lightness)

A more human-friendly color system.
Example:

color: hsl(0, 100%, 50%);


(hue 0 = red)

🔍 *HSL color picker:*

https://hslpicker.com

Google “HSL color picker”

🧱 **Layout**

How elements are arranged on the page (position, spacing, alignment).
Examples of CSS layout tools:

display: flex;

display: grid;

margin

padding

position

🎨 Quick Color Reference (Copy & Paste)
| Color | Hex       | RGB                | HSL                 |
| ----- | --------- | ------------------ | ------------------- |
| Red   | `#ff0000` | `rgb(255,0,0)`     | `hsl(0,100%,50%)`   |
| Blue  | `#0000ff` | `rgb(0,0,255)`     | `hsl(240,100%,50%)` |
| Green | `#00ff00` | `rgb(0,255,0)`     | `hsl(120,100%,50%)` |
| Black | `#000000` | `rgb(0,0,0)`       | `hsl(0,0%,0%)`      |
| White | `#ffffff` | `rgb(255,255,255)` | `hsl(0,0%,100%)`    |
