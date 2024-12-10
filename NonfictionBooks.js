const mongoose = require('mongoose');

const nonFictionBookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishedYear: { type: Number, required: true },
});

module.exports = mongoose.model('NonFictionBook', nonFictionBookSchema);
