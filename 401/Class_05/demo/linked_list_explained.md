# Linked Lists Explained

## Class 5 - Data Structures

---

# What is a Linked List?

A **Linked List** is a collection of **Nodes** connected together in a chain.

Instead of storing everything side-by-side like an array, each node stores:

1. A **value** — the data
2. A **pointer (`next`)** — a reference to the next node in the list

### 🏕️ Think About a Camping Trip

Imagine you're getting ready for a camping trip.

You have a series of important items:

- 🎒 Backpack
- ⛺ Tent
- 🔦 Flashlight
- 🥾 Hiking Boots
- 🔥 Fire Starter

Instead of putting all of these items into one big numbered list, imagine that **each item tells you where to find the next item**.

```text
🎒 Backpack
     │
     ▼
⛺ Tent
     │
     ▼
🔦 Flashlight
     │
     ▼
🥾 Hiking Boots
     │
     ▼
🔥 Fire Starter
     │
     ▼
   null
```

That's the basic idea behind a Linked List.

Each item is a **Node**.

Each node knows:

> "Here's my value, and here's where the next node is."

---

# Visual Diagram

```text
                              LINKED LIST
                         "Our Camping Gear Chain"

                                  HEAD
                           Starting Point
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │         NODE 1          │
                    │                         │
                    │  Value: 🎒 Backpack     │
                    │  Next: ─────────────────┼───────────────┐
                    └─────────────────────────┘               │
                                                              │
                                                              ▼
                                             ┌─────────────────────────┐
                                             │         NODE 2          │
                                             │                         │
                                             │  Value: ⛺ Tent         │
                                             │  Next: ─────────────────┼──────────┐
                                             └─────────────────────────┘          │
                                                                                  │
                                                                                  ▼
                                                                    ┌─────────────────────────┐
                                                                    │         NODE 3          │
                                                                    │                         │
                                                                    │  Value: 🔦 Flashlight   │
                                                                    │  Next: ─────────────────┼──────┐
                                                                    └─────────────────────────┘      │
                                                                                                     │
                                                                                                     ▼
                                                                            ┌─────────────────────────┐
                                                                            │         NODE 4          │
                                                                            │                         │
                                                                            │  Value: 🥾 Hiking Boots │
                                                                            │  Next: ─────────────────┼───────┐
                                                                            └─────────────────────────┘       │
                                                                                                              │
                                                                                                              ▼
                                                                                                  ┌─────────────────────────┐
                                                                                                  │         NODE 5          │
                                                                                                  │                         │
                                                                                                  │  Value: 🔥 Fire Starter│
                                                                                                  │  Next: null             │
                                                                                                  └─────────────────────────┘
```

---

# Breaking Down the Diagram

Let's look at one node.

```text
        NODE

   ┌────────────────────┐
   │ value = "Backpack" │
   │                    │
   │ next = -----------►│
   └────────────────────┘
```

Every node stores two important things:

| Property | Purpose |
|----------|---------|
| `value` | The actual data |
| `next` | A reference/pointer to the next node |

### 🏕️ Camping Translation

```text
┌────────────────────┐
│ Value:🎒 Backpack │
│                    │
│ Next: ─────────────┼──────► ⛺ Tent
└────────────────────┘
```

The Backpack node contains:

```text
value = "Backpack"
next  = Tent
```

The Tent node contains:

```text
value = "Tent"
next  = Flashlight
```

And so on.

---

# What is the Head?

The Linked List itself needs to know **where the list begins**.

That starting point is called the **Head**.

```text
Linked List

   HEAD
     │
     ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

The **Head** points to the **first node**.

Think of it like the beginning of a hiking trail:

```text
🏕️ Trailhead
     │
     ▼
🌲 → 🌲 → 🌲 → 🌲 → 🏕️ Campsite
```

If you know where the trail starts, you can follow it to the end.

If you know where the `Head` is, you can follow the linked list to the end.

---

# Why Does the Last Node Point to `null`?

The last node has nowhere else to go.

Our camping list ends with the Fire Starter:

```text
🥾 Hiking Boots
       │
       ▼
