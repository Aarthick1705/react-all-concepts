import React, { useEffect, useState } from "react";

const Num=()=>{

    const[count1,setcount1]=useState(0);
    

    useEffect(()=>{
        console.log("react js developer")

    },[count1])


    return(
        <div>
            <h1>use Effect</h1>
            <h1>{count1}</h1>
        
            <button onClick={()=>setcount1(count1 +1)}> increment 1</button>
           
        </div>
    )
}
export default Num;