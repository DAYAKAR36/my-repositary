import React from "react";
import {BrowserRouter,Route,Routes} from "react-router";
import Login from "./pages/login.jsx"
import Homepage from "./pages/home.jsx";
import TransferCertificate from "./pages/Tc.jsx";
import Card from "./pages/files.jsx"; 
function App(){
  return(
     <BrowserRouter>
     <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/tc" element={<TransferCertificate/>}/>
          <Route path="/files" element={<Card/>}/>
     </Routes>
          </BrowserRouter>
     );
   } 
    export default App;
