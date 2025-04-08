import React from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{

    const navigate=useNavigate();
   
 function onsumbit(){

 navigate("/dashboard");

 }

    return(
        <div>
        <h1>login page</h1>
        <button onClick={onsumbit}>Login</button>

  
      </div>
      )
}
    

 
export default Login;