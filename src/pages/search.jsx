import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentPage() {
  const navigate = useNavigate();
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [students, setStudents] = useState([]);
  const [searchPin, setSearchPin] = useState("");
  const [error, setError] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const pageContainer = {
    height: "100vh",
    background: "#f5f6f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    width: "700px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  const heading = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#b60000",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    width: "32%",
    marginRight: "5px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  const fetchBtn = {
    background: "#b60000",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const errorText = { color: "red", marginTop: "10px" };

  const studentBtn = {
    width: "100%",
    textAlign: "left",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#f0f0f0",
    fontSize: "15px",
    cursor: "pointer",
  };

  const smallBtn = {
    marginRight: "10px",
    padding: "8px 12px",
    background: "#b60000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  function handleFetchStudents() {
    setError("");
    setStudents([]);
    setSelectedStudentId(null);

    if (!searchPin && (!branch || !year)) {
      setError("Please enter PIN or select both branch and year");
      return;
    }

    let url = "http://localhost:5000/students?";
    if (searchPin) url += "pin=" + encodeURIComponent(searchPin);
    else url += "branch=" + encodeURIComponent(branch) + "&year=" + encodeURIComponent(year);

    fetch(url)
      .then((res) => res.json())
      .then((data) => (data.length === 0 ? setError("No students found") : setStudents(data)))
      .catch(() => setError("Error fetching students"));
  }

  return (
    <div style={pageContainer}>
      <div style={boxStyle}>
        <h2 style={heading}>Student Certificate Portal</h2>

        <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter PIN (e.g. 23635-cm-002)"
            value={searchPin}
            onChange={(e) => setSearchPin(e.target.value)}
            style={inputStyle}
          />

          <select value={branch} onChange={(e) => setBranch(e.target.value)} style={inputStyle}>
            <option value="">Select Branch</option>
            <option value="CME">CME</option>
            <option value="ECE">ECE</option>
          </select>

          <select value={year} onChange={(e) => setYear(e.target.value)} style={inputStyle}>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>

          <button style={fetchBtn} onClick={handleFetchStudents}>Fetch Students</button>
        </div>

        {error && <p style={errorText}>{error}</p>}

        <div style={{ marginTop: "20px" }}>
          {students.map((stu) => (
            <div key={stu._id} style={{ marginBottom: "10px" }}>
              <button style={studentBtn} onClick={() => setSelectedStudentId(stu._id)}>
                {stu.pin} - {stu.name} ({stu.branch}, {stu.year})
              </button>

              {selectedStudentId === stu._id && (
                <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
                  <button style={smallBtn} onClick={() => navigate("/tc", { state: { student: stu } })}>
                    Transfer Certificate
                  </button>

                  <button style={smallBtn} onClick={() => navigate("/study", { state: { student: stu } })}>
                    Study Certificate
                  </button>

                  <button style={smallBtn} onClick={() => navigate("/bus", { state: { student: stu } })}>
                    Bus Pass Application
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentPage;
