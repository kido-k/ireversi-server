// const moment = require('moment');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlayingSchema = new Schema({
  x: Number,
  y: Number,
  userId: Number,
});

module.exports = mongoose.model('KohskiPlaying', PlayingSchema);
