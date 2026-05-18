# React Routes with `react-router-dom`

## 🎯 Learning Goals

By the end of this lesson, students should understand:

- What routing is
- Why routing is important
- How React Router works
- How to use:
  - `<BrowserRouter>`
  - `<Routes>`
  - `<Route>`
  - `<Link>`
- The difference between React routing and traditional websites

---

## 🧠 What is Routing?

Routing is:
> Showing different content based on the URL.

---

## 🌐 Example URLs

| URL | Page Shown |
| --- | --- |
| `/` | Home Page |
| `/about` | About Page |
| `/contact` | Contact Page |

When the URL changes, React Router decides which component to display.

---

## 🧩 Analogy

Think of routing like TV channels.

| **Channel** | **Content** |

| ESPN | Sports |
| Discovery | Science |
| Cartoon Network | Cartoons |

Changing the channel changes the content.

In React:

- the URL is the channel
- the component is the content

---

## ❓ Why Do We Use Routing?

Most websites need:

- multiple pages
- navigation
- browser history
- bookmarks
- back button support

Routing helps organize applications into separate views or pages.

---

## ⚡ React Router vs Traditional Websites

### Traditional Website

When clicking a link:

1. Browser requests a NEW page
2. Server sends HTML
3. Page fully reloads

---

## React Router

When clicking a link:

1. URL changes
2. React swaps components
3. Page does NOT fully reload

This creates a faster user experience.

---

## 🧠 Important Concept

React applications using routing are often called:

## Single Page Applications (SPAs)

Meaning:

- one HTML page
- content changes dynamically

---

### 📦 Installing React Router

```bash
npm install react-router-dom
```

---

## 🚦 Main React Router Components

## 1️⃣ `<BrowserRouter>`

## Purpose

Enables routing for the entire application.

---

## Example

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## 🧠 What It Does

`<BrowserRouter>`:

- watches the URL
- tracks navigation
- updates components
- preserves browser history

---

## ⚠️ Important

Usually placed in:

- `main.jsx`
- `index.js`

---

## 2️⃣ `<Routes>`

### Purpose of `<Routes>`

Holds all Route components.

---

### `<Routes>` Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

## `<Routes>` What It Does

`<Routes>`:

- checks the current URL
- finds matching routes
- renders the correct component

---

### IMPORTANT

In React Router v6:

```plaintext
Routes replaced Switch
```

from older versions.

---

## 3️⃣ `<Route>`

### Purpose of `<Route>`

Connects a URL path to a component.

---

### Example `<Route>`

```jsx
<Route
  path="/about"
  element={<About />}
/>
```

---

## 🧠 What This Means

If the URL is:

```plaintext
/about
```

React renders:

```jsx
<About />
```

---

## 🧩 Think of It Like

```plaintext
IF URL matches
THEN render component
```

---

## 4️⃣ `<Link>`

### Purpose`<Link>`

Used for navigation between pages.

---

### `<Link>` Example

```jsx
<Link to="/about">About</Link>
```

---

## 🧠 What Is Happening

When clicked:

- URL changes
- component changes
- page does NOT refresh

---

## ⚠️ IMPORTANT

Use:

```jsx
<Link>
```

instead of:

```html
<a>
```

inside React apps.

---

## ❌ Why Not Use `<a>` Tags?

Regular `<a>` tags:

- refresh the page
- restart the application
- lose React state

---

## ✅ Full Example

### `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

);
```

---

## `App.jsx`

```jsx
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {

  return (

    <div>

      <nav>

        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </div>

  );

}

export default App;
```

---

## 🔄 What Happens During Navigation?

## Step-by-Step

### User clicks

```plaintext
About
```

---

### URL changes

```plaintext
/about
```

---

### React Router checks

```jsx
<Route path="/about" />
```

---

### Matching component renders

```jsx
<About />
```

---

## 🌐 Frontend vs Backend Routing

| **Backend Routing** | **React Routing** |

| Server handles routes | Browser handles routes |
| Full page reload | Dynamic component rendering |
| Returns HTML pages | Returns React components |

---

## ⚠️ Common Beginner Mistakes

### ❌ Forgetting `<BrowserRouter>`

Result:

```plaintext
Routes will not work
```

---

### ❌ Using `<a>` Instead of `<Link>`

Result:

```plaintext
Page refreshes completely
```

---

### ❌ Wrong Route Path

Result:

```plaintext
Component never appears
```

---

### ❌ Forgetting `element={}`

Result:

```plaintext
Route errors
```

---

### 🧠 Key Takeaways

## Students Should Understand

### `<BrowserRouter>`

Enables routing.

---

### `<Routes>`

Holds all routes.

---

### `<Route>`

Matches URLs to components.

---

### `<Link>`

Navigates without refreshing.

---

### React Route

Creates fast Single Page Applications.

---

## 🧪 Check-In Questions

### 1️⃣ What is routing?

---

### 2️⃣ Which component enables routing?

---

### 3️⃣ What does `<Route>` do?

---

### 4️⃣ Why should React apps use `<Link>` instead of `<a>`?

---

### 5️⃣ What is a Single Page Application?

---

## 💡 Final Tip

Routing is one of the MOST important concepts in React because nearly every modern web application uses it.

Examples include:

- portfolios
- social media apps
- dashboards
- e-commerce sites
- blogs
- admin panels
