'use strict';

// =====================================================
// Imports
// =====================================================

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import errorHandler from './middleware/500.js';
import notFound from './middleware/404.js';
import authRouter from './auth/router.js';

dotenv.config();

// =====================================================
// Initialize Express
// =====================================================

const app = express();

// =====================================================
// Database Connection (Optional)
// =====================================================

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => console.error(error));

// =====================================================
// Global Middleware
// =====================================================

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================================================
// Routes
// =====================================================

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API 🏁');
});

app.use('/api', authRouter);

// =====================================================
// Error Handling Middleware
// =====================================================

app.use(notFound);
app.use(errorHandler);

// =====================================================
// Export Server
// =====================================================

export default {
  server: app,

  start(port) {
    app.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
    });
  },
};