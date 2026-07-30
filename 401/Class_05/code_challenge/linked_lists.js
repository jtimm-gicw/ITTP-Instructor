'use strict';

/*
=========================================================
LINKED LISTS - STUDENT VERSION
=========================================================

A Linked List is a collection of Nodes connected together.

Think of it like a treasure hunt:

Head
 ↓
Fire → Umbrella → Water → Phone → null

Each node knows TWO things:

1. The value it stores
2. Where the NEXT node is located

Unlike arrays, linked lists do NOT use indexes.

There is no:

list[0]
list[1]
list[2]

Instead, we start at the beginning (called the Head)
and follow each node until we reach the end (null).

=========================================================
*/


/*
=========================================================
NODE CLASS
=========================================================

A Node is a single "box" in our linked list.

Every node stores:

1. value
2. next

Visual:

+------------------+
| value = Fire     |
| next  = ???      |
+------------------+

The "next" property points to another Node.

If there isn't another node...

next = null

which means:

"I'm the last node."
*/

class Node {
  constructor(value) {

    // Store the data inside this node
    this.value = value;

    // By default, this node does not point anywhere.
    // We'll connect it later.
    this.next = null;

    // Doubly linked lists also have:
    // this.previous = null;
  }
}


/*
=========================================================
LINKED LIST CLASS
=========================================================

A Linked List only needs ONE piece of information:

Where is the FIRST node?

We call that node the HEAD.

Empty list:

Head
 ↓
null

Once nodes are connected, the head lets us
reach every other node.
*/

class LinkedList {
  constructor() {

    // Empty list
    this.head = null;
  }
}


/*
=========================================================
BUILDING OUR LINKED LIST
=========================================================

Step 1

Create an empty linked list.

Head
 ↓
null
*/

let list = new LinkedList();


/*
=========================================================
ADDING THE FIRST NODE
=========================================================

Head
 ↓
Fire → null

The head now points to the first node.
*/

list.head = new Node('fire');


/*
=========================================================
ADDING THE SECOND NODE
=========================================================

Fire now points to Umbrella.

Head
 ↓
Fire → Umbrella → null

Notice:

Fire.next now stores the Umbrella node.
*/

list.head.next = new Node('umbrella');


/*
=========================================================
ADDING MORE NODES
=========================================================

Each ".next" creates another link in the chain.

Head

 ↓

Fire
  ↓
Umbrella
  ↓
Water
  ↓
Navigation
  ↓
De-salvinizer
  ↓
Potatoes
  ↓
Fishing Line
  ↓
Groceries
  ↓
Phone
  ↓
Sail
  ↓
null
*/

list.head.next.next = new Node('water');
list.head.next.next.next = new Node('navigation');
list.head.next.next.next.next = new Node('De-salvinizer');
list.head.next.next.next.next.next = new Node('Potatoes');
list.head.next.next.next.next.next.next = new Node('fishing line with hook');
list.head.next.next.next.next.next.next.next = new Node('groceries');
list.head.next.next.next.next.next.next.next.next = new Node('phone');
list.head.next.next.next.next.next.next.next.next.next = new Node('sail');

// Uncomment this if you want to see the entire object.
// console.log(JSON.stringify(list, null, 2));



/*
=========================================================
TRAVERSE
=========================================================

Traversal means:

"Visit every node in the list."

Since linked lists do NOT have indexes,
we MUST start at the head.

Imagine climbing monkey bars.

Head
 ↓

Fire → Water → Phone → Sail

Start here.

↓

Fire

Move to the next bar.

↓

Water

Move again.

↓

Phone

Eventually...

↓

null

We're done.

---------------------------------------------------------

Big O

Time  : O(n)

We might have to visit every node.

Space : O(1)

We only create ONE variable called current.
*/

function traverse(list) {

  // Always begin at the head.
  let current = list.head;

  // Keep going until we run out of nodes.
  while (current !== null) {

    // Print the current node's value.
    console.log(current.value);

    /*
    Move forward ONE node.

    Think of grabbing the next knot
    on a rope.

    Fire → Water → Phone

    current becomes Water

    then Phone

    then null
    */

    current = current.next;
  }
}



/*
=========================================================
ADD TO FRONT
=========================================================

Adding to the front is VERY FAST.

Original

Head
 ↓

Fire → Water → Phone

Create:

Medkit

Connect it.

Medkit → Fire → Water → Phone

Move the Head.

Head
 ↓

Medkit → Fire → Water → Phone

Done!

Notice:

We never touched the rest of the list.

---------------------------------------------------------

Big O

Time : O(1)

Only two pointers change.

No searching required.
*/

function addToFront(value, list) {

  // Create our new node.
  let newHead = new Node(value);

  /*
  Connect the new node to the
  current head.

  newHead

     ↓

  Fire → Water → Phone
  */

  newHead.next = list.head;

  /*
  Move the head pointer.

  The new node officially becomes
  the first node.
  */

  list.head = newHead;
}



/*
=========================================================
ADD TO BACK
=========================================================

Unlike adding to the front...

We DON'T know where the last node is.

We must WALK there.

Fire
 ↓
Water
 ↓
Phone
 ↓
Sail

Eventually...

current.next == null

means

"I'm standing on the last node."

Then we attach the new node.

---------------------------------------------------------

Big O

Time : O(n)

Worst case:

We visit every node.
*/

function addToBack(value, list) {

  // Start at the beginning.
  let current = list.head;

  /*
  Keep walking until we find the tail.

  The tail is the LAST node.

  How do we know?

  current.next === null
  */

  while (current.next !== null) {

    // Move one node forward.
    current = current.next;
  }

  /*
  current is now sitting on
  the last node.

  Create a new node.
  */

  let newTail = new Node(value);

  /*
  Connect the old tail
  to the new tail.

  Old Tail → New Tail
  */

  current.next = newTail;
}



/*
=========================================================
TESTING OUR FUNCTIONS
=========================================================

Current List

Fire → Umbrella → Water ...

Step 1

Add "motor" to the front.

motor → Fire → Umbrella ...

Step 2

Add "medkit" to the front.

medkit → motor → Fire ...

Step 3

Add "anchor" to the back.

... Phone → Sail → Anchor

Step 4

Print every value.
*/

addToFront('motor', list);
addToFront('medkit', list);
addToBack('anchor', list);

console.log('\n===== Traversing Linked List =====\n');

traverse(list);



/*
=========================================================
FINAL LINKED LIST

Head
 ↓

Medkit
   ↓
Motor
   ↓
Fire
   ↓
Umbrella
   ↓
Water
   ↓
Navigation
   ↓
De-salvinizer
   ↓
Potatoes
   ↓
Fishing Line
   ↓
Groceries
   ↓
Phone
   ↓
Sail
   ↓
Anchor
   ↓
null

=========================================================

KEY IDEAS TO REMEMBER

✓ A Node stores a value and a pointer.

✓ A Linked List stores only the Head.

✓ Every node points to the next node.

✓ We always start at the Head.

✓ We stop when we reach null.

✓ Linked Lists have NO indexes.

✓ Adding to the front is O(1).

✓ Adding to the back is O(n)
(unless we also keep track of the tail).

=========================================================
*/