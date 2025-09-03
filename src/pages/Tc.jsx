import React, { useState } from "react";

function TransferCertificateForm() {
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
    appdate: "",
    reason: ""
  });

  const [show, setShow] = useState(false);

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    setFormData(function (prev) {
      return { ...prev, [id]: value };
    });
  }

  function generateCertificate() {
    setShow(true);
  }

  return (
    <div style={{ fontFamily: "Arial", margin: "30px" }}>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Transfer Certificate Form
      </h2>

      <div style={{ marginBottom: "20px" }}>
        <label>1. Name of Student:</label>
        <input id="name" value={formData.name} onChange={handleChange} /><br />

        <label>2. PIN:</label>
        <input id="pin" value={formData.pin} onChange={handleChange} /><br />

        <label>3. Father's Name:</label>
        <input id="father" value={formData.father} onChange={handleChange} /><br />

        <label>4. Nationality / Religion:</label>
        <input id="nationality" value={formData.nationality} onChange={handleChange} /><br />

        <label>5. Caste:</label>
        <input id="caste" value={formData.caste} onChange={handleChange} /><br />

        <label>6. Date of Birth:</label>
        <input type="date" id="dob" value={formData.dob} onChange={handleChange} /><br />

        <label>7. Admission Date:</label>
        <input type="date" id="admission" value={formData.admission} onChange={handleChange} /><br />

        <label>8. Leaving Date:</label>
        <input type="date" id="leaving" value={formData.leaving} onChange={handleChange} /><br />

        <label>9. Class at Leaving:</label>
        <input id="class" value={formData.class} onChange={handleChange} /><br />

        <label>10. Fees Paid (Yes/No):</label>
        <input id="fees" value={formData.fees} onChange={handleChange} /><br />

        <label>11. Conduct & Character:</label>
        <input id="conduct" value={formData.conduct} onChange={handleChange} /><br />

        <label>12. Application Date:</label>
        <input type="date" id="appdate" value={formData.appdate} onChange={handleChange} /><br />

        <label>13. Reason for Applying:</label>
        <input id="reason" value={formData.reason} onChange={handleChange} /><br /><br />

        <button onClick={generateCertificate}>Generate Certificate</button>
      </div>

      {show && (
        <div style={{ marginTop: "40px", border: "2px solid black", padding: "20px" }}>
          <h2 style={{ textAlign: "center" }}>
            GOVERNMENT POLYTECHNIC<br />
            CHODAVARAM - 521 032<br />
            TRANSFER CERTIFICATE
          </h2>
          <p>1. Name of Student: {formData.name}</p>
          <p>2. PIN: {formData.pin}</p>
          <p>3. Father's Name: {formData.father}</p>
          <p>4. Nationality / Religion: {formData.nationality}</p>
          <p>5. Caste: {formData.caste}</p>
          <p>6. Date of Birth: {formData.dob}</p>
          <p>7. Date of Admission: {formData.admission}</p>
          <p>8. Date of Leaving: {formData.leaving}</p>
          <p>9. Class: {formData.class}</p>
          <p>10. Fees Paid: {formData.fees}</p>
          <p>11. Conduct & Character: {formData.conduct}</p>
          <p>12. Application Date: {formData.appdate}</p>
          <p>13. Reason for Applying: {formData.reason}</p>

          <br /><br />
          <p style={{ float: "left" }}>Head of Section</p>
          <p style={{ float: "right" }}>Director</p>
          <div style={{ clear: "both" }}></div>
        </div>
      )}
    </div>
  );
}

export default TransferCertificateForm;
