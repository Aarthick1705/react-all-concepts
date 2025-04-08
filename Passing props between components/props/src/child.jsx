import React from "react";

const  Child=(props)=>{


    const{title}=props
    
    const{Changename}=props


    return(
        <div>
          
       <h1>{title}</h1>
       <button onClick={Changename}>Add</button>
            
        </div>
    )
}
export default Child;