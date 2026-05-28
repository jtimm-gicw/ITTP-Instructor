# Lab: City Explorer API (Weather & Errors)

## 💡 The Big Picture (Plain English Summary)

We are building a custom backend assistant (an API server) that takes a city name from our React frontend, looks up that city's weather inside a local file (`weather.json`), and sends back a clean list of dates and weather descriptions. This lets our app show weather forecasts without having to connect to a live, expensive third-party weather service just yet.

---

## 🛠️ Prerequisites & Setup

- [ ] Create a new repository on GitHub named `city-explorer-api` (Check the box to initialize with a `README.md`).
- [ ] Clone the repository to your local computer and open it in VS Code.
- [ ] Create and switch to a new Git feature branch (e.g., `git checkout -b dev-setup`).
- [ ] Initialize Node.js in your project directory:

  ```bash
  npm init -y
  ```

- [ ] Install the required code packages:

npm install express dotenv cors

- [ ] Manually create the following empty files and folders in your project root:
  
  - server.js (Your main server file)
  - .env (For private configuration variables)
  - .gitignore (To hide files from GitHub)
  - .eslintrc.json (For code formatting/linting rules)

A folder named data, and inside it, a file named weather.json

- [ ] Copy the raw weather data provided by your instructor and paste it directly into your new data/weather.json file.

- [ ] Open .env and add your port configuration:

### *Code snippet*

PORT=3001

- [ ] Open .gitignore and make sure it includes .env and node_modules/ so your private files aren't published online.

🚀 ****Step-by-Step Task List****
1️⃣ Milestone: Build the Barebones Server

- [ ] In server.js, import express, cors, and dotenv.

```js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

```

- [ ] Add a basic listener at the bottom of server.js so the server can turn on:

```js


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
```

- [ ] How to test it: Run node server.js in your terminal. You should see your console log message. Press Ctrl + C to turn it off.

2️⃣ Milestone: Read the Weather Data

- [ ] Use a require statement at the top of your server.js file to import the weather.json file into a variable.

```js

const weatherData = require('./data/weather.json');
```

- [ ] How to test it: Add a temporary console.log(weatherData) right below it, run your server, and make sure you see the big block of weather data appear in your terminal. Delete the log once it works.

3️⃣ Milestone: Create the Weather Route (/weather)

- [ ] Create a GET route listener for /weather.

- [ ] Inside the route, grab the incoming web requests' specific queries: lat, lon, and searchQuery.

```js


app.get('/weather', (request, response) => {
  const { lat, lon, searchQuery } = request.query;
  // Your finding logic goes here next
});
```

- [ ] Use JavaScript's .find() tool to search your imported weather.json array for an object where the city name matches the incoming searchQuery.

- [ ] If no matching city is found in your data file, trigger an error response (see Milestone 5).

4️⃣ Milestone: Format the Data with a Class

- [ ] Outside of your routes, create a standard blueprint (class) named Forecast that trims down raw weather objects to only include date and description.

```js


class Forecast {
  constructor(dayObj) {
    this.date = dayObj.valid_date;
    this.description = `Low of ${dayObj.low_temp}, high of ${dayObj.max_temp} with ${dayObj.weather.description}`;
  }
}
```

- [ ] Back inside your /weather route, use .map() on the found city's data array to turn every forecast day into a clean, new instance of your Forecast class.

- [ ] Send that newly mapped, clean array back to the web browser using response.send().

- [ ] How to test it: Open your browser and visit <http://localhost:3001/weather?searchQuery=Seattle>. You should see a clean list of dates and descriptions on your screen.

5️⃣ Milestone: Handle Errors Gracefully

- [ ] Create a catch-all error handling function at the bottom of your server.js file (right above app.listen).

```js


app.use((error, request, response, next) => {
  response.status(500).send({ error: "Something went wrong on our server." });
});
```

- [ ] How to test it: Try searching for a city your file doesn't have, like <http://localhost:3001/weather?searchQuery=Atlantis>. Your browser should display the error message instead of crashing the server.

6️⃣ Milestone: Connect the React Frontend

- [ ] In your React application, update your Axios/Fetch search function. As soon as you successfully get a location back from your main location API, make a secondary request to your local server:

```js


const weatherUrl = `http://localhost:3001/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`;
```

- [ ] Create a new component named Weather.jsx that maps through this incoming array and displays each day nicely (e.g., using a Bootstrap Card or ListGroup).

- [ ] Add a try/catch block around your frontend network request. If the server sends back an error, catch it and save it to a state variable (like error) to display an alert message to your user.

- ⚠️ Watch Out For (Common Pitfalls)
Capitalization Issues: JavaScript is case-sensitive! If your user searches for "seattle" (lowercase) but your JSON file spells it "Seattle" (capitalized), .find() will fail. Use .toLowerCase() on both strings when comparing them to make your code bulletproof.

Forgot CORS: If you forget to include and use app.use(cors()) at the top of your backend server, your React app will throw a scary security error in the browser console and refuse to read the data.

Mismatched Variable Names: Double-check what the JSON data calls its keys versus what your assignment sample expects. For example, your JSON file might say valid_date, but your frontend is looking for date. The Forecast class is exactly where you fix this translation mismatch!
