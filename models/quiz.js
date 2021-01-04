const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    vote: { type: Number, required: true },
  });

  module.exports = mongoose.model('Quiz', quizSchema);