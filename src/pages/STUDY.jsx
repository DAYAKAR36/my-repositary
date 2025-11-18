import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

function StudyConductCertificate() {
  // Fixed student details
  const student = {
    name: "John Doe",
    fatherName: "Sri XYZ",
    pin: "24635-cm-021",
    branch: "CME",
    doa: "2022",
    completionDate: "2025"
  };

  // Fixed date
  const today = "2025-11-18";

  const certificateRef = useRef();

  // Form data initialized from fixed values
  const [formData, setFormData] = useState({
    slno: "1",
    date: today,
    name: student.name,
    fatherName: student.fatherName,
    pin: student.pin,
    branch: student.branch,
    doa: student.doa,
    completionDate: student.completionDate,
    conduct: "Good"
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  }

  function handlePrint() {
    window.print();
  }

  function handleDownload() {
    html2pdf()
      .set({ margin: 0.5, filename: "StudyCertificate.pdf", html2canvas: { scale: 2 } })
      .from(certificateRef.current)
      .save();
  }

  function handleSave() {
    fetch("http://localhost:5000/api/certificate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => alert("Certificate saved successfully!"))
      .catch(() => alert("Error saving certificate"));
  }

  return (
    <>
      <style>{`
        body {
          background: #f5f6f7;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        .certificate {
          background: #fff;
          padding: 25px;
          width: 800px;
          margin: 40px auto;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .h2 {
          text-align: center;
          font-weight: bold;
          font-family: Constantia;
          background-color: #080808ff; 
          color: white;
          padding: 6px 0;
          border-radius: 6px;
        }

        .center {
          text-align: center;
          font-weight: bold;
          font-family: Constantia;
        }

        .center1 {
          text-align: center;
          font-weight: bold;
          font-family: Calibri;
        }

        .inputs,
        .inputs1,
        .l1, .l2, .l3, .l4, .l5, .l6, .l7 {
          border: none;
          border-bottom: 2px dotted #0e0d0dff;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
          padding-left: 4px;
        }

        .inputs { width: 500px; }
        .inputs1 { width: 150px; }
        .l1 { width: 500px; }
        .l2 { width: 300px; }
        .l3 { width: 250px; }
        .l4 { width: 400px; }
        .l5 { width: 140px; }
        .l6 { width: 145px; }
        .l7 { width: 200px; }

        .plain-input {
          font-family: Constantia;
          font-style: italic;
          font-weight: bold;
          border: none;
          outline: none;
        }

        .content {
          font-style: italic;
          font-family: Constantia;
          font-weight: bold;
          color: #333;
        }

        .signatures {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          font-family: Constantia;
          font-style: italic;
          font-weight: bold;
          color: #444;
        }

        .buttons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .buttons button {
          background: #b60000;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
        }

        .buttons button:hover {
          background: #8d0000;
        }
      `}</style>

      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <div ref={certificateRef} className="certificate">
          <p className="center"><b>Government of Andhra Pradesh<br />Department of Technical Education</b></p>
          <p className="center1"><b>GOVERNMENT POLYTECHNIC, CHODAVARAM-531 036.</b></p>
          <h2>
            <center><span className="h2">STUDY AND CONDUCT CERTIFICATE</span></center>
          </h2>

          <div className="plain-input">
            <p>
              Sl.No. <input id="slno" type="text" className="plain-input" value={formData.slno} onChange={handleChange} />
              <span style={{ float: "right" }}>
                Date: <input id="date" type="text" className="inputs1" value={formData.date} onChange={handleChange} />
              </span>
            </p>
            <br />
            <div className="content">
              <p>
                This is to Certify that Mr./Kum <input id="name" type="text" className="l1" value={formData.name} onChange={handleChange} /><br /><br />
                S/o./D/o., Sri <input id="fatherName" type="text" className="l2" value={formData.fatherName} onChange={handleChange} /> 
                bearing PIN <input id="pin" type="text" className="l3" value={formData.pin} onChange={handleChange} />
              </p>
              <p>
                has studied Three years Diploma course in <input id="branch" type="text" className="l4" value={formData.branch} onChange={handleChange} /><br /><br />
                at this institution during the academic year from <input id="doa" type="text" className="l5" value={formData.doa} onChange={handleChange} /> 
                to <input id="completionDate" type="text" className="l6" value={formData.completionDate} onChange={handleChange} />.
              </p>
              <p>
                His / Her Conduct during the period of study at this institution is <input id="conduct" type="text" className="l7" value={formData.conduct} onChange={handleChange} />.
              </p>
              <div className="signatures">
                <p>Clerk</p>
                <p>Head of Section</p>
                <p>Principal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons outside certificate */}
        <div className="buttons">
          <button onClick={handlePrint}>Print</button>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
    </>
  );
}

export default StudyConductCertificate;
