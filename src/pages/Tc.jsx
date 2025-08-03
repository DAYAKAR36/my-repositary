import React from "react";

const TransferCertificate = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px", width: "700px", margin: "auto" }}>
      
      {/* Top Left and Right Info */}
      <div style={{ position: "relative", fontSize: "12px", height: "20px" }}>
        <div style={{ position: "absolute", left: "0" }}>
          T.C. No.
        </div>
        <div style={{ position: "absolute", right: "0" }}>
          Admission Register Page No.:
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px", marginTop: "10px" }}>
        <h1 style={{ margin: 0, fontSize: "24px" }}>GOVERNMENT POLYTECHNIC</h1>
        <h2 style={{ margin: "5px 0", fontSize: "18px" }}>CHODAWARAM - 521 032</h2>
        <h3 style={{ margin: "5px 0", fontSize: "20px" }}>TRANSFER CERTIFICATE</h3>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
  <tr>
    <td style={{ width: "30%", fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      1. Name of the Student in full (Block Letters)
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      2. PIN
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      3. Father's Name
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      4. Nationality / Religion
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      5. Caste
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      6. Date of Birth as entered in the admission Register
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      7. Date on which he/she was admitted into the Institution
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      8. Date on which he/she left the Institution
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      9. Class in which he/she was studying at the time of leaving (in words)
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      10. Whether he/she paid all fees or any other due to the Institution
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      11. Conduct and Character
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      12. Date of application for Transfer certificate
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
  <tr>
    <td style={{ fontWeight: "bold", padding: "5px 0", verticalAlign: "top" }}>
      13. Reason for applying
    </td>
    <td style={{ verticalAlign: "top" }}>:</td>
  </tr>
</table>

      {/* Date */}
      <div style={{ textAlign: "left", marginTop: "30px" }}>
        <strong>Date:</strong>
      </div>

      {/* Signature Section */}
      <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ textAlign: "center", width: "45%" }}>
          <p style={{ margin: 0}}>
            <strong>Head of Section</strong>
          </p>
        </div>
        <div style={{textAlign: "center", width: "45%" }}>
          <p style={{ margin: 0 }}>
           <strong>Principle</strong> 
          </p>
        </div>
      </div>
    </div>
  );
};
export default TransferCertificate;
