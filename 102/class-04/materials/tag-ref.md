## 102-HTML Tags Reference

## **What is a Tag?**

*Tags tell the browser what type of content something is.*
They use angle brackets and often come in pairs:

<p>Hello world!</p>


Opening tag → <p>
Content → Hello world!
Closing tag → </p>

**The Basic Structure** (used on every page)
Tag	Description	Usually Nested
<!DOCTYPE html>	Tells the browser this is an HTML5 document.	First line of every page
<html>	Wraps all code on the page.	Contains <head> and <body>
<head>	Holds information about the page (not shown to users).	Inside <html>
<title>	Sets the page title (appears on browser tab).	Inside <head>
<meta>	Adds extra info like character set or description.	Inside <head>
<body>	Holds everything visible to users.	Inside <html> after <head>

**Page Content Tags**
Tag	Description	Usually Nested
<h1> to <h6>	Headings — <h1> is largest, <h6> smallest.	Inside <body>
<p>	Paragraph — holds blocks of text.	Inside <body>
<a>	Anchor — creates a link. Uses href="URL".	Inside <body>, often inside <nav> or <p>
<img>	Image — displays pictures. Uses src and alt attributes.	Inside <body>, often in <article> or <section>
<ul>	Unordered (bulleted) list.	Inside <nav> or <body>
<ol>	Ordered (numbered) list.	Inside <body>
<li>	List item — goes inside <ul> or <ol>.	Nested in <ul> or <ol>
<strong>	Makes text bold and meaningful.	Inside text or <p>
<em>	Emphasizes text (italic).	Inside text or <p>
<br>	Line break — moves text to a new line.	Inside <p> or text block


**Structural / Semantic Tags**
Tag	Description	Usually Nested
<header>	Top section of a page or article. Often includes logo or navigation.	Inside <body>
<nav>	Navigation bar — holds links (<a>).	Inside <header> or <footer>
<main>	Main content area (used once per page).	Inside <body>
<section>	Groups related content.	Inside <main>
<article>	A standalone piece of content (like a blog post).	Inside <section> or <main>
<figure>	Groups an image and caption.	Inside <article> or <section>
<figcaption>	Caption for an image inside a <figure>.	Inside <figure>
<footer>	Bottom section — copyright, contact, or links.	Inside <body>

**Text and Media Tags**
Tag	Description	Usually Nested
<h1>	Main title of the page (only one per page).	Inside <header> or <main>
<h2> / <h3>	Subheadings under <h1>.	Inside <section> or <article>
<p>	Paragraph of text.	Inside <section> or <article>
<img>	Displays an image. Needs src (source) and alt (description).	Inside <article>, <section>, or <figure>
<a>	Hyperlink. Needs href attribute.	Anywhere in <body>
<hr>	Horizontal line divider.	Inside <body> or between sections

**Grouping and Layout**
Tag	Description	Usually Nested
<div>	A generic container with no semantic meaning. Used for layout.	Inside <body>
<span>	Inline container for small pieces of text.	Inside text or <p>
<section>	Groups related topics or content blocks.	Inside <main>
<article>	A self-contained piece of content.	Inside <main> or <section>

*Special Characters*

Use HTML entities to show symbols:

**Symbol	Code	Output**
Copyright	&copy;	©
Heart	&hearts;	♥
Less than	&lt;	<
Greater than	&gt;	>
Ampersand	&amp;	&

**Typical Tag Order in a Simple HTML Page**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Webpage</title>
  </head>
  <body>
    <header>
      <h1>Site Title</h1>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section>
        <h2>Welcome</h2>
        <p>This is my first HTML page.</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 My Website</p>
    </footer>
  </body>
</html>

## 💡 Quick Tips for Beginners

Every opening tag needs a closing tag (except self-closing ones like <img> or <br>).

Indent nested tags for readability.

Use semantic tags (<header>, <main>, <footer>) instead of just <div>.

Keep one <h1> per page — use <h2> and <h3> for subheadings.

Always include alt text for images.

## Summary:
HTML = Structure 🧱
CSS = Style 🎨
JavaScript = Behavior ⚙️