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

// Student (Admission Register)
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
  initials: String,
});

const Student = mongoose.model("Student", studentSchema);

// Transfer Certificate
const certificateSchema = new mongoose.Schema({
  name: String,
  pin: String,
  fatherName: String,
  nationality: String,
  caste: String,
  dob: String,
  admission: String,
  leaving: String,
  class: String,
  fees: String,
  conduct: String,
  appdate: String,
  reason: String,
});

const Certificate = mongoose.model("Certificate", certificateSchema);

// ---------------- Routes ----------------

// Add new student
app.post("/students", async function (req, res) {
  try {
    var newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ success: true, student: newStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get students (filtered by pin OR branch+year)
// Get students (filtered by pin OR branch+year)
app.get("/students", async function (req, res) {
  try {
    const { pin, branch, year } = req.query;

    let filter = {};

    if (pin) filter.pin = pin;
    else if (branch && year) {
      filter.branch = branch;
      filter.year = year;
    } else {
      return res.status(400).json({ error: "Provide PIN or both branch and year" });
    }

    const students = await Student.find(filter); // always returns array
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


// Update student
app.put("/students/:id", async function (req, res) {
  try {
    const { id } = req.params;
    var updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete student
app.delete("/students/:id", async function (req, res) {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Save Transfer Certificate
app.post("/save-certificate", async function (req, res) {
  try {
    var newCert = new Certificate(req.body);
    await newCert.save();
    res.json({ success: true, certificate: newCert });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all certificates (optional)
app.get("/certificates", async function (req, res) {
  try {
    var certs = await Certificate.find();
    res.json(certs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ---------------- Start Server ----------------
const PORT = 5000;
app.listen(PORT, function () {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
