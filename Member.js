const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  membershipDate: { type: Date, required: true, default: Date.now },
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FictionBook' }],
});

module.exports = mongoose.model('Member', memberSchema);
