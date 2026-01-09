# 201-Read_03-T

## ✅ Learn HTML
### Ordered and Unordered Lists

### 1. When should you use an unordered list in your HTML document?
**Answer:**  
Use an unordered list (`<ul>`) when the order of items does not matter.

**Examples:**
- Navigation menus  
- Grocery lists  
- Feature lists  

If changing the order doesn’t change the meaning, use `<ul>`.

---

### 2. How do you change the bullet style of unordered list items?
**Answer:**  
You change bullet styles using CSS with the `list-style-type` property.

**Example:**
```css
ul {
  list-style-type: square;
}
```

**Common values:**  
`disc`, `circle`, `square`, `none`

---

### 3. When should you use an ordered list vs an unordered list?
**Answer:**  
- Use an ordered list (`<ol>`) when the order matters  
- Use an unordered list (`<ul>`) when the order does not matter

**Examples:**
- Steps in a recipe → `<ol>`  
- List of links → `<ul>`

---

### 4. Describe two ways you can change the numbers on list items provided by an ordered list.
**Answer:**  

**1. Change the number style using CSS**
```css
ol {
  list-style-type: upper-roman;
}
```

**2. Change the starting number using HTML**
```html
<ol start="5">
```

---

## 🎨 Learn CSS
### The Box Model

### 5. Describe the CSS properties of margin and padding as characters in a story titled “The Box Model.”
**Answer:**  
In *“The Box Model”*, **padding** is the space inside the box that keeps content comfortable and away from the edges.  
**Margin** is the space outside the box that keeps elements from crowding each other.  
Together, they help the layout feel clean and readable.

---

### 6. List and describe the four parts of an HTML element’s box.
**Answer:**  
- **Content** – The text, image, or data inside the element  
- **Padding** – Space between content and border  
- **Border** – The outline around the element  
- **Margin** – Space outside the border separating elements  

---

## 🧠 Learn JavaScript
### Arrays, Operators, Conditionals, Loops

### 7. What data types can you store inside of an array?
**Answer:**  
Arrays can store:
- Strings  
- Numbers  
- Booleans  
- `null`  
- Objects  
- Other arrays  

JavaScript allows **mixed data types** in arrays.

---

### 8. Is the people array a valid JavaScript array? If so, how can you access the values stored?
```js
const people = [
  ['pete', 32, 'librarian', null],
  ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'],
  ['bill', null, 'artist', null]
];
```

**Answer:**  
Yes, this is a valid **nested array**.

**Access examples:**
```js
people[0][0]; // 'pete'
people[1][2]; // 'accountant'
people[2][1]; // null
```

---

### 9. List five shorthand assignment operators in JavaScript and describe what they do.
**Answer:**  
- `+=` → Adds and assigns  
- `-=` → Subtracts and assigns  
- `*=` → Multiplies and assigns  
- `/=` → Divides and assigns  
- `%=` → Assigns the remainder  

These operators shorten common assignment expressions.

---

### 10. Read the code below and evaluate the last expression. Explain the result.
```js
let a = 10;
let b = 'dog';
let c = false;

(a + c) + b;
```

**Answer:**  
- `false` converts to `0`  
- `10 + 0 = 10`  
- `10 + 'dog'` results in string concatenation  

**Final Result:**
```js
"10dog"
```

---

### 11. Describe a real-world example of when a conditional statement should be used in JavaScript.
**Answer:**  
A conditional is useful when a program must make a decision.

**Example:**  
Checking if a user is logged in before showing a dashboard.

---

### 12. Give an example of when a loop is useful in JavaScript.
**Answer:**  
Loops are useful for repeating actions, such as displaying all items in an array.

**Example:**  
Looping through a list of products or names and displaying each one.


