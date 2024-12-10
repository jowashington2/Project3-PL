const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fictionRoutes = require('./endpoints/fictionRoutes');
const nonFictionRoutes = require('./endpoints/nonFictionRoutes');
const memberRoutes = require('./endpoints/memberRoutes');
const staffRoutes = require('./endpoints/staffRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', fictionRoutes);
app.use('/api', nonFictionRoutes);
app.use('/api', memberRoutes);
app.use('/api', staffRoutes);

module.exports = app;
