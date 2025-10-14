import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Homepage from "./pages/home.jsx";
import TransferCertificate from "./pages/Tc.jsx";
import Card from "./pages/files.jsx"; 
import LoginPage from "./pages/login.jsx";
import StudentPage from "./pages/sel.jsx";
import StudentPage1 from "./pages/StudentPage.jsx";
import StudentBusPassForm from "./pages/bus.jsx";
import StudyConductCertificate from "./pages/STUDY.jsx";
function App(){
  return(
     <BrowserRouter>
     <Routes>
          <Route path="/study" element={<StudyConductCertificate/>}/>
          <Route path="/bus" element={<StudentBusPassForm/>}/>
          <Route path="/select" element={<StudentPage1/>}/>
          <Route path="/sel" element={<StudentPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/tc" element={<TransferCertificate/>}/>
          <Route path="/files" element={<Card/>}/>
     </Routes>
          </BrowserRouter>
     );
   } 
    export default App;
