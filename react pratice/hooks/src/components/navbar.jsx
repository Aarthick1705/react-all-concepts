import React from "react";

import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <nav>
            
            <ul className="style">
                <li> <Link to="/">Home</Link></li><br></br>
                <li><Link to="/user">User</Link></li><br></br>
                <li><Link to="/about">About</Link></li><br></br>
                <li><Link to="/contact">Contact</Link></li><br></br>
                <li><Link to="/user id/1">User 1</Link></li><br></br>
                <li><Link to="/user id/2">User 2</Link></li><br></br>
                <li><Link to="/login">Login</Link></li><br></br>
              
                
                
            </ul>
        </nav>
    )
}
export default Navbar;