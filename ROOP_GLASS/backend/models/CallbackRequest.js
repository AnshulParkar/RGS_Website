// filepath: /backend/models/CallbackRequest.js
const mongoose = require('mongoose');

const CallbackRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CallbackRequest', CallbackRequestSchema);