import pic from './tc.jpg'
import './files.css';
import { useNavigate } from "react-router-dom"; 
function Card(){
    const n=useNavigate();
    function handles(e){
        e.preventDefault();
      n('/Tc');
    }
    return(
     <div className="doc" onClick={handles}>
     <img className="card"src={pic} alt='transfer certificate'></img>
     <h2>TC</h2>
     <p>Transfer Certificate</p>
     </div>
    );
}
export default Card;