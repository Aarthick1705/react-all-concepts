import React, { useState } from "react";

const Sum=()=>{

 const[sum,setsum]=useState(0);
 const[count,setcount]=useState(1);

 function name(){
    let a=9;
    let b=9;
    let total=a+b;
    setcount(total)
 }




    return(
        <div>
        <h1>use state</h1>
        <p>{sum}</p>
        <h2> total:{count}</h2>
        <button onClick={()=>setsum(1)}>Add</button>
        <button onClick={()=>setcount(name)}>click</button>
       
       

        
    </div>
    )
}
export default Sum;