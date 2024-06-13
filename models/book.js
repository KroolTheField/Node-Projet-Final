const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
  publishedDate: { type: Date, required: true }
});

module.exports = mongoose.model('Book', BookSchema);
