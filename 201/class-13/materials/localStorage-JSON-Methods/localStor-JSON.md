# Local Storage & JSON -- Quick Reference

This guide summarizes the **most common Local Storage and JSON methods**
used in JavaScript applications and in the **Local Storage Demo**.

------------------------------------------------------------------------

# What is Local Storage?

**Local Storage** is a browser feature that allows websites to **store
data directly in the user's browser**.

### Key Characteristics

-   Data **persists after page refresh**
-   Data **persists after closing the browser**
-   Data is **specific to the browser and user**
-   Storage limit is about **5MB**
-   Data is stored as **key/value pairs**
-   **Values are always stored as strings**

------------------------------------------------------------------------

# Local Storage Methods

## 1. setItem()

Stores data in Local Storage.

### Syntax

``` javascript
localStorage.setItem(key, value);
```

### Example

``` javascript
localStorage.setItem("name", "Jane Smith");
```

### Explanation

-   `"name"` is the **key**
-   `"Jane Smith"` is the **value**
-   If the key already exists, the value will be **updated**

------------------------------------------------------------------------

## 2. getItem()

Retrieves stored data using its key.

### Syntax

``` javascript
localStorage.getItem(key);
```

### Example

``` javascript
localStorage.getItem("name");
```

### Returns

    Jane Smith

------------------------------------------------------------------------

## 3. removeItem()

Removes a single item from Local Storage.

### Syntax

``` javascript
localStorage.removeItem(key);
```

### Example

``` javascript
localStorage.removeItem("name");
```

------------------------------------------------------------------------

## 4. clear()

Removes **all items** from Local Storage.

### Syntax

``` javascript
localStorage.clear();
```

### Example

``` javascript
localStorage.clear();
```

------------------------------------------------------------------------

# Important Rule

Local Storage **only stores strings**.

Examples:

  JavaScript Value   Stored Value
  ------------------ ---------------------
  true               "true"
  42                 "42"
  object             "\[object Object\]"

To properly store objects or arrays we must use **JSON**.

------------------------------------------------------------------------

# What is JSON?

**JSON (JavaScript Object Notation)** is a text format used to represent
structured data.

JSON looks similar to JavaScript objects but is actually **just a
string**.

### JavaScript Object

``` javascript
let user = {
  name: "Jason",
  age: 35
};
```

### JSON Version

``` json
{"name":"Jason","age":35}
```

------------------------------------------------------------------------

# JSON Methods

## 1. JSON.stringify()

Converts a **JavaScript object into a JSON string**.

### Syntax

``` javascript
JSON.stringify(object);
```

### Example

``` javascript
let jsonString = JSON.stringify(settings);
```

### Why Use It?

Local Storage **cannot store objects**, so we convert them to a string
first.

------------------------------------------------------------------------

## 2. JSON.parse()

Converts a **JSON string back into a JavaScript object**.

### Syntax

``` javascript
JSON.parse(string);
```

### Example

``` javascript
let settingsObject = JSON.parse(savedSettings);
```

------------------------------------------------------------------------

# Example: Saving Application State

Applications often store the **state of the app** inside an object.

### Example State Object

``` javascript
let settings = {
  darkMode: false,
  open: null,
  comment: ""
};
```

### Save State

``` javascript
let data = JSON.stringify(settings);
localStorage.setItem("settings", data);
```

------------------------------------------------------------------------

### Load State

``` javascript
let savedSettings = localStorage.getItem("settings");

if (savedSettings) {
  settings = JSON.parse(savedSettings);
}
```

------------------------------------------------------------------------

# Data Flow Example

    JavaScript Object
          ↓
    JSON.stringify()
          ↓
    JSON String
          ↓
    localStorage.setItem()
          ↓
    Stored in Browser
          ↓
    localStorage.getItem()
          ↓
    JSON.parse()
          ↓
    JavaScript Object Restored

------------------------------------------------------------------------

# Summary

Most commonly used methods:

### Local Storage

-   `localStorage.setItem()`
-   `localStorage.getItem()`
-   `localStorage.removeItem()`
-   `localStorage.clear()`

### JSON

-   `JSON.stringify()`
-   `JSON.parse()`

These tools allow us to **save and restore application state** in the
browser.

------------------------------------------------------------------------

# Key Idea

Local Storage allows us to **persist data** so that:

-   page refreshes
-   browser restarts
-   user returning later

will **not erase important information**.
