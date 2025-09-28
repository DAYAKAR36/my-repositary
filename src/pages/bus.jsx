import React from 'react';

function StudentBusPassForm() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-text">
          <h1>ANDHRA PRADESH STATE ROAD TRANSPORT CORPORATION</h1>
          <h2>STUDENT BUS PASS APPLICATION ABOVE SSC</h2>
        </div>
        <div className="photo-upload">
          <div className="photo-box">
            Photo <br />(Upload or Placeholder)
          </div>
          <input type="file" accept="image/*" />
        </div>
      </div>

      <div className="section">
        <b>Previous ID Card No (2024-25):</b>
        <input type="text" />
      </div>

      <div className="section">
        <label>1. Student 10th Details</label><br />
        1.1 SSC Board Type:
        <input type="checkbox" /> APSSC
        <input type="checkbox" /> CBSE
        <input type="checkbox" /> ICSE
        <input type="checkbox" /> ORIENTAL
        <input type="checkbox" /> APOS
        <input type="checkbox" /> OTHER BOARD
        <br />
        1.2 SSC Pass Type:
        <input type="radio" name="ssctype" /> Regular
        <input type="radio" name="ssctype" /> Supplementary
        <br />
        1.3 SSC Year of Pass: <input type="text" />
        1.4 SSC Hall Ticket No: <input type="text" />
      </div>

      <div className="section">
        <label>2. Student Details</label><br />
        2.1 Name: <input type="text" /><br />
        2.2 Father’s / Guardian’s Name: <input type="text" /><br />
        2.3 Date of Birth: <input type="date" /> As per SSC<br />
        2.4 Gender:
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <br />
        2.5 Is Employee Children:
        <input type="radio" name="empchild" /> Yes
        <input type="radio" name="empchild" /> No
        If Yes, Emp ID: <input type="text" />
        <br />
        2.6 Mobile No: <input type="text" />
      </div>

      <div className="section">
        <label>3. Residential Address Details</label><br />
        3.1 District: <input type="text" />
        3.2 Mandal: <input type="text" /><br />
        3.3 Village: <input type="text" />
        3.4 Address: <input type="text" /><br />
      </div>

      <div className="section">
        <label>4. Institution Details</label><br />
        4.1 Institution Code: <input type="text" />
        4.2 District: <input type="text" /><br />
        4.3 Institution Name: <input type="text" /><br />
        4.4 Course Name: <input type="text" />
        4.5 Present Course Year: <input type="text" /><br />
        4.6 Admission No: <input type="text" />
        4.7 Institution Address: <input type="text" /><br />
      </div>

      <div className="section">
        <label>5. Route Details</label><br />
        5.1 From Place: <input type="text" />
        5.2 To Place: <input type="text" /><br />
        5.3 From Place District: <input type="text" />
        5.4 To Place District: <input type="text" /><br />
        5.5 Pass Type: <input type="text" />
      </div>

      <div className="section">
        <b>Enclosures:</b> Bonafide Certificate, SSC Memo <br /><br />
        I hereby declare that the particulars given above are true and correct. I will abide by the rules & regulations of APSRTC governing issue of Bus Passes.
      </div>

      <div className="signatures">
        <div>Signature of Head of the Institute</div>
        <div>Signature of the Student</div>
      </div>

      <div className="bonafide">
        <h3>BONAFIDE CERTIFICATE</h3>
        I hereby certify that Sri/Kum/Smt <input type="text" /> is bonafide student of <input type="text" /> (Name of the Institution) studying <input type="text" /> (Course) With Admission No <input type="text" /> & Roll No <input type="text" />.
        <br />
        His/Her Date of Birth is <input type="date" /> as per office records and the course will be completed by <input type="date" />.
        <br />
        Educational Institute Recognition Code No <input type="text" /> (As per the D.E.O. records), Course Code No <input type="text" /> for the Academic Year <input type="text" />.
        <br /><br />
        Date: <input type="date" /> &nbsp;&nbsp;&nbsp; Place: <input type="text" />
        <br /><br />
        <div style={{ textAlign: 'right' }}>Principal</div>
      </div>
    </div>
  );
}

export default StudentBusPassForm;
