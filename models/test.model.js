const mongoose = require('mongoose');

//create shema for model
const testSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

// Create and export model for data in testimonials colection
module.exports = mongoose.model('Test', testSchema);