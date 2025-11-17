import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

function StudentBusPassForm() {
  const certRef = useRef(null);

  const buttonStyle = {
    marginRight: "10px",
    background: "#b11226",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  };

  const printCSS = `
    @media print {
      .no-print {
        display: none !important;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        margin: 0;
        padding: 0;
        zoom: 85%; /* Adjust if needed */
      }
      #certificateBox {
        width: 100% !important;
        margin: 0 !important;
        padding: 10px !important;
      }
    }
  `;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = certRef.current;

    const opts = {
      margin: 0.4,
      filename: "StudentBusPass.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opts).save();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", background: "#f5f5f5" }}>
      {/* FIXED — No React Warning */}
      <style>{printCSS}</style>

      {/* Certificate */}
      <div
        id="certificateBox"
        ref={certRef}
        style={{
          width: "760px", // FIXED TO FIT A4
          margin: "auto",
          background: "white",
          padding: "25px",
          borderTop: "6px solid #b11226",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "480px",
            height: "480px",
            background:
              'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/APSRTC_Logo.png/800px-APSRTC_Logo.png") no-repeat center',
            backgroundSize: "contain",
            opacity: "0.09",
            zIndex: "-1",
          }}
        ></div>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ margin: 0, color: "#b11226", fontSize: "22px" }}>
            ANDHRA PRADESH STATE ROAD TRANSPORT CORPORATION
          </h1>
          <h3 style={{ margin: "5px 0", fontSize: "17px" }}>
            STUDENT BUS PASS APPLICATION ABOVE SSC
          </h3>
        </div>

        {/* Photo */}
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              width: "110px",
              height: "140px",
              border: "2px solid #b11226",
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
            }}
          >
            Photo
          </div>
          <br />
          <input type="file" accept="image/*" className="no-print" />
        </div>

        {/* Previous ID */}
        <div style={{ marginTop: "20px" }}>
          <b>Previous ID Card No (2024–25):</b>
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "250px",
              marginLeft: "10px",
            }}
          />
        </div>

        {/* SSC Details */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#b11226" }}>1. Student 10th Details</h3>

          1.1 SSC Board Type:
          <input type="checkbox" /> APSSC
          <input type="checkbox" style={{ marginLeft: "10px" }} /> CBSE
          <input type="checkbox" style={{ marginLeft: "10px" }} /> ICSE
          <input type="checkbox" style={{ marginLeft: "10px" }} /> ORIENTAL
          <input type="checkbox" style={{ marginLeft: "10px" }} /> APOS
          <input type="checkbox" style={{ marginLeft: "10px" }} /> OTHER BOARD

          <br />
          <br />

          1.2 SSC Pass Type:
          <input type="radio" name="ssctype" style={{ marginLeft: "10px" }} /> Regular
          <input type="radio" name="ssctype" style={{ marginLeft: "10px" }} /> Supplementary

          <br />
          <br />

          1.3 Year of Pass:
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "150px",
              marginLeft: "10px",
            }}
          />

          <br />
          <br />

          1.4 Hall Ticket No:
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "250px",
              marginLeft: "10px",
            }}
          />
        </div>

        {/* Student Details */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#b11226" }}>2. Student Details</h3>

          2.1 Name:
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "300px",
              marginLeft: "10px",
            }}
          />

          <br />
          <br />

          2.2 Father's / Guardian's Name:
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "300px",
              marginLeft: "10px",
            }}
          />

          <br />
          <br />

          2.3 Date of Birth:
          <input
            type="date"
            style={{ border: "none", borderBottom: "1px solid black", marginLeft: "10px" }}
          />{" "}
          As per SSC

          <br />
          <br />

          2.4 Gender:
          <input type="radio" name="gender" style={{ marginLeft: "10px" }} /> Male
          <input type="radio" name="gender" style={{ marginLeft: "10px" }} /> Female

          <br />
          <br />

          2.5 Employee Children:
          <input type="radio" name="emp" style={{ marginLeft: "10px" }} /> Yes
          <input type="radio" name="emp" style={{ marginLeft: "10px" }} /> No
          Emp ID:
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "120px",
              marginLeft: "10px",
            }}
          />

          <br />
          <br />

          2.6 Mobile No:
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "1px solid black",
              width: "250px",
              marginLeft: "10px",
            }}
          />
        </div>

        {/* Declaration */}
        <div style={{ marginTop: "30px", lineHeight: 1.5 }}>
          <b>Enclosures:</b> Bonafide Certificate, SSC Memo <br />
          <br />
          I hereby declare that the above information is true to the best of my knowledge.
        </div>

        <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between" }}>
          <b>Head of Institution</b>
          <b>Student Signature</b>
        </div>

        {/* Bonafide */}
        <div
          style={{
            marginTop: "40px",
            borderTop: "3px solid #b11226",
            paddingTop: "20px",
          }}
        >
          <h3 style={{ color: "#b11226" }}>BONAFIDE CERTIFICATE</h3>

          This is to certify that Sri/Kum/Smt:
          <input type="text" style={{ border: "none", borderBottom: "1px solid black" }} /> is a
          bonafide student of
          <input type="text" style={{ border: "none", borderBottom: "1px solid black" }} />{" "}
          studying in
          <input type="text" style={{ border: "none", borderBottom: "1px solid black" }} />.

          <br />
          <br />

          Date of Birth:
          <input type="date" style={{ border: "none", borderBottom: "1px solid black" }} /> Course
          ends by:
          <input type="date" style={{ border: "none", borderBottom: "1px solid black" }} />

          <div style={{ textAlign: "right", marginTop: "10px" }}>
            <b>Principal</b>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="no-print" style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handlePrint} style={buttonStyle}>
          Print
        </button>
        <button onClick={handleDownload} style={buttonStyle}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default StudentBusPassForm;
