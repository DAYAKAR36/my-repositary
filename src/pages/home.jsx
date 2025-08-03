import { useNavigate } from "react-router-dom"; 
function Homepage() {
  const n=useNavigate();
 function handlehlogin(e){
  e.preventDefault();
 n('/login');
 }
  return (
      <div className="homepagelogo"><div >
        <div className="content">
          <h1>Welcome to </h1>
          <h1>Government polytechnic </h1>
          <h1>Chodavaram</h1>
       
      <div className="hlogin">
      <button className="hlb" onClick={handlehlogin}>Login</button>
       </div>
      </div>
    </div>
      </div>
  
      );
}
export default Homepage;