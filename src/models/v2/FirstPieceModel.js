const mongoose = require('mongoose');

const { Schema } = mongoose;

const PieceSchema = new Schema({
  x: Number,
  y: Number,
  userId: Number,
  direction: Number,
  date: Number,
});

module.exports = mongoose.model('PieceSchema', PieceSchema);
