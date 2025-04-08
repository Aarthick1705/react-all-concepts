import React from "react";
import { UserContext } from "./App";

const Component_f=()=>{
    return(
        <div> 
            <UserContext.Consumer>
                {
                    user=>{
                        return<div>User context value{user}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default Component_f;