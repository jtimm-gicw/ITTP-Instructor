# Technical Whiteboard Mock Interviews — Student Question Cards

**Level:** Medium  
**Language:** JavaScript (or pseudocode first)  
**Time:** 30 minutes per interview  
**Instructions:** Choose **one** challenge per interview. Do not look at the interviewer answer key until the interview is finished.

## Suggested 30-Minute Interview Structure

| Time | What the candidate should do |
|---|---|
| 0–5 minutes | Restate the problem, ask clarifying questions, and identify inputs and outputs. |
| 5–10 minutes | Draw the data structure; give simple test cases and edge cases. |
| 10–20 minutes | Explain an algorithm, write pseudocode, then implement it. |
| 20–25 minutes | Walk through the solution with sample inputs and test edge cases. |
| 25–30 minutes | Explain Big-O time/space complexity and discuss improvements. |

> **Candidate reminder:** Explain your thinking aloud. The interviewer may ask you to clarify assumptions or trace your solution.

---

## Challenge 1 — Find the K-th Song from the End

**Topic:** Singly linked list · Two-pointer technique

### Problem Domain

A music app keeps a playback history as a **singly linked list**. Each node stores one song title and a pointer to the next song. The team wants to find a song by counting backward from the **end** of that history without copying the songs into an array.

### Task

Write a function named `kthFromEnd(head, k)` that:

- Takes the first node (`head`) of a singly linked list and a nonnegative integer `k`.
- Returns the **value** stored `k` positions from the end, where `k = 0` means the last node.
- Returns `null` for an empty list, a negative/non-integer `k`, or a `k` larger than the list allows.
- Does **not** change the list, create an array, or use a stored list length.
- **Stretch requirement:** Find the answer in one traversal using two pointers.

**Node shape:** `{ value, next }`.

### Example

```text
HEAD → Intro → Verse → Chorus → Bridge → Outro → null

k = 0  → "Outro"
k = 2  → "Chorus"
k = 4  → "Intro"
k = 5  → null
```

### Candidate Discussion Prompts

1. How can two pointers help when we cannot walk backward in a singly linked list?
2. What happens if `head` is `null` or `k` is too large?
3. What are your time and extra-space costs?

---

## Challenge 2 — Zip Two Service-Ticket Lists

**Topic:** Singly linked lists · Pointer reassignment

### Problem Domain

A help desk has two linked lists of open tickets: **priority** tickets and **regular** tickets. To prevent one group from being ignored, the help desk wants to alternate them: priority, regular, priority, regular, and so on. The order of tickets **within each original list** must stay the same.

### Task

Write a function named `zipLists(head1, head2)` that:

- Takes the heads of two singly linked lists.
- Returns the head of **one alternating list**, beginning with a node from `head1`.
- Keeps any leftover nodes at the end if one list is longer.
- Reuses the **existing nodes** by updating `next` references; do not create replacement data nodes or copy values into an array.
- Handles either list being empty.

**Assume:** The lists do not already share nodes. Node shape: `{ value, next }`.

### Example

```text
List 1: A → B → C → null
List 2: 1 → 2 → 3 → 4 → null

Result: A → 1 → B → 2 → C → 3 → 4 → null
```

### Candidate Discussion Prompts

1. What `next` references must be saved before connecting nodes?
2. How do you keep the remaining nodes when the lists have different lengths?
3. Can you solve this using constant additional space?

---

## Challenge 3 — Build a Ticket Queue Using Two Stacks

**Topic:** Stacks and queues · FIFO using LIFO operations

### Problem Domain

A customer-service kiosk must serve customers in the order they arrive (**first in, first out**). However, the system only gives you two **stacks**, which remove the most recently added item first (**last in, first out**).

### Task

Create a class named `PseudoQueue` with:

- `enqueue(value)`: add a ticket to the back of the queue.
- `dequeue()`: remove and **return** the oldest ticket.
- `dequeue()` returns `null` when the queue is empty.
- Use exactly **two stack arrays** for storage. You may use array `push()` and `pop()` only to add or remove stack elements; do **not** use `shift()` or `unshift()`.

### Example

```text
queue.enqueue("A")
queue.enqueue("B")
queue.enqueue("C")
queue.dequeue()   → "A"
queue.enqueue("D")
queue.dequeue()   → "B"
queue.dequeue()   → "C"
queue.dequeue()   → "D"
queue.dequeue()   → null
```

### Candidate Discussion Prompts

1. How can moving elements from one stack to the other reverse their order?
2. Should all elements be transferred on every dequeue? Why or why not?
3. What are the worst-case and amortized time costs of `dequeue()`?

---

## Challenge 4 — Validate Brackets in a Message

**Topic:** Stack · Matching and nesting brackets

### Problem Domain

A lightweight code editor checks whether the brackets in a user-submitted message are valid. A message may contain other characters, such as letters, spaces, or digits, but only the brackets need to be checked.

### Task

Write a function named `validateBrackets(text)` that:

- Returns `true` when all `()`, `[]`, and `{}` brackets are correctly paired and properly nested.
- Returns `false` for missing, extra, incorrectly ordered, or mismatched brackets.
- Ignores characters that are not one of the six bracket characters.
- Treats an empty string, or a string with no brackets, as valid.

### Examples

```text
"{[()]}"        → true
"function(x[0])" → true
"{[(])}"        → false
"hello)"        → false
```

### Candidate Discussion Prompts

1. Why is counting the total number of opening and closing brackets insufficient?
2. Which bracket should be checked first when a closing bracket appears?
3. What happens if the string ends while the stack still contains brackets?

---

## Challenge 5 — Scan Warehouse Locations by Level

**Topic:** Binary tree · Breadth-first traversal

### Problem Domain

A warehouse stores locations in a **binary tree**. Management wants to print a list of locations from the top level down, visiting each level from **left to right**. The warehouse's existing system only supplies the root node.

### Task

Write a function named `breadthFirst(root)` that:

- Takes the root node of a binary tree.
- Returns an array containing node values in **breadth-first (level-order)** order.
- Processes each level left to right.
- Returns `[]` for an empty tree.
- Does **not** use recursion. Use a queue to keep track of nodes waiting to be visited.

**Node shape:** `{ value, left, right }`, where a missing child is `null`.

### Example

```text
         10
        /  \
       6    15
      / \     \
     3   8     20

Result: [10, 6, 15, 3, 8, 20]
```

### Candidate Discussion Prompts

1. Why does a queue fit this traversal better than a stack?
2. What happens with a tree that contains only one node or is missing some children?
3. What are the time and extra-space costs?

---

## Candidate Checklist

- [ ] I restated the problem in my own words.
- [ ] I identified inputs, outputs, and assumptions.
- [ ] I drew the example or a diagram.
- [ ] I explained an algorithm before coding.
- [ ] I wrote a working solution or clear pseudocode.
- [ ] I checked both normal cases and edge cases.
- [ ] I explained Big-O time and space complexity.
