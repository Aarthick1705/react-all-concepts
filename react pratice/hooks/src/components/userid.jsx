import React from "react";
import { useParams } from "react-router-dom";

const Userid=()=>{
    const{id} =useParams()

    return(
        <div>
            <h1>user profile pages</h1>
            <p>UserId is <b>{id}</b></p>
        </div>
    )
}
export default Userid;