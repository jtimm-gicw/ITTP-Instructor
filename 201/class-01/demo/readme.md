# Demo Instructions:

**STEP 1** — Build the HTML Skeleton (Semantic HTML First)

*EXPLAIN:* Semantic HTML means using tags that describe what the content is, not just what it looks like. *This helps:*

* accessibility (screen readers)

* SEO (search engines)

* team readability (humans can scan structure fast)

**Teacher Tip:** Start with Emmet to save time and model professional habits.

### **STEPS**

In index.html, type: !

Press Tab (or Enter) to generate the skeleton

Replace the content with this semantic structure:

<!DOCTYPE html>
<html>
  <head>
    <title>Class 01 Demo</title>
  </head>

  <body>
    <header>
      <h1>Class 01 Demo</h1>
    </header>

    <main>
      <p>This is a paragraph tag.</p>
    </main>

    <footer>&copy;2024 ITTP</footer>
  </body>
</html>


**Student Tip:** If your page “works” but looks plain—good. HTML is structure first.

**TELL:** “HTML is the bones. CSS is the clothes. JavaScript is the behavior.”

**STEP 2** — Add Internal CSS (Style Tag in the Head)

*EXPLAIN:* Internal CSS lives inside a <style> tag in the <head>. It applies to the whole page, but only inside this HTML file.

**TELL:** “CSS is made of rules. A rule = a selector + a block of properties.”

- What to point out (quick + clear)

- Selector: who we’re styling (body, p, header, etc.)

- Curly braces { }: holds the style rules

- Property: what you change (background-color)

- Value: what you set it to (darkgrey)

- Semicolons: end each property line

- Kebab-case: background-color not backgroundColor

### **STEPS**

Inside <head>, add a <style> tag

*Add a basic rule:*

<head>
  <title>Class 01 Demo</title>
  <style>
    body {
      background-color: darkgrey;
    }
  </style>
</head>


**Teacher Tip:** After adding CSS, refresh the page immediately so students see cause → effect.

**Student Tip:** If your CSS “isn’t working,” check:

Is it inside <style>?

Did you miss a { or }?

Did you forget a semicolon?

**STEP 3** — Demonstrate Inline CSS (Style Attribute)

*EXPLAIN:* Inline CSS is written directly on one element using the style="" attribute.

**TELL:** “Inline styles apply only to that one tag—and they override internal styles because they have higher specificity.”

### **STEPS**

Find your <p> in <main>

*Replace it with:*

<p style="color: #023047; background-color: #ffb703">
  This is a paragraph tag.
</p>


**Teacher Tip:** Emphasize that inline styles are okay for learning + quick tests, but not great for maintainable projects.

**STEP 4** — Add Internal JavaScript (Script Tag Before </body>)

*EXPLAIN:* We put <script> near the bottom so the HTML loads first. That prevents “JavaScript ran before the page existed” problems.

**TELL:** “Even though we’re in an HTML file, we still write real JavaScript with good style.”

JavaScript style reminders (keep it simple)

`let` for variables in this course

*camelCase* variable names

*single quotes* for strings

### **STEPS**

Add this right above </body>:

<script>
  let siteVisitor = prompt('What is your name?');
  console.log('Our visitor\'s name is ' + siteVisitor);

  alert('Welcome to my site ' + siteVisitor + '!');
</script>


*EXPLAIN (prompt return):*
`prompt()` gives back (returns) whatever the user typed. If a function returns something, we usually store it in a variable so we can reuse it.

*EXPLAIN (escape character):*
The \ in visitor\'s is an escape character. It tells JavaScript: *“This apostrophe is text, not the end of the string.”*

**Student Tip:** If you click “Cancel” in the prompt, you might get null. That’s okay for now—just notice what happens.

**STEP 5** — Developer Tools (Elements, Console, Sources)

**TELL:** “DevTools is where developers verify what’s happening instead of guessing.”

### **STEPS**

Open DevTools

Windows/Linux: Shift + Ctrl + J

Go to Console

Refresh the page to see your console.log

Show Elements tab (HTML structure)

Show Sources tab (your file + where code lives)

Show variables in the console

*EXPLAIN:* If a variable is global, you can type its name in the console and see its value.

**Teacher Tip:** For a clean demo, add this one line after the prompt to make it accessible:

`window.siteVisitor = siteVisitor`;


Then in the console, type: siteVisitor

**Student Tip:** Console is your best friend for debugging.

**STEP 6** — Run a Lighthouse Accessibility Report

*EXPLAIN:* Lighthouse checks how accessible your site is. Accessibility helps everyone—keyboard users, screen readers, low-vision users, and people on different devices.

### **STEPS**

Open DevTools

Click Lighthouse

*Select:*

Mode: Navigation

Device: Desktop

Categories: Accessibility

Click Analyze page

**TELL:** “A 50–65 accessibility score is a solid early target. You’ll improve it as you learn more.”

**Teacher Tip:** If the score is low, treat it as a learning win: “Now we know what to improve.”

**STEP 7** — Publish Your Code (GitHub Gist)

*EXPLAIN:* A Gist is like a mini-repo for sharing code quickly.

### **STEPS**

Copy all code from `index.html`

Create a new Gist on GitHub

Name the file: `index.html`

Paste your code, create the gist

Copy the gist link

Show how they submit that link in Canvas

**Student Tip:** Make sure your gist is public if Canvas requires instructors to view it.

***Optional Wrap-Up*** *(Fast Review Questions)*

**TELL:** “What job does HTML do? CSS? JavaScript?”

***Ask:*** “Where does internal CSS go?”

***Ask:*** “Why do we put <script> near the bottom?”

***Ask:*** “Where do console logs show up?”

***Ask:*** “What does it mean when Lighthouse suggests an accessibility fix?”

## Teacher Notes (Common Gotchas)

Students confuse href vs src (images use src)

Missing semicolons in CSS rules

Script accidentally placed in <head> and students get confused about load order

Students forget to refresh after edits

Students aren’t watching the Console while testing