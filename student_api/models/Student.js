const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  course: String,
  year: String,
  enrolled: Boolean,
});

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);