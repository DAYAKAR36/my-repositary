import React, { useState, useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";
import { useLocation, useNavigate } from "react-router-dom";

function TransferCertificate() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const student = state?.student;

  const certRef = useRef(null);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!student) {
      alert("No student selected! Redirecting back.");
      navigate(-1);
    }
  }, [student, navigate]);

  const [formData, setFormData] = useState({
    name: student?.name || "",
    pin: student?.pin || "",
    fatherName: student?.fatherName || "",
    nationality: student?.nationality || "",
    caste: student?.caste || "",
    dob: student?.dob || "",
    admission: student?.doa || "",
    leaving: student?.completionDate || "",
    branch: student?.branch || "",
    year: student?.year || "",
    fees: "",
    conduct: "",
    appdate: today,
    reason: "",
  });

  const [showCertificate, setShowCertificate] = useState(false);

  const fieldLabels = {
    name: "1. Name of Student",
    pin: "2. PIN",
    fatherName: "3. Father's Name",
    nationality: "4. Nationality / Religion",
    caste: "5. Caste",
    dob: "6. Date of Birth",
    admission: "7. Date of Admission",
    leaving: "8. Date of Leaving",
    branch: "9. Branch",
    year: "10. Year",
    fees: "11. Fees Paid (Yes/No)",
    conduct: "12. Conduct & Character",
    appdate: "13. Application Date",
    reason: "14. Reason for Applying",
  };

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function generateCertificate() {
    setShowCertificate(true);
  }

  function handlePrint() {
    const printContents = certRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }

  function handleDownload() {
    const element = certRef.current;
    const opts = {
      margin: 0.5,
      filename: `${formData.name || "certificate"}_TransferCertificate.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opts).save();
  }

  // 🔴 Button Theme (same as StudentPage)
  const redBtn = {
    padding: "10px 20px",
    background: "#b60000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Transfer Certificate Form
      </h2>

      {/* Editable Form */}
      <div style={{ marginTop: "20px" }}>
        {Object.keys(formData).map((key) => {
          const type = ["dob", "admission", "leaving", "appdate"].includes(key)
            ? "date"
            : "text";
          return (
            <div key={key} style={{ marginBottom: "8px" }}>
              <label style={{ display: "inline-block", width: "250px" }}>
                {fieldLabels[key]}:
              </label>
              <input
                type={type}
                id={key}
                value={formData[key]}
                onChange={handleChange}
                style={{
                  width: "300px",
                  padding: "6px",
                  border: "1px solid #777",
                  borderRadius: "4px",
                }}
              />
            </div>
          );
        })}

        {/* 🔴 Themed Buttons */}
        <button onClick={generateCertificate} style={redBtn}>
          Generate Certificate
        </button>

        <button onClick={() => navigate(-1)} style={{ ...redBtn, marginLeft: "10px" }}>
          Back
        </button>
      </div>

      {/* Certificate Preview */}
      {showCertificate && (
        <div style={{ marginTop: "40px" }}>
          <div
            ref={certRef}
            style={{
              border: "2px solid black",
              padding: "30px",
              backgroundColor: "white",
              width: "800px",
              margin: "auto",
              lineHeight: "1.8em",
            }}
          >
            <h2 style={{ textAlign: "center" }}>GOVERNMENT POLYTECHNIC</h2>
            <h3 style={{ textAlign: "center" }}>CHODAVARAM - 521 032</h3>
            <h3
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginBottom: "20px",
              }}
            >
              TRANSFER CERTIFICATE
            </h3>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {Object.keys(formData).map((key) => (
                  <tr key={key}>
                    <td
                      style={{
                        width: "45%",
                        padding: "6px",
                        fontWeight: "bold",
                      }}
                    >
                      {fieldLabels[key]}
                    </td>
                    <td style={{ padding: "6px" }}>{formData[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />

            <div style={{ marginTop: "30px" }}>
              <p style={{ float: "left" }}>Head of Section</p>
              <p style={{ float: "right" }}>Director</p>
              <div style={{ clear: "both" }}></div>
            </div>
          </div>

          {/* 🔴 Themed Buttons */}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={handlePrint} style={{ ...redBtn, marginRight: "10px" }}>
              Print
            </button>

            <button onClick={handleDownload} style={{ ...redBtn, marginRight: "10px" }}>
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransferCertificate;
