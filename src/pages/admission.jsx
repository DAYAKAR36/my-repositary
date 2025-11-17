import React, { useState, useEffect } from "react";

function AdmissionBook() {
  const [students, setStudents] = useState([]);

  useEffect(function () {
    fetch("http://localhost:5000/students")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setStudents(data);
      })
      .catch(function (err) {
        console.error("Error fetching students:", err);
      });
  }, []);

  function getPages() {
    const pages = [];
    for (let i = 0; i < students.length; i += 10) {
      pages.push(students.slice(i, i + 10));
    }
    return pages;
  }

  const pages = getPages();

  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ textAlign: "center", color: "red" }}>ADMISSION REGISTER</h1>

      {pages.map(function (page, pageIndex) {
        return (
          <div
            key={pageIndex}
            style={{
              border: "2px solid black",
              marginBottom: "50px",
              padding: "10px",
              backgroundColor: "#fff",
              pageBreakAfter: "always",
            }}
          >
            {/* PAGE TITLE */}
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                backgroundColor: "red",
                color: "white",
                padding: "6px",
                borderRadius: "4px",
              }}
            >
              Page {pageIndex + 1}
            </h3>

            {/* TABLE */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <th style={{ border: "1px solid black", width: "3%" }}>S.No</th>
                  <th style={{ border: "1px solid black", width: "7%" }}>PIN No</th>
                  <th style={{ border: "1px solid black", width: "14%" }}>Full Name</th>
                  <th style={{ border: "1px solid black", width: "14%" }}>Father Name & Address</th>
                  <th style={{ border: "1px solid black", width: "6%" }}>Category</th>
                  <th style={{ border: "1px solid black", width: "7%" }}>Nationality</th>
                  <th style={{ border: "1px solid black", width: "6%" }}>Religion</th>
                  <th style={{ border: "1px solid black", width: "8%" }}>Date of Admission</th>
                  <th style={{ border: "1px solid black", width: "8%" }}>TC No & Date</th>
                  <th style={{ border: "1px solid black", width: "8%" }}>Result</th>
                  <th style={{ border: "1px solid black", width: "8%" }}>Date of Completion</th>
                  <th style={{ border: "1px solid black", width: "8%" }}>Date of Issue TC</th>
                  <th style={{ border: "1px solid black", width: "7%" }}>Initials (Clerk/HOD/Principal)</th>
                </tr>
              </thead>

              <tbody>
                {page.map(function (student, index) {
                  const sno = pageIndex * 10 + index + 1;
                  return (
                    <tr key={sno} style={{ height: "50px" }}>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>{sno}</td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>{student.pin}</td>
                      <td
                        style={{
                          border: "1px solid black",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {student.name}
                      </td>
                      <td
                        style={{
                          border: "1px solid black",
                          wordBreak: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        {student.fatherName}
                        <br />
                        {student.address}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.category}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.nationality}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.religion}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.doa}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.tcNoDate}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.result}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.completionDate}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        {student.dateOfIssueTC}
                      </td>
                      <td style={{ border: "1px solid black", textAlign: "center" }}>
                        <input
                          type="text"
                          defaultValue=""
                          style={{
                            width: "100%",
                            border: "none",
                            textAlign: "center",
                            background: "transparent",
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default AdmissionBook;
