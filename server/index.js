const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// ---------------- MongoDB Connection ----------------
mongoose.connect("mongodb://127.0.0.1:27017/myprojectdb")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ---------------- Schemas ----------------
const studentSchema = new mongoose.Schema({
  pin: String,
  name: String,
  fatherName: String,
  address: String,
  category: String,
  nationality: String,
  religion: String,
  community: String,
  admissionNo: String,
  doa: String,
  branch: String,
  year: String,
  result: String,
  completionDate: String,
  tcNoDate: String,
  initials: String
});

const Student = mongoose.model("Student", studentSchema);

// ---------------- Routes ----------------

// Add new student
app.post("/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ success: true, student: newStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get students (ALL or filtered)
app.get("/students", async (req, res) => {
  try {
    const { pin, branch, year } = req.query;

    let filter = {};

    if (pin) filter.pin = pin;
    else if (branch && year) {
      filter.branch = branch;
      filter.year = year;
    }

    const students = await Student.find(filter); // if filter empty, returns all
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


// Update student
app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete student
app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ---------------- Start Server ----------------
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));