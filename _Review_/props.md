# Understanding Props in React

---

# What Are Props?

## Definition

**Props** (short for "properties") are a way to pass data from a **parent component** to a **child component** in React.

Think of props like:

- function arguments
- custom HTML attributes
- information sent from one component to another

---

# Why Do We Use Props?

Props help make components:

✅ reusable  
✅ dynamic  
✅ organized  
✅ easier to maintain

Instead of hardcoding values inside components, we can pass different data into them.

---

# How Props Work

A parent component sends props like this:

```jsx
<Greeting name="Jason" />
```

The child component receives the props:

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

Output:

```txt
Hello Jason
```

---

# Visual Flow

```txt
Parent Component
       ↓
   sends props
       ↓
Child Component
```

---

# Example Parent Component

```jsx
import Greeting from './Greeting';

function App() {
  return (
    <>
      <Greeting name="Jason" />
      <Greeting name="Maria" />
    </>
  );
}

export default App;
```

---

# Example Child Component

```jsx
function Greeting(props) {
  return <h2>Hello {props.name}</h2>;
}

export default Greeting;
```

---

# Different Types of Props

---

# 1. STRING PROPS

## Parent

```jsx
<Greeting name="Jason" />
```

## Child

```jsx
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}
```

## Explanation

We passed a string value:

```jsx
"Jason"
```

The child receives it through:

```jsx
props.name
```

---

# 2. NUMBER PROPS

## Parent

```jsx
<Age age={25} />
```

## Child

```jsx
function Age(props) {
  return <p>Age: {props.age}</p>;
}
```

## Explanation

Numbers must use:

```jsx
{}
```

because they are JavaScript values.

---

# 3. BOOLEAN PROPS

## Parent

```jsx
<User isLoggedIn={true} />
```

## Child

```jsx
function User(props) {
  return (
    <div>
      {props.isLoggedIn ? <p>Welcome Back!</p> : <p>Please Log In</p>}
    </div>
  );
}
```

## Explanation

Boolean props are often used for:

- conditions
- toggles
- authentication
- visibility

---

# 4. ARRAY PROPS

## Parent

```jsx
<Colors colors={['red', 'blue', 'green']} />
```

## Child

```jsx
function Colors(props) {
  return (
    <ul>
      {props.colors.map((color) => (
        <li>{color}</li>
      ))}
    </ul>
  );
}
```

## Explanation

Arrays are commonly passed for:

- lists
- API data
- rendering multiple items

---

# 5. OBJECT PROPS

## Parent

```jsx
<UserProfile user={{ name: 'Jason', age: 30 }} />
```

## Child

```jsx
function UserProfile(props) {
  return (
    <>
      <h2>{props.user.name}</h2>
      <p>{props.user.age}</p>
    </>
  );
}
```

## Explanation

Objects are useful when grouping related data together.

Very common with API responses.

---

# 6. FUNCTION PROPS

## One of the MOST IMPORTANT React Concepts

Functions can be passed as props.

This allows child components to communicate with parents.

---

# Parent Component

```jsx
import Button from './Button';

function App() {

  function handleClick() {
    alert('Button Clicked!');
  }

  return (
    <>
      <Button clickMe={handleClick} />
    </>
  );
}

export default App;
```

---

# Child Component

```jsx
function Button(props) {
  return (
    <button onClick={props.clickMe}>
      Click Me
    </button>
  );
}

export default Button;
```

---

# Explanation

The parent passes a function:

```jsx
clickMe={handleClick}
```

The child RECEIVES the function:

```jsx
props.clickMe
```

The child RUNS the function when clicked:

```jsx
onClick={props.clickMe}
```

---

# Why Function Props Matter

Function props allow:

✅ child-to-parent communication  
✅ updating state  
✅ handling events  
✅ interactive applications

This is one of the MOST common patterns in React.

---

# 7. JSX / COMPONENT PROPS

React components can even receive JSX as props.

---

# Parent

```jsx
<Card content={<h1>Hello World</h1>} />
```

## Child

```jsx
function Card(props) {
  return (
    <div>
      {props.content}
    </div>
  );
}
```

---

# Explanation

React can pass JSX elements as data.

Useful for:

- layouts
- cards
- modals
- reusable UI patterns

---

# 8. CHILDREN PROP

React automatically provides a special prop called:

```jsx
props.children
```

---

# Parent

```jsx
<Layout>
  <h1>Hello Students</h1>
</Layout>
```

---

# Child

```jsx
function Layout(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
```

---

# Explanation

Everything placed BETWEEN opening and closing tags becomes:

```jsx
props.children
```

Very common for:

- wrappers
- layouts
- reusable containers

---

# Destructuring Props (Cleaner Syntax)

Instead of:

```jsx
function Greeting(props) {
  return <h1>{props.name}</h1>;
}
```

We can use destructuring:

```jsx
function Greeting({ name }) {
  return <h1>{name}</h1>;
}
```

---

# Why Use Destructuring?

✅ cleaner code  
✅ easier to read  
✅ less typing

Very common in professional React codebases.

---

# Props Are Read-Only

IMPORTANT:

Props should NEVER be changed inside the child component.

❌ BAD:

```jsx
props.name = 'Bob';
```

Props are meant to be:

✅ received  
✅ displayed  
✅ used

NOT modified.

---

# Common Real-World Prop Usage

| Prop Type | Common Usage |
|---|---|
| Strings | Names, titles, labels |
| Numbers | Prices, ages, counters |
| Booleans | Login state, visibility |
| Arrays | Lists, API data |
| Objects | User profiles, products |
| Functions | Event handling |
| JSX | Layout content |
| Children | Wrappers/components |

---

# Final Takeaways

## Props:

✅ pass data from parent to child  
✅ make components reusable  
✅ allow dynamic applications  
✅ can pass almost any JavaScript value

---

# MOST IMPORTANT CONCEPTS

## Parent sends props

```jsx
<Greeting name="Jason" />
```

## Child receives props

```jsx
function Greeting(props) {
  return <h1>{props.name}</h1>;
}
```

---

# React Development Reality

The majority of React applications are built around:

✅ props  
✅ state  
✅ component communication

Understanding props is one of the biggest steps toward becoming comfortable with React.