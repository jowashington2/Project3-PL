const mongoose = require('mongoose');

const fictionBookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishedYear: { type: Number, required: true },
});

module.exports = mongoose.model('FictionBook', fictionBookSchema);
