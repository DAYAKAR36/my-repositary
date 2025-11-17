import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

function StudentBusPassForm() {
  const certRef = useRef(null);

  const [formData,setFormData] = useState({}); // Optional: store form values if needed

  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Download PDF function
  const handleDownload = () => {
    const element = certRef.current;
    const opts = {
      margin: 0.5,
      filename: `StudentBusPass.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opts).save();
  };

  // Save function (example, adjust your backend endpoint)
  const handleSave = () => {
    fetch("http://localhost:5000/save-buspass", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) =>
        alert(res.ok ? "Bus Pass saved successfully." : "Failed to save.")
      )
      .catch((err) => {
        console.error(err);
        alert("Error occurred while saving.");
      });
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      {/* Container for form + certificate preview */}
      <div ref={certRef} style={{ border: "2px solid black", padding: "20px", backgroundColor: "white", position: "relative" }}>
        {/* Watermark */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: 'url("png-clipart-guntur-vijayawada-bus-nellore-andhra-pradesh-state-road-transport-corporation-bus-emblem-logo-thumbnail.png") no-repeat center',
            backgroundSize: "contain",
            opacity: 0.12,
            zIndex: -1,
          }}
        ></div>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "2px solid #000", paddingBottom: "10px" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1 style={{ margin: 0, padding: 0 }}>ANDHRA PRADESH STATE ROAD TRANSPORT CORPORATION</h1>
            <h2 style={{ margin: 0, padding: 0 }}>STUDENT BUS PASS APPLICATION ABOVE SSC</h2>
          </div>
          <div style={{ width: "140px", textAlign: "center", marginTop: "15px" }}>
            <div style={{ width: "120px", height: "150px", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "12px", textAlign: "center", lineHeight: 1.2, marginBottom: "5px", padding: "5px" }}>
              Photo <br /> (Upload or Placeholder)
            </div>
            <input type="file" accept="image/*" />
          </div>
        </div>

        {/* Previous ID Card */}
        <div style={{ marginTop: "15px" }}>
          <b>Previous ID Card No (2024-25):</b>
          <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} />
        </div>

        {/* Student 10th Details */}
        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "bold" }}>1. Student 10th Details</label><br />
          1.1 SSC Board Type:
          <input type="checkbox" style={{ marginLeft: "10px" }} /> APSSC
          <input type="checkbox" style={{ marginLeft: "10px" }} /> CBSE
          <input type="checkbox" style={{ marginLeft: "10px" }} /> ICSE
          <input type="checkbox" style={{ marginLeft: "10px" }} /> ORIENTAL
          <input type="checkbox" style={{ marginLeft: "10px" }} /> APOS
          <input type="checkbox" style={{ marginLeft: "10px" }} /> OTHER BOARD
          <br />
          1.2 SSC Pass Type:
          <input type="radio" name="ssctype" style={{ marginLeft: "10px" }} /> Regular
          <input type="radio" name="ssctype" style={{ marginLeft: "10px" }} /> Supplementary
          <br />
          1.3 SSC Year of Pass: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} />
          1.4 SSC Hall Ticket No: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} />
        </div>

        {/* Student Details */}
        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "bold" }}>2. Student Details</label><br />
          2.1 Name: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /><br />
          2.2 Father’s / Guardian’s Name: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /><br />
          2.3 Date of Birth: <input type="date" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /> As per SSC<br />
          2.4 Gender: <input type="radio" name="gender" style={{ marginLeft: "10px" }} /> Male
          <input type="radio" name="gender" style={{ marginLeft: "10px" }} /> Female <br />
          2.5 Is Employee Children: <input type="radio" name="empchild" style={{ marginLeft: "10px" }} /> Yes
          <input type="radio" name="empchild" style={{ marginLeft: "10px" }} /> No
          If Yes, Emp ID: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "100px", margin: "3px", padding: "2px" }} /><br />
          2.6 Mobile No.: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /><br />
        </div>

        {/* Residential Address */}
        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "bold" }}>3. Residential Address Details</label><br />
          3.1 District: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} />
          3.2 Mandal: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} /><br />
          3.3 Village: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} />
          3.4 Address: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /><br />
        </div>

        {/* Institution Details */}
        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "bold" }}>4. Institution Details</label><br />
          4.1 Institution Code: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "100px", margin: "3px", padding: "2px" }} />
          4.2 District: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "100px", margin: "3px", padding: "2px" }} /><br />
          4.3 Institution Name: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /><br />
          4.4 Course Name: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} />
          4.5 Present Course Year: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} /><br />
          4.6 Admission No: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} />
          4.7 Institution Address: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "250px", margin: "3px", padding: "2px" }} /><br />
        </div>

        {/* Route Details */}
        <div style={{ marginTop: "15px" }}>
          <label style={{ fontWeight: "bold" }}>5. Route Details</label><br />
          5.1 From Place: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} />
          5.2 To Place: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} /><br />
          5.3 From Place District: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} />
          5.4 To Place District: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} /><br />
          5.5 Pass Type: <input type="text" style={{ border: "none", borderBottom: "1px solid black", width: "150px", margin: "3px", padding: "2px" }} /><br />
        </div>

        {/* Declaration */}
        <div style={{ marginTop: "15px" }}>
          <b>Enclosures:</b> Bonafide Certificate, SSC Memo <br /><br />
          I hereby declare that the particulars given above are true and correct. I will abide by the rules & regulations of APSRTC governing issue of Bus Passes.
        </div>

        {/* Signatures */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }}>
          <div>Signature of Head of the Institute</div>
          <div>Signature of the Student</div>
        </div>

        {/* Bonafide */}
        <div style={{ marginTop: "30px", borderTop: "2px solid #000", paddingTop: "10px" }}>
          <h3>BONAFIDE CERTIFICATE</h3>
          I hereby certify that Sri/Kum/Smt <input type="text" /> is bonafide student of <input type="text" /> 
          (Name of the Institution) studying <input type="text" /> (Course) With Admission No <input type="text" /> 
          & Roll No <input type="text" />. <br />
          His/Her Date of Birth is <input type="date" /> as per office records and the course will be completed by <input type="date" />. <br />
          Educational Institute Recognition Code No <input type="text" /> (As per the D.E.O. records), Course Code No <input type="text" /> for the Academic Year <input type="text" />.
          <br /><br />
          Date: <input type="date" /> &nbsp;&nbsp;&nbsp; Place: <input type="text" />
          <br /><br />
          <div style={{ textAlign: "right" }}>Principal</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrint} style={{ marginRight: "10px" }}>Print</button>
        <button onClick={handleDownload} style={{ marginRight: "10px" }}>Download PDF</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default StudentBusPassForm;
