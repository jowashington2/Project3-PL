const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fictionRoutes = require('./endpoints/fictionRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', fictionRoutes);

module.exports = app;
