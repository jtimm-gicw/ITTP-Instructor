# 📦 Local Storage & JSON – Common Student Questions

After learning about **Local Storage** and **JSON**, students often have similar questions.  
This guide summarizes common questions and clear answers.

---

## 1. What is Local Storage?

**Answer:**  
Local Storage is a feature built into the browser that lets you store small amounts of data **directly in the user's browser**.

**Key points:**

- Data is stored as **key–value pairs**
- Data **persists even after the page reloads**
- Data remains until it is **manually removed or cleared**
- It only works in the **same browser and device**

Example:

```javascript
localStorage.setItem("username", "Jason");
```

---

## 2. Why do we use JSON with Local Storage?

**Answer:**  
Local Storage can **only store strings**.

But JavaScript applications often use **objects and arrays**, so we convert them using JSON.

**Process:**

| Step | Method | Purpose |
|-----|-----|-----|
| Convert object → string | `JSON.stringify()` | Before saving |
| Convert string → object | `JSON.parse()` | After loading |

Example:

```javascript
let user = { name: "Alex", age: 25 };

localStorage.setItem("user", JSON.stringify(user));
```

---

## 3. What is `JSON.stringify()`?

**Answer:**  
`JSON.stringify()` converts a **JavaScript object into a string**.

Why? Because Local Storage **only accepts strings**.

Example:

```javascript
let settings = { darkMode: true };

let data = JSON.stringify(settings);
```

---

## 4. What is `JSON.parse()`?

**Answer:**  
`JSON.parse()` converts a **string back into a JavaScript object**.

Example:

```javascript
let stored = localStorage.getItem("settings");

let settings = JSON.parse(stored);
```

---

## 5. What happens if nothing exists in Local Storage yet?

**Answer:**  
`localStorage.getItem()` will return **null**.

Example:

```javascript
let settings = localStorage.getItem("settings");

if (!settings) {
  console.log("No saved settings yet");
}
```

This is why we often use a **guard clause**.

---

## 6. What is a Guard Clause?

**Answer:**  
A guard clause **stops a function early** if something isn't valid.

Example:

```javascript
if (!savedSettings) {
  return;
}
```

This prevents errors when trying to use **data that doesn't exist yet**.

---

## 7. Where is Local Storage data actually stored?

**Answer:**  
It is stored inside the **browser**.

Students can see it here:

**Chrome DevTools → Application → Local Storage**

There you can:

- View stored keys
- View values
- Edit them
- Delete them

---

## 8. How much data can Local Storage hold?

**Answer:**  
Most browsers allow about:

**5MB per domain**

This is fine for:

- User preferences
- Small app data
- Settings
- Form input

But it is **not suitable for large data**.

---

## 9. When should we use Local Storage?

Good uses include:

- Dark mode preferences
- User settings
- Form drafts
- Saved UI state
- Small offline data

Example from the demo:

- Dark mode preference
- Last open accordion section
- User comment

---

## 10. When should we NOT use Local Storage?

Do **not** use Local Storage for:

- Passwords
- Sensitive user data
- Large datasets
- Server-side data

Local Storage is **not secure**.

---

# 🎓 Key Takeaways

- Local Storage stores **strings only**
- JSON helps convert **objects ↔ strings**
- Data **persists after page reload**
- Always check if stored data exists before using it

Common workflow:

```javascript
// Save
localStorage.setItem("settings", JSON.stringify(settings));

// Load
let saved = JSON.parse(localStorage.getItem("settings"));
```

---

# 💡 Pro Tip for Students

If your code is not working:

1. Check **DevTools → Application → Local Storage**
2. Look at the stored value
3. Make sure you used:

- `JSON.stringify()` when saving
- `JSON.parse()` when loading