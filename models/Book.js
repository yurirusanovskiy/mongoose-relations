const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publishers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
  }],
});

module.exports = mongoose.model('Book', bookSchema);
