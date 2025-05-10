import React from "react";
import { Link, Outlet } from "react-router-dom";

const Produts=()=>{
    return(
        <div>
            <p> <h1>pen produts was very nice </h1></p>
            <Link to ="list">List</Link>
            <Link to ="details">Details</Link>
            <Outlet/>

        </div>
    )
}
export default Produts;