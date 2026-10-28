# Technical Whiteboard Mock Interviews — Interviewer Answer Key

**Five medium-difficulty JavaScript challenges**  
**Use only with interviewers.** Each answer below is **one valid approach**, not the only acceptable solution. Reward a correct alternative if it meets the prompt's constraints.

## Interview Format (30 Minutes)

| Time | Candidate activity | Interviewer looks for |
|---|---|---|
| 0–5 min | Clarify problem, inputs, outputs | Correct understanding; useful questions |
| 5–10 min | Examples, edge cases, diagram | Concrete mental model |
| 10–20 min | Algorithm, pseudocode, code | Correct data-structure operations |
| 20–25 min | Trace and test | Correctness, edge-case handling |
| 25–30 min | Big-O and trade-offs | Clear explanation of performance |

## Scoring Rubric (20 Points per Interview)

Score each area **0–4**: 0 = not demonstrated; 1 = major gaps; 2 = partial; 3 = mostly correct; 4 = confident and correct.

| Criterion | Points |
|---|---:|
| Problem understanding and clarifying questions | /4 |
| Test cases, edge cases, and diagram | /4 |
| Algorithm, pseudocode, and reasoning | /4 |
| Working code or accurate whiteboard implementation | /4 |
| Walkthrough, communication, Big-O explanation | /4 |
| **Total** | **/20** |

**Suggested feedback bands (not automatic pass/fail):** 18–20 excellent; 15–17 solid; 11–14 developing; 0–10 needs more practice.

---

## Answer 1 — Find the K-th Song from the End

**Expected value:** `k = 0` is the final node; invalid or out-of-range `k` returns `null`.

### Algorithm in Plain Language

1. Reject invalid `k` values.
2. Place two pointers, `ahead` and `behind`, at the head.
3. Move `ahead` **k + 1 steps** forward. If it hits the end too early, return `null`.
4. Move both pointers together until `ahead` becomes `null`.
5. `behind` now points to the answer. Return its value.

### Possible JavaScript Answer

```js
function kthFromEnd(head, k) {
  if (!Number.isInteger(k) || k < 0) return null;

  let ahead = head;
  let behind = head;

  for (let steps = 0; steps <= k; steps++) {
    if (ahead === null) return null;
    ahead = ahead.next;
  }

  while (ahead !== null) {
    ahead = ahead.next;
    behind = behind.next;
  }

  return behind.value;
}
```

### Example Trace

```text
HEAD → Intro → Verse → Chorus → Bridge → Outro → null
k = 2

Move ahead 3 steps: ahead = Bridge; behind = Intro.
Then move both until ahead = null:
  ahead = Outro; behind = Verse
  ahead = null;  behind = Chorus
Return "Chorus".
```

### Test Cases

| Input | Expected |
|---|---|
| `[Intro, Verse, Chorus, Bridge, Outro]`, `k=0` | `"Outro"` |
| Same list, `k=2` | `"Chorus"` |
| Same list, `k=4` | `"Intro"` |
| Same list, `k=5` | `null` |
| `head=null`, `k=0` | `null` |
| Any list, `k=-1` or `k=1.5` | `null` |

**Big-O:** **O(n) time**, **O(1) extra space**. The two pointers each move forward at most `n` times; no extra array is created.

**Look for:** Correct zero-based counting; handling empty lists; never dereferencing `null`; no mutation; one-pass spacing of two pointers. A two-pass O(n)/O(1) solution may earn partial credit because the one-pass approach is the stretch goal.

---

## Answer 2 — Zip Two Service-Ticket Lists

**Expected sequence:** Alternate nodes from list 1 and list 2, attaching leftovers; do not lose or copy nodes.

### Algorithm in Plain Language

1. If either list is empty, return the other list.
2. Save both current nodes' `next` pointers **before** changing links.
3. Point the current node from list 1 to the current node from list 2.
4. If list 1 has another node, link the list 2 node to it; otherwise attach the rest of list 2.
5. Advance to the saved next nodes and repeat.

### Possible JavaScript Answer

```js
function zipLists(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  let first = head1;
  let second = head2;

  while (first !== null && second !== null) {
    const nextFirst = first.next;
    const nextSecond = second.next;

    first.next = second;

    if (nextFirst === null) {
      second.next = nextSecond; // list 2 may have leftover nodes
      break;
    }

    second.next = nextFirst;
    first = nextFirst;
    second = nextSecond;
  }

  return head1;
}
```

### Example Trace

```text
Before:
A → B → C → null
1 → 2 → 3 → 4 → null

After linking A and 1: A → 1 → B → C
After linking B and 2: A → 1 → B → 2 → C
After linking C and 3: A → 1 → B → 2 → C → 3 → 4 → null
```

### Test Cases

| List 1 | List 2 | Expected result |
|---|---|---|
| `A → B → C` | `1 → 2 → 3 → 4` | `A → 1 → B → 2 → C → 3 → 4` |
| `A → B → C → D` | `1 → 2` | `A → 1 → B → 2 → C → D` |
| `A` | `1 → 2` | `A → 1 → 2` |
| `null` | `1 → 2` | `1 → 2` |
| `A → B` | `null` | `A → B` |
| `null` | `null` | `null` |

**Big-O:** **O(n + m) time** as an upper bound, where `n` and `m` are the list lengths; more precisely **O(min(n,m) + 1)** node-linking work. **O(1) extra space** because links are changed in place.

**Look for:** Both next pointers saved before mutation; alternation and leftover preservation; no cycles; no accidentally lost nodes. The original lists are intentionally mutated into one merged list.

