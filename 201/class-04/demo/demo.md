# Class 4: CSS Layout – Step-by-Step Demo Guide

This guide walks students through **core CSS layout concepts** using an HTML and external css demo file.
Use this as an instructor-led walkthrough or a student reference.

---

## ⭐ Goal
Students will understand how CSS controls **where elements appear on a page**, not just how they look.

---

## STEP 1: No Layout (Default Behavior)

### TELL:
By default, the browser stacks everything in one long column.

### Key Idea:
This is readable, but uncomfortable on wide screens.

### Demo:
- Load the HTML file **with minimal CSS**
- Resize the browser window
- Observe long line lengths

---

## STEP 2: Centering Content with `margin: auto`

### TELL:
We often want content centered in the page.

```css
#main {
  max-width: 800px;
  margin: 0 auto;
}
```

### Explain:
- `max-width` limits how wide content can grow
- `margin: auto` centers it horizontally

---

## STEP 3: The `display` Property

### TELL:
`display` controls how elements behave in the layout.

### Block Elements:
- Take full width
- Stack vertically

Examples:
- `div`, `p`, `section`

### Inline Elements:
- Stay inside text
- Do not start new lines

Examples:
- `span`, `a`

---

## STEP 4: The Box Model

### TELL:
Padding and borders add to an element’s size.

```css
.simple {
  width: 300px;
}

.fancy {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

### Result:
Even though widths match, boxes appear different sizes.

---

## STEP 5: Fixing Layout with `box-sizing`

### TELL:
`box-sizing: border-box` makes sizing intuitive.

```css
* {
  box-sizing: border-box;
}
```

### Result:
Padding and borders are included inside the width.

---

## STEP 6: Positioning Elements

### Static (default):
Elements stay in normal flow.

### Relative:
Moves relative to itself.

### Absolute:
Positions relative to nearest positioned parent.

### Fixed:
Stays in the same spot on screen while scrolling.

---

## STEP 7: Float Layouts

### TELL:
Floats were originally made for wrapping text around images.

```css
.float-box {
  float: left;
}
```

### Clearfix:
Used to prevent layout collapse.

```css
.clearfix {
  overflow: auto;
}
```

---

## STEP 8: Inline-Block Layout

### TELL:
`inline-block` allows elements to sit next to each other while keeping width and height.

```css
.box {
  display: inline-block;
  width: 150px;
}
```

---

## STEP 9: Flexbox (Modern Layout)

### TELL:
Flexbox is the preferred modern layout system.

```css
.container {
  display: flex;
}
```

### Benefits:
- Easy rows and columns
- Simple centering
- Flexible spacing

---

## STEP 10: Responsive Design with Media Queries

### TELL:
Media queries adapt layouts to screen size.

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

---

## ✅ Wrap-Up Questions

- What property controls layout the most?
- Why is `box-sizing` important?
- When would you choose Flexbox over floats?

---

## Instructor Tip
Focus on **understanding behavior**, not memorization.
Students should explain *what changed* and *why it changed*.
