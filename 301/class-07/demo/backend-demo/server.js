'use strict';

// =========================
// IMPORT PACKAGES
// =========================

// Express creates the server
const express = require('express');

// CORS allows frontend/backend communication
const cors = require('cors');

// dotenv loads environment variables
require('dotenv').config();


// =========================
// CREATE EXPRESS APP
// =========================

const app = express();


// =========================
// MIDDLEWARE
// =========================

// Allow frontend requests
app.use(cors());

// Allows server to read JSON
app.use(express.json());


// =========================
// PORT
// =========================

// Use environment PORT if available
// Otherwise use 3001
const PORT = process.env.PORT || 3001;


// =========================
// TEST ROUTE
// =========================

// Basic route to confirm server works
app.get('/', (request, response) => {

  response.send('Server is working!');

});


// =========================
// WEATHER ROUTE
// =========================

// This route will eventually connect
// to the weather API

app.get('/weather', async (request, response) => {

  // Get city from query string
  // Example:
  // /weather?city=Seattle

  const city = request.query.city;


  // Check if city exists
  if (!city) {

    return response.status(400).send({
      error: 'City is required.',
    });
  }


  try {

    // =========================
    // BUILD API URL
    // =========================

    // API key from .env
    const apiKey = process.env.WEATHER_API_KEY;

    // OpenWeather URL
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


    // =========================
    // FETCH WEATHER DATA
    // =========================

    // Node.js now supports fetch()
    const weatherResponse = await fetch(url);

    // Convert response to JSON
    const weatherData = await weatherResponse.json();


    // =========================
    // HANDLE API ERRORS
    // =========================

    if (weatherData.cod !== 200) {

      return response.status(weatherData.cod).send({
        error: weatherData.message,
      });
    }


    // =========================
    // SEND DATA TO FRONTEND
    // =========================

    response.send(weatherData);

  } catch (error) {

    // Server error handling
    response.status(500).send({
      error: 'Something went wrong on the server.',
    });
  }
});


// =========================
// START SERVER
// =========================

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});