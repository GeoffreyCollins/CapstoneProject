const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Add logging

// MongoDB Connection
const mongoURI = 'mongodb+srv://collinsgeo:wedmay29@cabrontracker.9es0sog.mongodb.net/';
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
    if (!name || !population) {
      return res.status(400).json({ message: 'Name and population are required' });
    }
    const newCity = new City({ name, population });
    await newCity.save();
    res.status(201).json(newCity);
  } catch (error) {
    console.error('Error adding city:', error);
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/cities/:id', async (req, res) => {
  try {
    const { name, population } = req.body;
    const city = await City.findByIdAndUpdate(req.params.id, { name, population }, { new: true });
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.status(200).json(city);
  } catch (error) {
    console.error('Error updating city:', error);
    res.status(500).json({ message: error.message });
  }
});

app.delete('/api/cities/:id', async (req, res) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }
    res.status(200).json({ message: 'City deleted' });
  } catch (error) {
    console.error('Error deleting city:', error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
