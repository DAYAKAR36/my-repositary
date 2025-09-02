import React from "react";
import {BrowserRouter,Route,Routes} from "react-router";
import Homepage from "./pages/home.jsx";
import TransferCertificate from "./pages/Tc.jsx";
import Card from "./pages/files.jsx"; 
import LoginPage from "./pages/login.jsx";
import StudentSelPage from "./pages/sel.jsx";
import StudentPage from "./pages/StudentPage.jsx";
function App(){
  return(
     <BrowserRouter>
     <Routes>
          <Route path="/select" element={<StudentPage/>}/>
          <Route path="/sel" element={<StudentSelPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/tc" element={<TransferCertificate/>}/>
          <Route path="/files" element={<Card/>}/>
     </Routes>
          </BrowserRouter>
     );
   } 
    export default App;