---

## Answer 3 — Build a Ticket Queue Using Two Stacks

**Expected behavior:** `enqueue` adds at the back; `dequeue` returns the oldest item; empty returns `null`.

### Algorithm in Plain Language

1. Keep an `inStack` for newly added tickets and an `outStack` for tickets ready to leave.
2. Enqueue by pushing onto `inStack`.
3. On dequeue, if `outStack` is empty, pop **all** items from `inStack` and push them onto `outStack` (this reverses the order).
4. Pop from `outStack` to return the oldest item, or return `null` if both stacks are empty.

### Possible JavaScript Answer

```js
class PseudoQueue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    if (this.outStack.length === 0) return null;
    return this.outStack.pop();
  }
}
```

### Example Trace

```text
enqueue A, B, C:
  inStack = [A, B, C]   outStack = []

dequeue (transfer, then pop):
  inStack = []          outStack = [C, B, A]
  returns A             outStack = [C, B]

enqueue D:
  inStack = [D]         outStack = [C, B]

dequeue returns B, then C; next dequeue transfers D and returns D.
```

### Test Cases

| Operations | Expected `dequeue()` results |
|---|---|
| `enqueue(A), enqueue(B), enqueue(C), dequeue(), dequeue(), dequeue()` | `A, B, C` |
| `enqueue(A), dequeue(), enqueue(B), dequeue()` | `A, B` |
| `dequeue()` on empty | `null` |
| `enqueue(A), enqueue(B), dequeue(), enqueue(C), dequeue(), dequeue()` | `A, B, C` |

**Big-O:** `enqueue()` is **O(1)**. `dequeue()` is **O(n) worst case** on a transfer and **O(1) amortized**, because each item is moved between stacks at most once before removal. **O(n) space** for `n` queued items.

**Look for:** Only push/pop on the two arrays; do not transfer when `outStack` already has items; strict FIFO order; empty case. Moving on every dequeue can be correct but inefficient or incorrect if stack ordering is mishandled.

---

## Answer 4 — Validate Brackets in a Message

**Expected behavior:** Matching bracket *types and nesting*; non-bracket characters are ignored.

### Algorithm in Plain Language

1. Use a stack to remember opening brackets.
2. Push `(`, `[`, and `{` when encountered.
3. When you see a closing bracket, pop the latest opening bracket and compare types; return `false` if they do not match.
4. At the end, return `true` only if the stack is empty.

### Possible JavaScript Answer

```js
function validateBrackets(text) {
  const stack = [];
  const matchingOpening = { ')': '(', ']': '[', '}': '{' };

  for (const char of text) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.pop() !== matchingOpening[char]) return false;
    }
  }

  return stack.length === 0;
}
```

### Example Trace

```text
Input: "{[()]}"
Read { → stack: [{]
Read [ → stack: [{, []
Read ( → stack: [{, [, (]
Read ) → pop ( (match)
Read ] → pop [ (match)
Read } → pop { (match)
Empty stack → true
```

### Test Cases

| Input | Expected |
|---|---|
| `"{[()]}"` | `true` |
| `"function(x[0])"` | `true` |
| `"{[(])}"` | `false` |
| `"(("` | `false` |
| `"hello)"` | `false` |
| `"text without brackets"` | `true` |
| `""` | `true` |

**Big-O:** **O(n) time** to scan the string, **O(n) extra space** in the worst case for many opening brackets.

**Look for:** Last-in-first-out matching and correct nesting; detecting extra closing brackets; detecting leftover opening brackets. Counting matching quantities alone is insufficient (e.g. `"([)]"`).

---

## Answer 5 — Scan Warehouse Locations by Level

**Expected order:** Root, then level 1 left to right, then level 2 left to right, etc.

### Algorithm in Plain Language

1. If the root is `null`, return an empty array.
2. Put the root in a queue.
3. While nodes remain in the queue, take the next waiting node, add its value to the result, then enqueue its left and right children (if present).
4. Return the list of visited values.

### Possible JavaScript Answer

```js
function breadthFirst(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];
  let front = 0;

  while (front < queue.length) {
    const node = queue[front];
    front++;

    result.push(node.value);
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return result;
}
```

### Example Trace

```text
         10
        /  \
       6    15
      / \     \
     3   8     20

Queue/visit order:
visit 10 → enqueue 6, 15
visit 6  → enqueue 3, 8
visit 15 → enqueue 20
visit 3, visit 8, visit 20

Result: [10, 6, 15, 3, 8, 20]
```

### Test Cases

| Tree | Expected |
|---|---|
| Example tree | `[10, 6, 15, 3, 8, 20]` |
| Empty (`null`) | `[]` |
| Single node `7` | `[7]` |
| Chain `1 → right 2 → right 3` | `[1, 2, 3]` |
| Root `1`, left `2`, no right | `[1, 2]` |

**Big-O:** **O(n) time** for `n` nodes. **O(n) extra space** in the worst case for the queue plus returned values. A `front` index avoids JavaScript's potentially costly `Array.shift()` on each dequeue.

**Look for:** FIFO processing; left child before right child; ignoring `null` children; visiting each node once. A depth-first answer does not satisfy the task.

---

## Feedback Notes to Give the Candidate

**Strengths demonstrated:** _____________________________________________

**One improvement to make:** _____________________________________________

**Follow-up question:** _________________________________________________

**Candidate score:** ______ / 20

**Interviewer:** ________________________  **Date:** ______________________
