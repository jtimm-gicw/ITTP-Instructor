# 🍕 Class 12 — Socket.IO Live Demo Testing Guide

## `test-me.md`

Use this file during the live demo to prove that the **Order Up! Pizzeria** is working.

> **Main idea:** Class 11 sent events inside one Node process. Class 12 sends events between separate Node processes using Socket.IO.

---

# 🎯 What We Are Testing

We want to prove that:

1. The Socket.IO Hub starts.
2. Customer, Kitchen, and Driver can connect.
3. Customer can emit `order-placed`.
4. Hub receives and forwards the order.
5. Kitchen receives the order.
6. Kitchen sends status updates.
7. Driver receives `ready-for-pickup`.
8. Driver sends `out-for-delivery` and `delivered`.
9. Customer receives live status updates.
10. We can demonstrate what happens when an actor is offline.

---

# ⚠️ Before the Demo

From the project root, install the packages:

```bash
npm install
```

If packages have not been added to `package.json`, use:

```bash
npm install socket.io socket.io-client
```

Make sure port `3001` is available.

---

# 🖥️ Terminal Setup

For the clearest live demo, open **5 terminal windows**.

```text
Terminal 1 → Hub
Terminal 2 → Kitchen
Terminal 3 → Driver
Terminal 4 → Customer
Terminal 5 → Test Customer
```

You only need Terminals 1–4 for the normal application.

Terminal 5 is useful for manually sending extra orders.

---

# TEST 1 — Start the Socket.IO Hub

## 🎯 Goal

Prove that the central Socket.IO server starts.

## 👉 Terminal 1

```bash
npm run hub
```

## ✅ Expected

You should see something similar to:

```text
🍕 ORDER UP! PIZZERIA HUB
🌐 http://localhost:3001
🧾 /orders   → Customer + Kitchen
🚦 /dispatch → Kitchen + Driver
```

## 💡 What This Proves

The Socket.IO server is running and waiting for clients.

---

# TEST 2 — Connect the Kitchen

## 🎯 Goal

Prove that a separate Node process can connect to Socket.IO.

## 👉 Terminal 2

```bash
npm run kitchen
```

## ✅ Kitchen Should Show

```text
👨‍🍳 KITCHEN /orders connected: ...
👨‍🍳 KITCHEN /dispatch connected: ...
```

## ✅ Hub Should Also Show Connections

Look at Terminal 1.

You should see connections to:

```text
/orders
/dispatch
```

## 💡 What This Proves

The Kitchen is a Socket.IO **client**.

It connects to two namespaces:

```text
/orders
/dispatch
```

---

# TEST 3 — Connect the Driver

## 🎯 Goal

Prove that the Driver can independently connect to `/dispatch`.

## 👉 Terminal 3

```bash
npm run driver
```

## ✅ Expected

```text
🚗 DRIVER connected: ...
⏳ Waiting for a pizza...
```

Terminal 1 should also show a new `/dispatch` connection.

## 💡 What This Proves

Customer, Kitchen, and Driver do not need to live inside the same Node process.

---

# TEST 4 — Run the Complete Pizza Order

## 🎯 Goal

Demonstrate the complete event chain.

## 👉 Terminal 4

```bash
npm run customer
```

The Customer automatically places Order #101.

---

## 👀 WATCH ALL FOUR TERMINALS

### Customer

You should see something similar to:

```text
👤 CUSTOMER connected: ...
📱 Placing order #101

📱 Order #101: confirmed
📱 Order #101: in-the-oven
📱 Order #101: ready-for-pickup
📱 Order #101: out-for-delivery
📱 Order #101: delivered
🍕 Enjoy your pizza!
```

### Hub

You should see the event travel through the server:

```text
📥 HUB received order #101
🍕 HUB: #101 → confirmed
🍕 HUB: #101 → in-the-oven
🍕 HUB: #101 → ready-for-pickup
📦 HUB: #101 ready for pickup
🚗 HUB: #101 out for delivery
✅ HUB: #101 delivered
```

### Kitchen

You should see:

```text
📥 Received order #101
🍕 Large Pepperoni Pizza, Garlic Knots

👨‍🍳 #101: confirmed
👨‍🍳 #101: in-the-oven
📦 #101 ready for pickup
```

