const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  status: { type: String, enum: ['read', 'unread'], default: 'unread' }
});

module.exports = mongoose.model('Book', bookSchema);
