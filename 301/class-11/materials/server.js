const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 1. Connect your server to the MongoDB database engine
mongoose.connect('mongodb://localhost:27017/myAppDatabase');

// 2. Import the schema model you created in the other file
const Cat = require('./models/Cat');

// 3. Example of using it inside a server route (Creating a Cat)
app.post('/add-cat', async (req, res) => {
  try {
    // We use our 'Cat' model class directly here!
    const newCat = await Cat.create({ name: 'Fluffy', age: 3 });
    res.status(201).json(newCat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));