🔥 Fire Starter
       │
       ▼
     null
```

`null` simply means:

> "There is no next node."

When our code reaches `null`, it knows to stop.

```text
Fire Starter → null

             STOP!
```

---

# How Traversal Works

**Traversal** means:

> Visit every node in the list.

Since linked lists do **not** have indexes, we start at the `Head` and follow each `next` pointer.

---

## Step 1 — Start at the Head

```text
current
   ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

---

## Step 2 — Move to the Tent

```text
              current
                 ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

---

## Step 3 — Move to the Flashlight

```text
                              current
                                 ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

---

## Step 4 — Move to the Hiking Boots

```text
                                            current
                                               ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

---

## Step 5 — Move to the Fire Starter

```text
                                                          current
                                                             ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

---

## Step 6 — Reach `null`

```text
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
                                                                          ▲
                                                                        current
```

Eventually:

```javascript
current = null;
```

The loop stops because there are no more nodes.

---

# How Does This Code Work?

```javascript
let current = list.head;

while (current !== null) {

  console.log(current.value);

  current = current.next;

}
```

Let's look at each line.

---

## Start at the Beginning

```javascript
let current = list.head;
```

We're saying:

> "Start at the first piece of camping gear."

```text
current
   ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

---

## Print the Value

```javascript
console.log(current.value);
```

The first time through the loop, this prints:

```text
Backpack
```

Then:

```text
current.value
```

gives us the value stored inside the current node.

---

## Move to the Next Node

```javascript
current = current.next;
```

This means:

> "Follow the pointer to the next piece of gear."

```text
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
                 ▲
               current
```

The loop continues until `current` becomes `null`.

---

# How Adding to the Front Works

Suppose our camping list starts like this:

```text
HEAD
 │
 ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → null
```

We want to add a new item:

```text
🧥 Rain Jacket
```

### Step 1 — Create the New Node

```text
🧥 Rain Jacket
```

### Step 2 — Point It at the Old Head

```text
🧥 Rain Jacket → 🎒 Backpack → ⛺ Tent → 🔦 Flashlight → null
```

### Step 3 — Move the Head

```text
HEAD
 │
 ▼
🧥 Rain Jacket → 🎒 Backpack → ⛺ Tent → 🔦 Flashlight → null
```

We didn't move any existing nodes.

We only changed the pointers.

That's why adding to the front is:

**O(1)**

---

# How Adding to the Back Works

Suppose we want to add:

```text
🪵 Firewood
```

Our current list:

```text
HEAD
 │
 ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🔥 Fire Starter → null
```

We need to find the last node.

We start at the Head:

```text
🎒 Backpack
     ↓
⛺ Tent
     ↓
🔦 Flashlight
     ↓
🔥 Fire Starter
```

Once we're at the last node:

```text
🔥 Fire Starter → 🪵 Firewood → null
```

Final list:

```text
HEAD
 │
 ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🔥 Fire Starter → 🪵 Firewood → null
```

This takes **O(n)** because we may have to visit every node to find the end.

---

# Arrays vs. Linked Lists

## Array

Imagine storing our camping gear in an array:

```text
Index

   0          1           2             3             4

+----------+----------+-------------+-----------+---------------+
| Backpack |   Tent   |  Flashlight |   Boots   | Fire Starter  |
+----------+----------+-------------+-----------+---------------+
```

We can jump directly to an item.

```javascript
campingGear[2];
```

This gives us:

```text
Flashlight
```

Arrays use **indexes**.

---

# Linked List

Our linked list looks like this:

```text
HEAD
 │
 ▼
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

There are **no indexes**.

To reach the Flashlight, we have to follow the chain:

```text
Backpack
   ↓
Tent
   ↓
Flashlight
```

We cannot simply say:

```javascript
list[2]
```

Instead, we follow the `next` references.

---

# Real-Life Linked List Examples