### Driver

You should see:

```text
📦 Picking up order #101
🏠 #101 delivered!
```

---

# 💡 What TEST 4 Proves

Trace the events with students:

```text
Customer
   │
   │ order-placed
   ▼
Hub
   │
   ▼
Kitchen
   │
   │ confirmed
   │ in-the-oven
   │ ready-for-pickup
   ▼
Hub
   │
   ▼
Driver
   │
   │ out-for-delivery
   │ delivered
   ▼
Hub
   │
   ▼
Customer
```

Ask:

> Did Customer directly call a Kitchen function?

**No.**

Ask:

> Did Kitchen directly call a Driver function?

**No.**

They communicate using **events**.

---

# TEST 5 — Manually Send Another Order

## 🎯 Goal

Send more orders without restarting the normal Customer application.

We will use:

```text
demo/test-customer.js
```

## 👉 Terminal 5

Run:

```bash
node demo/test-customer.js
```

You should see:

```text
🧪 TEST CUSTOMER connected
```

Then you will see a prompt.

Enter:

```text
102
```

Press **Enter**.

---

## ✅ Expected

The test client emits:

```text
order-placed
```

with Order #102.

Kitchen should receive:

```text
📥 Received order #102
```

Then the normal lifecycle should begin.

---

# TEST 6 — Send Several Orders

## 🎯 Goal

Show that events can happen more than once.

In Terminal 5, enter:

```text
103
```

Then:

```text
104
```

Then:

```text
105
```

Each number becomes a new order.

## 👀 Watch

Kitchen receives each:

```text
Received order #103
Received order #104
Received order #105
```

Driver eventually receives each ready order.

## 💡 Teaching Point

Socket.IO isn't limited to one event.

The listeners stay active:

```text
socket.on(...)
```

and continue responding whenever that event occurs.

---

# TEST 7 — Demonstrate Driver Going Offline

## 🎯 Goal

Show that the Driver is a separate process.

## 👉 Terminal 3

Stop Driver:

```text
Ctrl + C
```

## 📢 Tell Students

> "Our Driver app just went offline, but our Pizzeria Hub and Kitchen are still running."

Now use Terminal 5 to send another order:

```text
106
```

Watch the Kitchen process the order.

Eventually Kitchen emits:

```text
ready-for-pickup
```

But there is no Driver connected to receive it.

---

# TEST 8 — Restart the Driver

## 👉 Terminal 3

Run:

```bash
npm run driver
```

## ❓ Ask Students

> "Will the Driver automatically receive the old `ready-for-pickup` event?"

In this demo:

**No.**

The Driver reconnects and waits for **new** live events.

## 💡 What This Proves

Our current application does not store every event for later delivery.

This is an important limitation.

---

# TEST 9 — Prove the Driver Still Works After Restart

Use Terminal 5.

Send:

```text
107
```

## ✅ Expected

This time Driver is connected.

You should see:

```text
📦 Picking up order #107
```

followed by:

```text
🏠 #107 delivered!
```

## 💡 Teaching Point

The Driver works again.

But it did not automatically recover Order #106.

That distinction is important.

---

# TEST 10 — The Class 13 Setup

## 🎯 Goal

Create the problem that Class 13 will solve.

Stop Kitchen.

## 👉 Terminal 2

```text
Ctrl + C
```

Now send another order from Terminal 5:

```text
108
```

Hub receives the event.

But Kitchen is offline.

---

## ❓ ASK STUDENTS

> "Where is Order #108?"

Then ask:

> "When Kitchen comes back, how will it know that Order #108 existed?"

Restart Kitchen:

```bash
npm run kitchen
```

In our current Class 12 application, Kitchen does **not automatically receive that missed order**.

---

# 🎯 CLASS 13 REVEAL

Draw:

```text
Customer
   │
   │ order-placed
   ▼
Hub
   │
   ▼
?????
   │
   │ Kitchen is offline
   │
   ▼
WAIT HERE
```

Ask:

> "What could we add so the order waits?"

Reveal:

```text
QUEUE
```

Then:

```text
Customer
   │
   ▼
Hub
   │
   ▼
📬 ORDER QUEUE
   │
   │ FIFO
   ▼
Kitchen
```

---

# FIFO

**FIFO** means:

