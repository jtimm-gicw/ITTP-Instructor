/*
=========================================================
🚀 WHAT IS THIS FILE?
=========================================================

This file creates and configures your Express server.

Think of it as the "control center" for your backend.

Its jobs are to:

✅ Create the Express application
✅ Load middleware
✅ Load routes
✅ Handle errors
✅ Start the server

Every request from your frontend eventually comes here.

Example:

React App
     │
     ▼
 server.js
     │
     ▼
 Routes
     │
     ▼
 Database (optional)

=========================================================
*/

'use strict';

// =====================================================
// Import Third-Party Packages
// =====================================================
//
// These are packages installed with npm.
//
// Example:
// npm install express cors dotenv morgan mongoose
//

// Express creates our backend server.
import express from 'express';

// CORS allows our frontend and backend
// to communicate with each other.
//
// Example:
// React (localhost:5173)
//        ↓
// Express (localhost:3001)
import cors from 'cors';

// Morgan is OPTIONAL.
//
// Morgan logs every request that comes
// into your server.
//
// This is very helpful while developing
// because you can see:
//
// GET /books
// POST /books
// DELETE /books/123
//
// If you don't want request logging,
// simply remove Morgan.
import morgan from 'morgan';

// dotenv is used to load environment
// variables from a .env file.
//
// Example:
//
// PORT=3001
// DATABASE_URL=mongodb://...
//
import dotenv from 'dotenv';

dotenv.config();


// =====================================================
// OPTIONAL: Mongoose
// =====================================================
//
// Mongoose is ONLY needed if your project
// uses MongoDB.
//
// It helps us:
//
// • Connect to MongoDB
// • Create schemas
// • Create models
// • Read and write data
//
// If your project does NOT use MongoDB,
// you can completely remove this import.
//
import mongoose from 'mongoose';


// =====================================================
// Import Internal Files
// =====================================================
//
// These are files YOU created.
//

// Handles unexpected server errors (500)
import errorHandler from './middleware/500.js';

// Handles routes that don't exist (404)
import notFound from './middleware/404.js';

// Import our API routes.
import authRouter from './auth/router.js';



// =====================================================
// Create the Express Application
// =====================================================
//
// app represents our entire server.
//
const app = express();



// =====================================================
// OPTIONAL: Connect to MongoDB
// =====================================================
//
// Only use this if your project uses MongoDB.
//
// DATABASE_URL comes from your .env file.
//
// If you are NOT using a database,
// delete this entire section.
//
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(error => console.error(error));



// =====================================================
// Global Middleware
// =====================================================
//
// Middleware runs BEFORE your routes.
//
// Think of middleware as helpers that
// prepare every incoming request.
//

// Allow frontend and backend to communicate.
app.use(cors());

// OPTIONAL
//
// Log every request in the terminal.
//
// Example:
//
// GET /books 200
// POST /books 201
//
app.use(morgan('dev'));

// Read JSON sent from the frontend.
//
// Example:
//
// {
//   "title": "Harry Potter"
// }
//
app.use(express.json());

// Read form data submitted from HTML forms.
app.use(express.urlencoded({ extended: true }));



// =====================================================
// Routes
// =====================================================

// Home route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API 🏁');
});

// All authentication routes begin with /api
//
// Example:
//
// /api/login
// /api/signup
//
app.use('/api', authRouter);



// =====================================================
// Error Handling Middleware
// =====================================================
//
// These should ALWAYS come after your routes.
//

// If no route matches,
// return a 404 Not Found.
app.use(notFound);

// Handle unexpected server errors.
app.use(errorHandler);



// =====================================================
// Export the Server
// =====================================================
//
// Instead of immediately starting the server,
// we export two things:
//
// 1. server
//    The Express app itself.
//
// 2. start()
//    A function that starts listening
//    on a specific port.
//
// Another file (usually index.js)
// imports these and starts the server.
//

export default {
  server: app,

  start(port) {
    app.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
    });
  },
};