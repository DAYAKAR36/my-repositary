import React, { useState } from "react";

// Main Page Component
function StudentSelPage() {
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  function generateStudents(selectedBranch, selectedYear) {
    var prefix = "";
    if (selectedYear === "1st Year") prefix = "25635";
    else if (selectedYear === "2nd Year") prefix = "24635";
    else if (selectedYear === "3rd Year") prefix = "23635";

    var branchCode = selectedBranch === "CME" ? "CM" : "EC";

    var list = [];
    for (var i = 1; i <= 60; i++) {
      var roll = String(i).padStart(3, "0");
      list.push(prefix + " " + branchCode + " " + roll);
    }
    return list;
  }

  function handleGenerate() {
    if (branch && year) {
      setStudents(generateStudents(branch, year));
      setSelectedStudent(null);
      setSelectedDocument(null);
    }
  }

  var documents = ["Transfer Certificate", "Study Certificate", "Bus Pass Application"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Certificate Portal</h2>

      {/* Branch and Year Selection */}
      <div style={{ backgroundColor: "#add8e6", padding: "15px", borderRadius: "8px" }}>
        <label>
          Branch:{" "}
          <select value={branch} onChange={function (e) { setBranch(e.target.value); }}>
            <option value="">Select Branch</option>
            <option value="CME">CME</option>
            <option value="ECE">ECE</option>
          </select>
        </label>

        <label style={{ marginLeft: "20px" }}>
          Year:{" "}
          <select value={year} onChange={function (e) { setYear(e.target.value); }}>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
          </select>
        </label>

        <button onClick={handleGenerate} style={{ marginLeft: "20px" }}>
          Show Students
        </button>
      </div>

      {/* Student List */}
      <div style={{ marginTop: "20px" }}>
        {students.map(function (stu, index) {
          return (
            <div
              key={index}
              onClick={function () {
                setSelectedStudent(stu);
                setSelectedDocument(null);
              }}
              style={{
                padding: "8px 12px",
                margin: "4px 0",
                backgroundColor: "#f2f2f2",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {stu}
              {/* Show documents when student is clicked */}
              {selectedStudent === stu && (
                <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {documents.map(function (doc, i) {
                    return (
                      <div
                        key={i}
                        onClick={function () { setSelectedDocument(doc); }}
                        style={{
                          padding: "8px 14px",
                          backgroundColor: "#66ccff",
                          borderRadius: "20px",
                          cursor: "pointer",
                        }}
                      >
                        {doc}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Display Selected Student and Document */}
      {selectedStudent && selectedDocument && (
        <div style={{ marginTop: "30px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Selection Details</h3>
          <p>
            <b>{selectedDocument} of student {selectedStudent} has been selected.</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default StudentSelPage;