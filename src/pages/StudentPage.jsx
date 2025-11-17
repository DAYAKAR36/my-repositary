import React, { useState, useEffect } from "react";

// 🔴 SAME THEME AS PREVIOUS (White card + Red top border + Styled inputs)
const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    borderTop: "6px solid #cc0000",
  },
  input: {
    padding: "10px",
    margin: "6px",
    width: "260px",
    borderRadius: "6px",
    border: "1px solid #999",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  label: {
    fontWeight: "bold",
    marginTop: "10px",
    display: "block",
  },
  btn: {
    padding: "10px 20px",
    background: "#cc0000",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  listItem: {
    background: "#fff",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  }
};

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
    year: "",
  });

  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

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
      body: JSON.stringify(form),
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
      year: "",
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
      <h2 style={{ marginBottom: "20px" }}>Student Admission & Course Records</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 🔴 SAME THEME CARD */}
      <div style={styles.card}>
        <h3>Admission Details</h3>
        <div style={styles.row}>
          <input style={styles.input} name="pin" placeholder="PIN" value={form.pin} onChange={handleChange} />
          <input style={styles.input} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input style={styles.input} name="fatherName" placeholder="Father's Name" value={form.fatherName} onChange={handleChange} />
          <input style={styles.input} name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          <input style={styles.input} name="category" placeholder="Category" value={form.category} onChange={handleChange} />
          <input style={styles.input} name="nationality" placeholder="Nationality" value={form.nationality} onChange={handleChange} />
          <input style={styles.input} name="religion" placeholder="Religion" value={form.religion} onChange={handleChange} />
          <input style={styles.input} name="community" placeholder="Community" value={form.community} onChange={handleChange} />
          <input style={styles.input} name="admissionNo" placeholder="Admission No." value={form.admissionNo} onChange={handleChange} />
          <input style={styles.input} name="doa" placeholder="Date of Admission" value={form.doa} onChange={handleChange} />
          <input style={styles.input} name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} />
          <input style={styles.input} name="year" placeholder="Year" value={form.year} onChange={handleChange} />
        </div>
      </div>

      {/* 🔴 COURSE DETAILS THEME CARD */}
      <div style={styles.card}>
        <h3>Course Completion Details</h3>
        <div style={styles.row}>
          <input style={styles.input} name="result" placeholder="Result" value={form.result} onChange={handleChange} />
          <input style={styles.input} name="completionDate" placeholder="Completion Date" value={form.completionDate} onChange={handleChange} />
          <input style={styles.input} name="tcNoDate" placeholder="T.C. No & Date" value={form.tcNoDate} onChange={handleChange} />
          <input style={styles.input} name="initials" placeholder="Principal/HOS Initials" value={form.initials} onChange={handleChange} />
        </div>
      </div>

      <button style={styles.btn} onClick={saveStudent}>{editId ? "Update" : "Add"}</button>

      {/* 🔴 SAVED LIST */}
      <h3 style={{ marginTop: "20px" }}>Saved Records</h3>

      {students.map((s) => (
        <div key={s._id} style={styles.listItem}>
          <div>
            <b>{s.pin}</b> — {s.name} — {s.branch} — {s.year} — {s.result}
          </div>
          <div>
            <button style={{ ...styles.btn, background: "#444" }} onClick={() => editStudent(s)}>Edit</button>
            <button style={{ ...styles.btn, background: "#990000", marginLeft: "10px" }} onClick={() => deleteStudent(s._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentPage1;