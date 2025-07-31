import React from "react";
import {BrowserRouter,Route,Routes} from "react-router";
import Login from "./login.jsx"
import Homepage from "./home.jsx";
function App(){
  return(
     <BrowserRouter>
     <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Homepage/>}/>
          </Routes>
          </BrowserRouter>
     );
   } 
    export default App;
