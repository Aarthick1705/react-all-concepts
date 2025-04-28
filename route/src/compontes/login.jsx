import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const Login=()=>{

  const {user}=useParams()

    const navicate=useNavigate();


  const handleNavigate=()=>{
      navicate("/")
  }


    return(
        <div>
           <h1> login-{user}</h1>
           <button onClick={handleNavigate}> move to home</button>
           
        </div>
    )
}
export default Login;