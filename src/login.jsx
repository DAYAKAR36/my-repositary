
import React ,{useState} from "react";
function Login(){
const [name,setName] = useState("");
const [pass,setPass] = useState("");
function handleNameChange(event){
  setName(event.target.value);
}
function handlePassChange(event){
  setPass(event.target.value)
}
function handleLogin(){
  if(name === usename && pass === passwoord){
    alert("login successful");
  }
  else
  {
    alert("failed");
  }
}
const usename="dayakar";
const passwoord="dayakar123";
    return(
    <div className="loginform">
     <input   onChange={handleNameChange} className="usernames" placeholder="enter username"/><br/>
     <input   onChange={handlePassChange} className="passwords" placeholder="enter password"/><br/>
          <button className="login-button" onClick={handleLogin}>login</button>
      </div>
    );
}
export default Login;