# **Class 2 — Building a Basic HTML Page**

🪄 **Step 1:** Create a New File

In VS Code, create a new file called `index.html`.

Save it inside your class-2 folder.

⚡ **Step 2:** Add the HTML Boilerplate

Type this shortcut and press Tab (or Enter):

`! + Tab`


**This automatically creates your base HTML structure:**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Cool Page</title>
</head>
<body>

</body>
</html>

🧭 **Step 3:** Add a Navigation Bar

Inside the <body> tags, add a nav section with links:

<nav>
  <a href="home.html">🏠 Go Home</a>
  <a href="about.html">ℹ️ About</a>
  <a href="contact.html">📬 Contact</a>
</nav>


## **✅ Explain:**

<nav> groups navigation links.

<a> (anchor tag) creates clickable links.

🏷️ Step 4: Add a Main Heading

Below your nav, add a heading and paragraph:

<h1>How Cool!</h1>
<p>Welcome to my very first HTML page. It’s simple but powerful!</p>


## **✅ Explain:**

<h1> is the main heading of the page.

<p> creates a paragraph of text.

📦 **Step 5:** Add the Main Content Area

Under the paragraph, add your <main> and <article>:

<main>
  <article>
    <h2>My Featured Images</h2>
  </article>
</main>


## **✅ Explain:**

<main> holds the main content.

<article> is like a container for one topic or idea.

🖼️ **Step 6:** Add Sections and Images

Inside the <article>, add three <section> elements with images and captions:

<section>
  <img class="feature" src="https://via.placeholder.com/150" alt="Placeholder image 1">
  <p>Image One Description</p>
</section>

<section>
  <img class="feature" src="https://via.placeholder.com/150" alt="Placeholder image 2">
  <p>Image Two Description</p>
</section>

<section>
  <img class="feature" src="https://via.placeholder.com/150" alt="Placeholder image 3">
  <p>Image Three Description</p>
</section>


## **✅ Explain:**

<section> divides content into parts.

<img> displays an image; always include an alt description for accessibility.

🦶 **Step 7:** Add a Footer

At the bottom of <body>, add a footer:

<footer>
  <p>© 2025 My Cool Page | Built with ❤️ in Class 2</p>
</footer>


## **✅ Explain:**

<footer> appears at the bottom of a webpage, often with credits or contact info.

🌐 **Step 8:** *Final HTML Structure*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Cool Page</title>
</head>
<body>
  <nav>
    <a href="home.html">🏠 Go Home</a>
    <a href="about.html">ℹ️ About</a>
    <a href="contact.html">📬 Contact</a>
  </nav>

  <h1>How Cool!</h1>
  <p>Welcome to my very first HTML page. It’s simple but powerful!</p>

  <main>
    <article>
      <h2>My Featured Images</h2>

      <section>
        <img class="feature" src="https://via.placeholder.com/150" alt="Placeholder image 1">
        <p>Image One Description</p>
      </section>

      <section>
        <img class="feature" src="https://via.placeholder.com/150" alt="Placeholder image 2">
        <p>Image Two Description</p>
      </section>

      <section>
        <img class="feature" src="https://via.placeholder.com/150" alt="Placeholder image 3">
        <p>Image Three Description</p>
      </section>

    </article>
  </main>

  <footer>
    <p>© 2025 My Cool Page | Built with ❤️ in Class 2</p>
  </footer>
</body>
</html>

### **🧠 Teaching Tips**

- 💬 Ask students what each tag means before typing it.

- 🔍 Use Live Server to see real-time updates.

- 🎨 Later, add a style.css to make it colorful and styled.