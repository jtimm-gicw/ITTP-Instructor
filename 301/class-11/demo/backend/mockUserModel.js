// =====================================
// mockUserModel.js
// =====================================

/*
=========================================================
🧠 This file mimics Mongoose methods:
- User.find()
- User.findById()
- User.create()
- User.findByIdAndUpdate()
- User.findByIdAndDelete()

BUT instead of MongoDB,
we use a simple in-memory array.

👉 This lets us focus on CRUD logic
WITHOUT database setup complexity.
=========================================================
*/

const { v4: uuid } = require("uuid");

// 🌐 In-memory "database"
let users = [
  { id: uuid(), name: "Alice", role: "Student" },
  { id: uuid(), name: "Bob", role: "Instructor" }
];

// ===============================
// MOCK MODEL OBJECT
// ===============================
const User = {
  // READ ALL
  find: async () => {
    return users;
  },

  // READ ONE
  findById: async (id) => {
    return users.find(u => u.id === id);
  },

  // CREATE
  create: async (data) => {
    const newUser = {
      id: uuid(),
      ...data
    };
    users.push(newUser);
    return newUser;
  },

  // UPDATE
  findByIdAndUpdate: async (id, data) => {
    let updatedUser;

    users = users.map(user => {
      if (user.id === id) {
        updatedUser = { ...user, ...data };
        return updatedUser;
      }
      return user;
    });

    return updatedUser;
  },

  // DELETE
  findByIdAndDelete: async (id) => {
    const deleted = users.find(u => u.id === id);
    users = users.filter(u => u.id !== id);
    return deleted;
  }
};

module.exports = User;