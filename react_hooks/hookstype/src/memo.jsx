import React, { useMemo, useState } from "react";

const Memo=()=>{

 const[count,setcount]=useState(0);
 const[multiplier,setmultiper]=useState(0)

 const multipliedValue= useMemo(()=>{
    return count*2;

 },[count,multiplier])

 const handleIncrement=()=>{
    setcount ((c)=>c+1);
 };




    return(
        <div>
            <h1>use Memo</h1>
            <h1>the count is {count} </h1>
            <div>multiplied Value is{multipliedValue}</div><br/>
            <input type="number" value={multiplier}onChange={(e)=>setmultiper(Number(e.target.value))}/>
            <counter multiplier={multiplier}/>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
export default Memo;