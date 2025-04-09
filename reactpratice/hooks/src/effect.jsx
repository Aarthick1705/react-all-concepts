import React, { useEffect, useState } from "react";

const Effect=()=>{

   const [sum1, setsum1]=useState(100);
   const [sum2, setsum2]=useState(1000);

  useEffect(()=>{
    setsum1(200);
    console.log("from use effect")

  },[sum1]);
//   console.log("sum1",sum1);

    return(
        <div>
            <h1>{sum1}</h1>
            <button onClick={()=>setsum1((curr)=>curr+1)}>Add   </button>
            <h1>{sum2}</h1>
            <button onClick={()=>setsum2((curr)=>curr+1)}>Add   </button>
        </div>
    )
};
export default Effect;