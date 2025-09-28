const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/studentdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

// 🔹 Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  pin: String,
  father: String,
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
  branch: String,
  year: String,
});
const Student = mongoose.model("Student", studentSchema);

// 🔹 Certificate Schema
const certificateSchema = new mongoose.Schema({
  name: String,
  pin: String,
  father: String,
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
  createdAt: { type: Date, default: Date.now },
});
const Certificate = mongoose.model("Certificate", certificateSchema);

// 🔹 GET Students with filters
app.get("/students", async (req, res) => {
  try {
    const { pin, branch, year } = req.query;
    let query = {};

    if (pin) {
      query.pin = pin;
    } else {
      if (branch) query.branch = branch;
      if (year) query.year = year;
    }

    const students = await Student.find(query);
    res.json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 POST Save Certificate
app.post("/save-certificate", async (req, res) => {
  try {
    const certData = req.body;

    if (!certData.pin) {
      return res.status(400).json({ error: "PIN is required" });
    }

    const newCert = new Certificate(certData);
    await newCert.save();

    res.status(201).json({ message: "Certificate saved successfully" });
  } catch (err) {
    console.error("Save certificate error:", err);
    res.status(500).json({ error: "Failed to save certificate" });
  }
});

// 🔹 Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("🚀 Server running on http://localhost:${PORT}");
});