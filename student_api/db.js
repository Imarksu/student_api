const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Student schema
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  course: String,
  year: String,
  enrolled: Boolean,
});

const Student = mongoose.model('Student', studentSchema);

// Fetch all students
async function fetchStudents() {
  const students = await Student.find();
  console.log(students);
}

fetchStudents();

module.exports = mongoose;