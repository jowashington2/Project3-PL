const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  hireDate: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('Staff', staffSchema);
