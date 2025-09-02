import React, { useState, useEffect } from "react";

function StudentPage() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", pin: "", clgCode: "", institutionName: "", branch: "", year: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => { loadStudents(); }, []);

  async function loadStudents() {
    const res = await fetch("http://localhost:5000/students");
    setStudents(await res.json());
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function saveStudent() {
    const method = editId ? "PUT" : "POST";
    const url = editId ? `http://localhost:5000/students/${editId}` : "http://localhost:5000/students";
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setForm({ name: "", pin: "", clgCode: "", institutionName: "", branch: "", year: "" });
    setEditId(null);
    loadStudents();
  }

  async function deleteStudent(id) {
    await fetch(`http://localhost:5000/students/${id} `, { method: "DELETE" });
    loadStudents();
  }

  function editStudent(s) {
    setForm(s);
    setEditId(s._id);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="pin" placeholder="PIN" value={form.pin} onChange={handleChange} />
      <input name="clgCode" placeholder="College Code" value={form.clgCode} onChange={handleChange} />
      <input name="institutionName" placeholder="Institution" value={form.institutionName} onChange={handleChange} />
      <input name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} />
      <input name="year" placeholder="Year" value={form.year} onChange={handleChange} />
      <button onClick={saveStudent}>{editId ? "Update" : "Add"}</button>

      <ul>
        {students.map(s => (
          <li key={s._id}>
            {s.name} | {s.pin} | {s.clgCode} | {s.institutionName} | {s.branch} | {s.year}
            <button onClick={() => editStudent(s)}>Edit</button>
            <button onClick={() => deleteStudent(s._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentPage;