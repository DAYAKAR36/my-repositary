import React, { useState, useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";
import { useLocation } from "react-router-dom";

function TransferCertificate() {
  const location = useLocation();
  const pinFromNav = location.state?.pin;
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    pin: "",
    father: "",
    nationality: "",
    caste: "",
    dob: "",
    admission: "",
    leaving: "",
    class: "",
    fees: "",
    conduct: "",
    appdate: today,
    reason: "",
  });
  const [showCertificate, setShowCertificate] = useState(false);
  const certRef = useRef(null);

  useEffect(() => {
    async function fetchStudentData() {
      if (!pinFromNav) return;
      try {
        const response = await fetch(
          http://localhost:5000/students?pin=${encodeURIComponent(pinFromNav)}
        );
        const data = await response.json();
        if (data.length > 0) {
          const s = data[0];
          setFormData(prev => ({
            name: s.name || prev.name,
            pin: s.pin || prev.pin,
            father: s.father || prev.father,
            nationality: s.nationality || prev.nationality,
            caste: s.caste || prev.caste,
            dob: s.dob || prev.dob,
            admission: s.admission || prev.admission,
            leaving: s.leaving || prev.leaving,
            class: s.class || prev.class,
            fees: s.fees || prev.fees,
            conduct: s.conduct || prev.conduct,
            appdate: s.appdate || prev.appdate,
            reason: s.reason || prev.reason,
          }));
        }
      } catch (err) {
        console.error("Fetch student data failed:", err);
      }
    }
    fetchStudentData();
  }, [pinFromNav]);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const generateCertificate = () => setShowCertificate(true);
  const handlePrint = () => window.print();
  const handleDownload = () => {
    const element = certRef.current;
    const opts = {
      margin: 0.5,
      filename: ${formData.name || "certificate"}_TransferCertificate.pdf,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opts).save();
  };

  const handleSave = async () => {
    try {
      const res = await fetch("http://localhost:5000/save-certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert(res.ok ? "Certificate saved successfully." : "Failed to save.");
    } catch (err) {
      console.error("Save error:", err);
      alert("Error occurred while saving.");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Transfer Certificate Form
      </h2>
      <div className="form-section">
        {Object.entries(formData).map(([k, v]) => {
          const map = {
            name: "1. Name of Student",
            pin: "2. PIN",
            father: "3. Father's Name",
            nationality: "4. Nationality / Religion",
            caste: "5. Caste",
            dob: "6. Date of Birth",
            admission: "7. Admission Date",
            leaving: "8. Leaving Date",
            class: "9. Class at Leaving",
            fees: "10. Fees Paid (Yes/No)",
            conduct: "11. Conduct & Character",
            appdate: "12. Application Date",
            reason: "13. Reason for Applying",
          };
          const type = ["dob", "admission", "leaving", "appdate"].includes(k)
            ? "date"
            : "text";
          return (
            <div key={k}>
              <label style={{ display: "inline-block", width: "250px", marginBottom: "8px" }}>
                {map[k]}:
              </label>
              <input
                type={type}
                id={k}
                value={v}
                onChange={handleChange}
                style={{ width: "300px", padding: "5px", marginBottom: "8px" }}
              />
              <br />
            </div>
          );
        })}
        <button onClick={generateCertificate} style={{ marginTop: "15px" }}>
          Generate Certificate
        </button>
      </div>
      {showCertificate && (
        <>
          <div
            ref={certRef}
            style={{
              marginTop: "40px",
              border: "2px solid black",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              GOVERNMENT POLYTECHNIC
              <br />
              CHODAVARAM - 521 032
              <br />
              TRANSFER CERTIFICATE
            </h2>
            <table style={{ width: "100%", lineHeight: "1.8em" }}>
              <tbody>
                {Object.entries(formData).map(([_, v], i) => {
                  const labels = [
                    "1. Name of Student",
                    "2. PIN",
                    "3. Father's Name",
                    "4. Nationality / Religion",
                    "5. Caste",
                    "6. Date of Birth",
                    "7. Date of Admission",
                    "8. Date of Leaving",
                    "9. Class",
                    "10. Fees Paid",
                    "11. Conduct & Character",
                    "12. Application Date",
                    "13. Reason for Applying",
                  ];
                  return (
                    <tr key={i}>
                      <td style={{ width: "40%", paddingRight: "10px" }}>{labels[i]}</td>
                      <td>: {v}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br />
            <br />
            <p style={{ float: "left" }}>Head of Section</p>
            <p style={{ float: "right" }}>Director</p>
            <div style={{ clear: "both" }}></div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button onClick={handlePrint} style={{ marginRight: "10px" }}>
              Print
            </button>
            <button onClick={handleDownload} style={{ marginRight: "10px" }}>
              Download PDF
            </button>
            <button onClick={handleSave}>Save</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TransferCertificate;