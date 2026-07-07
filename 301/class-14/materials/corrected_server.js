'use strict'

// ======================================================
// Debugging Lab
// This server.js file contains MANY intentional mistakes.
// Your job is to find and fix them.
// ======================================================


// ======================
// Imports
// ======================

// Mistake #1
// Missing the express import.
const cors = require('cors')

// Mistake #2
// Typo in the package name.
const morgon = require('morgan')


// ======================
// Create Express App
// ======================

// Mistake #3
// express has never been imported.
const app = express()

// Port
const PORT = 3001


// ======================
// Middleware
// ======================

// Mistake #4
// Missing parentheses after cors
app.use(cors)

// Mistake #5
// Incorrect variable name
app.use(morgan('dev'))

// Mistake #6
// express.json is missing ()
app.use(express.json)


// ======================
// Routes
// ======================

// Home Route
// Mistake #7
// Wrong HTTP method spelling.
app.got('/', (req, res) => {

  // Mistake #8
  // send() misspelled.
  res.sned('Welcome to the API!')

})



// Weather Route

// Mistake #9
// Missing slash before weather.
app.get('weather', (req, res) => {

  res.send({
    city: "Seattle",
    forecast: "Rain"
  })

})




// Favorite Route

app.post('/favorites', (req, res) => {

  // Mistake #10
  // Wrong property name.
  const city = req.body.cities

  // Mistake #11
  // Undefined variable.
  console.log(location)

  res.send({
    message: "Favorite saved!",
    city: city
  })

})




// Delete Route

// Mistake #12
// Missing colon before id parameter.
app.delete('/favorites/id', (req, res) => {

  const id = req.params.id

  res.send({
    message: `Deleted ${id}`
  })

})




// Update Route

app.put('/favorites/:id', (req, res) => {

  // Mistake #13
  // req.param instead of req.params
  const id = req.param.id

  const city = req.body.city

  res.send({
    id,
    city,
    message: "Updated!"
  })

})




// Error Route

app.get('/error', (req, res) => {

  // Mistake #14
  // This variable doesn't exist.
  console.log(weatherData)

  res.send("Testing errors.")

})




// ======================
// 404 Route
// ======================

// Mistake #15
// Incorrect parameter order.
app.use((res, req) => {

  res.status(404).send("Page Not Found")

})




// ======================
// Start Server
// ======================

// Mistake #16
// listen misspelled.
app.listern(PORT, () => {

  // Mistake #17
  // Variable name typo.
  console.log(`Server running on port ${port}`)

})