## 🏕️ Camping Gear

```text
🎒 Backpack → ⛺ Tent → 🔦 Flashlight → 🥾 Boots → 🔥 Fire Starter → null
```

Each node points to the next item.

---

## 🎵 Music Playlist

```text
Song 1 → Song 2 → Song 3 → Song 4 → null
```

Each song can point to the next song.

---

## 🌐 Browser History

A browser can use a **doubly linked list**:

```text
Page A ⇄ Page B ⇄ Page C ⇄ Page D
```

You can move:

- Forward
- Backward

---

## 🚂 Train Cars

```text
Engine → Car → Car → Car → Caboose
```

Each car is connected to another car.

---

## 📍 Navigation Route

```text
🏠 Home
  ↓
⛽ Gas Station
  ↓
🛒 Grocery Store
  ↓
🏫 School
```

Each destination leads to the next destination.

---

# Big-O Summary

| Operation | Big-O | Why? |
|-----------|-------|------|
| Traverse | O(n) | May visit every node |
| Search | O(n) | Must walk through the list |
| Add to Front | O(1) | Only update pointers |
| Add to Back | O(n) | Must find the last node |
| Access by Index | O(n) | Must walk through the list |

> **Important:** If the linked list also stores a `tail` pointer, adding to the back can be **O(1)**.

---

# When Should You Use a Linked List?

Linked Lists can be useful when:

- ✅ You frequently insert new items.
- ✅ You frequently remove items.
- ✅ The size of your data changes often.
- ✅ You move through data one item at a time.
- ✅ You don't need fast random access by index.

Examples:

- Browser history
- Undo/Redo
- Music playlists
- Navigation routes
- Task queues
- Graphs

---

# When Should You Use an Array Instead?

Arrays are usually better when:

- ✅ You need fast access by index.
- ✅ You frequently access random elements.
- ✅ You want to use indexes like `array[2]`.
- ✅ You rarely insert or delete data from the middle.

---

# Key Takeaways

- A **Node** stores a value and a pointer to the next node.
- A **Linked List** is a chain of nodes.
- The **Head** points to the first node.
- Every node points to the next node using `next`.
- The final node points to **`null`**.
- Traversing means following each pointer until you reach `null`.
- Linked Lists have **no indexes**.
- Adding to the front is **O(1)**.
- Adding to the back is **O(n)** if we have to find the last node.
- A `tail` pointer can make adding to the back **O(1)**.
- Linked Lists trade fast access for flexible insertion and deletion.

---

# 🏕️ Mental Model to Remember

Think about your camping gear.

Each piece of gear is a **Node**.

```text
                         HEAD
                           │
                           ▼
                    🎒 Backpack
                           │
                           │ next
                           ▼
                       ⛺ Tent
                           │
                           │ next
                           ▼
                    🔦 Flashlight
                           │
                           │ next
                           ▼
                    🥾 Hiking Boots
                           │
                           │ next
                           ▼
                    🔥 Fire Starter
                           │
                           ▼
                         null
```

The four things to remember are:

```text
┌─────────────────────────────────────────────┐
│                                             │
│  HEAD   = Where do I start?                │
│                                             │
│  VALUE  = What information do I have?      │
│                                             │
│  NEXT   = Where do I go next?              │
│                                             │
│  NULL   = Where does the list end?         │
│                                             │
└─────────────────────────────────────────────┘
```

### 🧠 The One-Sentence Explanation

> **A Linked List is a chain of nodes where each node stores a value and a reference to the next node, starting at the Head and ending at null.**

### 🏕️ Remember It Like a Camping Trip

```text
HEAD
 │
 ▼
🎒 Backpack
 │
 ▼
⛺ Tent
 │
 ▼
🔦 Flashlight
 │
 ▼
🥾 Hiking Boots
 │
 ▼
🔥 Fire Starter
 │
 ▼
null
```

**You start at the Head, follow `next`, and stop when you reach `null`.**

That's a Linked List.
