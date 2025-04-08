import React, { useState } from "react";

const Chanage=()=>{

   const[name,setname]=useState("rio");
   const[sum ,setsum]=useState(9);


   function handleinput(event){
    setname(event.target.value)

   }

   function handletext(event){
    setsum(event.target.value)

   }

    return(
        <div>
         <input value={name} 
         onChange={handleinput}/> 
         <p> Name:{name}</p>

         <input value={sum} 
         onChange={handletext} type="number"/>
         <p>number:{sum}</p>
        </div>
    )
}
export default Chanage;