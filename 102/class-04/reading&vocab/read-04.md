# 102-Read_04-T  
## Class 04 — Structure Web Pages with HTML  

---

### 🧠 Learning Focus
Students learn **how HTML gives structure** to web pages, the **parts of an element**, and the importance of **semantic tags** for meaning and accessibility.  

---

## 1️⃣ What is HTML and why do we use it?

**Answer:**  
HTML stands for **HyperText Markup Language**.  
It is the **standard language** used to **build and structure web pages**.  
HTML tells the browser **what content to display** — such as headings, paragraphs, images, and links.  

💡 **Think of it like a blueprint:**  
HTML defines the structure, CSS adds the style, and JavaScript adds the behavior.

---

**TELL:**  
“HTML is the foundation of every website. It’s what gives structure to your content — just like a skeleton supports a body. Without HTML, the browser wouldn’t know what to show or how to organize it.”  

**TELL:**  
“When you open any website, what you’re really seeing is HTML code being translated by the browser into something readable and clickable.”  

---

## 2️⃣ What are the 3 main parts of an HTML element?

**Answer:**  
Every HTML element has three key parts:  

1. **Opening tag** – starts the element.  
   - Example: `<p>`  
2. **Content** – the text or media inside the element.  
   - Example: `Hello, world!`  
3. **Closing tag** – ends the element.  
   - Example: `</p>`

🧩 **Full Example:**  

<p>Hello, world!</p>

**TELL:**
“Every element in HTML is like a sandwich. You start with a top bun — that’s your opening tag. Inside, you have your content — that’s what you actually want people to see. Then you close it off with the bottom bun — your closing tag.”

**TELL:**
“The forward slash / in the closing tag is how the browser knows where that element ends.”

## 3️⃣ What is it called when you give an element extra information?

**Answer:**
It’s called an *attribute*.

**Attributes:**

- Add extra details or settings to an element.
- Are written inside the opening tag.
- Use name/value pairs — for example: name="value".

🧠 **Example:**

<img src="puppy.jpg" alt="Cute puppy">

Here, src (source) tells the browser where to find the image,
and alt (alternate text) describes the image for accessibility.

**TELL:**
“Attributes are like giving your HTML tag a little more personality. You’re saying, ‘Here’s a picture, and here’s what it is.’”

**TELL:**
“Always include alt text with images — it helps visually impaired users understand what’s on your page and improves SEO.”

## 4️⃣ What is a semantic element?

**Answer:**
A semantic element is a tag that clearly describes its meaning or purpose.

Instead of using generic tags like <div> or <span>,
semantic tags tell browsers, screen readers, and developers what type of content it holds.

**Examples:**
| Tag         | Meaning                      |
| ----------- | ---------------------------- |
| `<header>`  | Top section of a page        |
| `<nav>`     | Navigation links             |
| `<main>`    | Primary content              |
| `<article>` | Independent content block    |
| `<section>` | Thematic grouping of content |
| `<footer>`  | Bottom section of a page     |

💬 *In short:*
Semantic elements make web pages easier to understand, more accessible, and better for search engines.

**TELL:**
“Semantic means meaningful. When we use a tag like <header> instead of <div>, we’re telling both the computer and the next developer what that section is for.”

**TELL:**
“Semantic HTML helps screen readers, improves SEO, and makes your code easier to read and maintain.”

**Summary:**
| Concept              | Description                                     |
| -------------------- | ----------------------------------------------- |
| **HTML**             | Gives structure to a webpage.                   |
| **Element Parts**    | Opening tag + Content + Closing tag.            |
| **Attribute**        | Adds extra information to a tag.                |
| **Semantic Element** | Clearly defines meaning and purpose of content. |


🧭 **TELL:** *Wrap-Up*
“HTML is the skeleton of every web page. Once we master the structure, we can start adding style with CSS and interactivity with JavaScript. Semantic HTML makes our code readable, professional, and accessible — the foundation of good web design.”