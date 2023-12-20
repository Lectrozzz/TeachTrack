// Import react
import { useNavigate } from "react-router-dom";

const HomeButton = () =>{
    const navigate=useNavigate();
    
    return(
        <button className="btn blueButton" onClick={()=>navigate("/")}>Home</button>
    )
}

export default HomeButton;