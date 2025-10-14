import React from "react";
function StudyConductCertificate() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "40px",
      }}
    >
      <style>{`
        .certificate {
          border: 2px solid black;
          padding: 20px;
          width: 800px;
        }
        .h2 {
          text-align: center;
          font-weight: bold;
          font-family: Constantia;
          background-color: black;
          color: white;
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
        .inputs {
          width: 500px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .inputs1 {
          width: 150px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l1 {
          width: 565px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l2 {
          width: 350px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l3 {
          width: 250px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l4 {
          width: 475px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l5 {
          width: 200px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l6 {
          width: 200px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .l7 {
          width: 100px;
          border: none;
          border-bottom: 2px dotted black;
          outline: none;
          font-size: 16px;
          font-family: Constantia;
        }
        .signatures {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          font-family: Constantia;
          font-style: italic;
        }
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
        }
      `}</style>

      <div className="certificate">
        <p className="center">
          <b>
            Government of Andhra Pradesh
            <br />
            Department of Technical Education
          </b>
        </p>

        <p className="center1">
          <b>GOVERNMENT POLYTECHNIC, CHODAVARAM-531 036.</b>
        </p>

        <h2 style={{ textAlign: "center" }}>
          <span className="h2">STUDY AND CONDUCT CERTIFICATE</span>
        </h2>

        <div className="plain-input">
          <p>
            Sl.No. <input type="text" className="plain-input" />{" "}
            <span style={{ float: "right" }}>
              Date: <input type="text" className="inputs1" />
            </span>
          </p>
          <br />

          <div className="content">
            <p>
              This is to Certify that Mr./Kum{" "}
              <input type="text" className="l1" /> <br />
              <br />
              S/o./D/o., Sri <input type="text" className="l2" /> bearing PIN{" "}
              <input type="text" className="l3" />
            </p>

            <p>
              has studied Three years Diploma course in{" "}
              <input type="text" className="l4" /> <br />
              <br />
              at this institution during the academic year from{" "}
              <input type="text" className="l5" /> to{" "}
              <input type="text" className="l6" /> .
            </p>

            <p>
              His / Her Conduct during the period of study at this institution
              is <input type="text" className="l7" style={{ width: "300px" }} />.
            </p>

            <div className="signatures">
              <p>Clerk</p>
              <p>Head of Section</p>
              <p>Principal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyConductCertificate;
