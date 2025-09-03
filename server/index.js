const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// =====================
// MongoDB Connection
// =====================
mongoose.connect("mongodb://127.0.0.1:27017/myprojectdb")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Error:", err));

// =====================
// Schema & Model
// =====================
const StudentSchema = new mongoose.Schema({
  name: String,
  pin: String,
  clgCode: String,
  institutionName: String,
  branch: String,
  year: String
});

const Student = mongoose.model("Student", StudentSchema);

// =====================
// Routes
// =====================

// Add student
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get students (with filtering)
app.get("/students", async (req, res) => {
  try {
    const { branch, year, pin } = req.query;
    let query = {};

    if (pin) {
      // Search by exact PIN
      query.pin = { $regex: new RegExp(`^${pin}$`, "i") };
    } else {
      // Filter by branch and year
      if (branch) query.branch = { $regex: new RegExp(`^${branch}$`, "i") };
      if (year) query.year = { $regex: new RegExp(`^${year}$`, "i") };

      // Prefix logic for PIN
      let prefix = "";
      if (year === "1st Year") prefix = "25635";
      else if (year === "2nd Year") prefix = "24635";
      else if (year === "3rd Year") prefix = "23635";

      if (prefix && branch) {
        const branchCode = branch.toUpperCase() === "CME" ? "CM" : "EC";
        query.pin = { $regex: new RegExp(`^${prefix}-${branchCode}-`, "i") };
      }
    }

    const students = await Student.find(query);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update student
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete student
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// Server Start
// =====================
app.listen(5000, () => console.log("server running on port 5000"));