import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import StudentPage from "./pages/sel.jsx";
import StudentPage1 from "./pages/StudentPage.jsx";
import TransferCertificate from "./pages/Tc.jsx";
import StudentBusPassForm from "./pages/bus.jsx";
import StudyConductCertificate from "./pages/STUDY.jsx";
import Card from "./pages/files.jsx";
import AdmissionBook from "./pages/admission.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admission" element={<AdmissionBook />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sel" element={<StudentPage />} />
        <Route path="/select" element={<StudentPage1 />} />
        <Route path="/tc" element={<TransferCertificate />} />
        <Route path="/bus" element={<StudentBusPassForm />} />
        <Route path="/study" element={<StudyConductCertificate />} />
        <Route path="/files" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
