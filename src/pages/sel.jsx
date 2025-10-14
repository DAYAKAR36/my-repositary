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

  function handleFetchStudents() {
    setError("");
    setStudents([]);
    setSelectedStudentId(null);

    if (!searchPin && (!branch || !year)) {
      setError("Please enter PIN or select both branch and year");
      return;
    }

    var url = "http://localhost:5000/students?";
    if (searchPin) url += "pin=" + encodeURIComponent(searchPin);
    else url += "branch=" + encodeURIComponent(branch) + "&year=" + encodeURIComponent(year);

    fetch(url)
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.length === 0) setError("No students found");
        else setStudents(data);
      })
      .catch(function(err) {
        console.error(err);
        setError("Error fetching students");
      });
  }

  function handleStudentClick(id) {
    if (selectedStudentId === id) setSelectedStudentId(null);
    else setSelectedStudentId(id);
  }

  function handleTransferCertificate(student) {
    console.log("Transfer Certificate:", student);
    navigate("/tc", { state: { student } });
  }

  function handleStudyCertificate(student) {
    console.log("Study Certificate:", student);
    navigate("/study")
  }

  function handleBusPassApplication(student) {
    console.log("Bus Pass Application:", student);
    navigate("/bus",{state:{student}});
  }

  function handleSearchChange(e) {
    setSearchPin(e.target.value);
    setError("");
  }

  function handleBranchChange(e) {
    setBranch(e.target.value);
    setSearchPin("");
    setError("");
  }

  function handleYearChange(e) {
    setYear(e.target.value);
    setSearchPin("");
    setError("");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Certificate Portal</h2>

      {/* Search & Filters */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter PIN (e.g. 23635-cm-002)"
          value={searchPin}
          onChange={handleSearchChange}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <select value={branch} onChange={handleBranchChange} style={{ marginRight: "10px" }}>
          <option value="">Select Branch</option>
          <option value="CME">CME</option>
          <option value="ECE">ECE</option>
        </select>
        <select value={year} onChange={handleYearChange} style={{ marginRight: "10px" }}>
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
        </select>
        <button onClick={handleFetchStudents}>Fetch Students</button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Student List */}
      <div style={{ marginTop: "20px" }}>
        {students.map(function(stu) {
          return (
            <div key={stu._id} style={{ marginBottom: "10px" }}>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
                onClick={function() { handleStudentClick(stu._id); }}
              >
                {stu.pin} - {stu.name} ({stu.branch}, {stu.year})
              </button>

              {selectedStudentId === stu._id && (
                <div style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={function() { handleTransferCertificate(stu); }}
                  >
                    Transfer Certificate
                  </button>

                  <button
                    style={{ marginRight: "10px" }}
                    onClick={function() { handleStudyCertificate(stu); }}
                  >
                    Study Certificate
                  </button>

                  <button
                    onClick={function() { handleBusPassApplication(stu); }}
                  >
                    Bus Pass Application
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentPage;
