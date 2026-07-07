'use strict'
// ======================================================
// Debugging Test
//
// This server.js file contains MANY intentional mistakes.
// Your job is to find and fix them.
// ======================================================

const cors = require('cors')
const morgon = require('morgan')

const app = express()

const PORT = 3001

app.use(cors)
app.use(morgan('dev'))
app.use(express.json)

app.got('/', (req, res) => {

  res.sned('Welcome to the API!')

})

app.get('weather', (req, res) => {

  res.send({
    city: "Seattle",
    forecast: "Rain"
  })

})

app.post('/favorites', (req, res) => {

  const city = req.body.cities

  console.log(location)

  res.send({
    message: "Favorite saved!",
    city: city
  })

})

app.delete('/favorites/id', (req, res) => {

  const id = req.params.id

  res.send({
    message: `Deleted ${id}`
  })

})

app.put('/favorites/:id', (req, res) => {

  const id = req.param.id

  const city = req.body.city

  res.send({
    id,
    city,
    message: "Updated!"
  })

})

app.get('/error', (req, res) => {

  console.log(weatherData)

  res.send("Testing errors.")

})

app.use((res, req) => {

  res.status(404).send("Page Not Found")

})

app.listern(PORT, () => {

  console.log(`Server running on port ${port}`)

})