```text
First In
First Out
```

Example:

```text
Order #108
Order #109
Order #110
```

Order #108 entered first.

Therefore it should be handled first.

This becomes our Class 13 problem.

---

# 🧪 OPTIONAL — Test the HTTP Port with curl

Socket.IO is **not a normal REST API**, so `curl` is not the best way to demonstrate Socket.IO events.

However, you can use `curl` as a quick check that something is listening on port `3001`.

With the Hub running:

```bash
curl -i http://localhost:3001
```

You may receive a basic HTTP response such as a `404`.

## ⚠️ Important

A `404` here does **not necessarily mean Socket.IO is broken**.

We did not create a normal HTTP `/` route.

The important tests are the Socket.IO clients:

```bash
npm run kitchen
npm run driver
npm run customer
```

---

# 🧪 OPTIONAL — Check the Socket.IO Endpoint

With the Hub running, you can also try:

```bash
curl "http://localhost:3001/socket.io/?EIO=4&transport=polling"
```

You should receive Socket.IO/Engine.IO handshake information.

It may look roughly like:

```text
0{"sid":"...","upgrades":["websocket"],...}
```

## 💡 What This Proves

The Socket.IO endpoint is responding.

## 👨‍🏫 Teacher Note

This is useful as a quick technical check, but I would **not make this the main live demo**.

The four Node processes demonstrate the event-driven concept much more clearly.

---

# 🚨 QUICK TROUBLESHOOTING

## Problem: `Cannot find module 'socket.io'`

Run:

```bash
npm install
```

Or:

```bash
npm install socket.io socket.io-client
```

---

## Problem: `ECONNREFUSED`

Make sure Terminal 1 is running:

```bash
npm run hub
```

Remember:

```text
Hub FIRST
Clients SECOND
```

---

## Problem: Port 3001 is already being used

You may see:

```text
EADDRINUSE
```

Check what is using the port:

### macOS / Linux

```bash
lsof -i :3001
```

Then stop the old process if appropriate.

Or return to the terminal where the old Hub is running and use:

```text
Ctrl + C
```

---

## Problem: Customer sends order but Kitchen doesn't receive it

Check that Kitchen was started **before** the Customer:

```bash
npm run kitchen
```

Then trigger another order using:

```bash
node demo/test-customer.js
```

---

# 🎯 BEST LIVE-DEMO ORDER

If time is limited, use this exact sequence:

```text
1. npm run hub
       ↓
2. npm run kitchen
       ↓
3. npm run driver
       ↓
4. npm run customer
       ↓
5. Watch Order #101 complete
       ↓
6. node demo/test-customer.js
       ↓
7. Send Order #102
       ↓
8. Stop Driver
       ↓
9. Send Order #103
       ↓
10. Restart Driver
       ↓
11. Ask:
    "Where did #103 go?"
       ↓
12. Introduce QUEUES
```

---

# 🎤 Questions to Ask During the Demo

### After Customer connects:

> What makes Customer a client?

It connects to the Socket.IO server.

### After `order-placed`:

> Who emitted the event?

Customer.

### When Hub receives it:

> Why do we need the Hub?

It receives and routes events between separate programs.

### When Kitchen receives it:

> Did Customer directly call `handleOrder()`?

No. Kitchen's listener responded to the event.

### When Driver receives the pizza:

> Why does Driver use `/dispatch` instead of `/orders`?

Driver only needs delivery-related communication.

### After stopping Driver:

> What happens to an event if nobody is listening when it happens?

Our current application does not save it for the Driver.

### Final question:

> How could we prevent important orders from disappearing when a service is offline?

**Store them in a queue.**

---

# 🏁 FINAL PROOF OF LIFE

If these commands work:

```bash
npm run hub
npm run kitchen
npm run driver
npm run customer
```

and you can trace:

```text
order-placed
     ↓
confirmed
     ↓
in-the-oven
     ↓
ready-for-pickup
     ↓
out-for-delivery
     ↓
delivered
```

then the main Class 12 Socket.IO demo is working correctly.

The most important takeaway is:

```text
CLASS 11
EventEmitter
Events inside one process

        ↓

CLASS 12
Socket.IO
Events between connected processes

        ↓

CLASS 13
Queue
Save work until it can be handled
```
