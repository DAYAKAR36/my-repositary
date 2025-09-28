import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentPage() {
  const n=useNavigate();
  const n1=useNavigate();
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [students, setStudents] = useState([]);
  const [searchPin, setSearchPin] = useState("");
  const [error, setError] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(null);

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

  function handleSearchChange(e) {
    setSearchPin(e.target.value);
    setError("");
  }

  function handleStudentClick(studentId) {
    if (selectedStudentId === studentId) {
      setSelectedStudentId(null);
    } else {
      setSelectedStudentId(studentId);
    }
  }

  async function handleFetchStudents() {
    setError("");
    setStudents([]);
    setSelectedStudentId(null);

    if (searchPin.trim()) {
      var pinRegex = /^\d{5}-(cm|ec)-\d{3}$/i;
      if (!pinRegex.test(searchPin)) {
        setError("Invalid PIN format! Use 23635-cm-002");
        return;
      }

      try {
        var response = await fetch(
          "http://localhost:5000/students?pin=" + encodeURIComponent(searchPin.trim())
        );
        var data = await response.json();

        if (data.length === 0) {
          setError("No student found");
        } else {
          setStudents(data);
        }
      } catch (err) {
        console.error(err);
        setError("Error searching student");
      }

      return;
    }

    if (!branch || !year) {
      setError("Please select both branch and year or enter a valid PIN.");
      return;
    }

    try {
      var response= await fetch(
        "http://localhost:5000/students?branch=" +
          encodeURIComponent(branch) +
          "&year=" +
          encodeURIComponent(year)
      );
      var data= await response.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching students");
    }
  }

  function handleTransferCertificate(student) {
    console.log("Transfer Certificate selected for:", student);
    n('/tc')
  }
  function handleStudyCertificate(student) {
    console.log("Study Certificate selected for:", student);
  }

  function handleBusPassApplication(student) {
    console.log("Bus Pass Application selected for:", student);
    n1('/bus')
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Certificate Portal</h2>

      {/* Search Bar */}
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter PIN (e.g. 23635-cm-002)"
          value={searchPin}
          onChange={handleSearchChange}
          style={{ padding: "5px" }}
        />
      </div>

      {/* Filters */}
      <div style={{ backgroundColor: "#add8e6", padding: "15px", borderRadius: "8px" }}>
        <label>
          Branch:{" "}
          <select value={branch} onChange={handleBranchChange}>
            <option value="">Select Branch</option>
            <option value="CME">CME</option>
            <option value="ECE">ECE</option>
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Year:{" "}
          <select value={year} onChange={handleYearChange}>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
        </label>

        <button onClick={handleFetchStudents} style={{ marginLeft: "20px" }}>
          Fetch Students
        </button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Student List */}
      <div style={{ marginTop: "20px" }}>
        {students.map(function (stu) {
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
                onClick={function () {
                  handleStudentClick(stu._id);
                }}
              >
                {stu.pin} - {stu.name}
              </button>

              {selectedStudentId === stu._id && (
                <div style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={function () {
                      handleTransferCertificate(stu);
                    }}
                  >
                    Transfer Certificate
                  </button>

                  <button
                    style={{ marginRight: "10px" }}
                    onClick={function () {
                      handleStudyCertificate(stu);
                    }}
                  >
                    Study Certificate
                  </button>

                  <button
                    onClick={function () {
                      handleBusPassApplication(stu);
                    }}
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
