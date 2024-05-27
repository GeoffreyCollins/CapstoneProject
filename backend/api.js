const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://collinsgeo:NXXldb0S8haJLody@cabrontracker.9es0sog.mongodb.net/?retryWrites=true&w=majority&appName=CabronTracker';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a simple schema and model
const citySchema = new mongoose.Schema({
  name: String,
  population: Number,
});

const City = mongoose.model('City', citySchema);

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/cities', async (req, res) => {
  try {
    const { name, population } = req.body;
    const newCity = new City({ name, population });
    await newCity.save();
    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/cities', async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
