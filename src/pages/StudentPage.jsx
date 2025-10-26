import React, { useState, useEffect } from "react";

function StudentPage1() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    pin: "",
    name: "",
    fatherName: "",
    address: "",
    category: "",
    nationality: "",
    religion: "",
    community: "",
    admissionNo: "",
    doa: "",
    result: "",
    completionDate: "",
    tcNoDate: "",
    initials: "",
    branch: "",
    year: ""
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // ✅ Load ALL students on page load (Auto, no search needed)
  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    setError("");
    try {
      const res = await fetch("http://localhost:5000/students");
      const data = await res.json();
      setStudents(data);
      if (!data || data.length === 0) setError("No students found");
    } catch (err) {
      console.error(err);
      setError("Error fetching students");
      setStudents([]);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function saveStudent() {
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:5000/students/${editId}`
      : "http://localhost:5000/students";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({
      pin: "",
      name: "",
      fatherName: "",
      address: "",
      category: "",
      nationality: "",
      religion: "",
      community: "",
      admissionNo: "",
      doa: "",
      result: "",
      completionDate: "",
      tcNoDate: "",
      initials: "",
      branch: "",
      year: ""
    });
    setEditId(null);
    loadStudents();
  }

  async function deleteStudent(id) {
    await fetch(`http://localhost:5000/students/${id}`, { method: "DELETE" });
    loadStudents();
  }

  function editStudent(s) {
    setForm(s);
    setEditId(s._id);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Admission & Course Records</h2>

      {/* ❌ Removed Search Section */}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Admission Form */}
      <fieldset style={{ marginBottom: "15px", padding: "10px" }}>
        <legend><b>Admission Details</b></legend>
        <input name="pin" placeholder="PIN" value={form.pin} onChange={handleChange} />
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="fatherName" placeholder="Father's Name" value={form.fatherName} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="nationality" placeholder="Nationality" value={form.nationality} onChange={handleChange} />
        <input name="religion" placeholder="Religion" value={form.religion} onChange={handleChange} />
        <input name="community" placeholder="Community" value={form.community} onChange={handleChange} />
        <input name="admissionNo" placeholder="Admission No." value={form.admissionNo} onChange={handleChange} />
        <input name="doa" placeholder="Date of Admission" value={form.doa} onChange={handleChange} />
        <input name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} />
        <input name="year" placeholder="Year" value={form.year} onChange={handleChange} />
      </fieldset>

      <fieldset style={{ marginBottom: "15px", padding: "10px" }}>
        <legend><b>Course Completion Details</b></legend>
        <input name="result" placeholder="Result" value={form.result} onChange={handleChange} />
        <input name="completionDate" placeholder="Completion Date" value={form.completionDate} onChange={handleChange} />
        <input name="tcNoDate" placeholder="T.C. No & Date" value={form.tcNoDate} onChange={handleChange} />
        <input name="initials" placeholder="Principal/HOS Initials" value={form.initials} onChange={handleChange} />
      </fieldset>

      <button onClick={saveStudent}>{editId ? "Update" : "Add"}</button>

      {/* Student List */}
      <h3>Saved Records</h3>
      <ul>
        {Array.isArray(students) &&
          students.map((s) => (
            <li key={s._id}>
              <b>{s.pin}</b> | {s.name} | {s.fatherName} | {s.branch} | {s.year} | {s.result}
              <button onClick={() => editStudent(s)}>Edit</button>
              <button onClick={() => deleteStudent(s._id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default StudentPage1;
