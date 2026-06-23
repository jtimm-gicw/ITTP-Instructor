// ===============================
// server.js (BACKEND ENTRY FILE)
// ===============================

/*
=========================================================
📚 STEP-BY-STEP INSTALLATION (READ THIS FIRST IN CLASS)
=========================================================

1️⃣ Initialize project
----------------------
npm init -y

2️⃣ Install dependencies
------------------------
npm install express cors uuid

(Teaching Note: Normally we would also install mongoose:
   npm install mongoose
But in this lesson we are SIMULATING Mongoose behavior
so students understand CRUD first before database complexity.)

3️⃣ OPTIONAL (REAL WORLD SETUP - NOT USED TODAY)
------------------------------------------------
If using MongoDB locally:
- Install MongoDB Community Edition
- Start MongoDB service:
    macOS: brew services start mongodb-community
    windows: net start MongoDB
- Default connection:
    mongodb://127.0.0.1:27017

4️⃣ Run server
--------------
node server.js
OR
npx nodemon server.js

=========================================================
🎯 GOAL OF THIS FILE
=========================================================
We are building a REST API with CRUD routes:
- GET    /api/users        → Read all users
- GET    /api/users/:id    → Read single user
- POST   /api/users        → Create user
- PUT    /api/users/:id    → Update user
- DELETE /api/users/:id    → Delete user

BUT instead of MongoDB + Mongoose,
we use a MOCK MODEL that behaves the same way.
=========================================================
*/

const express = require("express");
const cors = require("cors");

// 🧠 Our fake "Mongoose Model"
const User = require("./mockUserModel");

const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// GET ALL USERS
// ===============================
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ===============================
// GET USER BY ID
// ===============================
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ===============================
// CREATE USER
// ===============================
app.post("/api/users", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// ===============================
// UPDATE USER
// ===============================
app.put("/api/users/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json(updated);
});

// ===============================
// DELETE USER
// ===============================
app.delete("/api/users/:id", async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

// ===============================
// START SERVER
// ===============================
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});