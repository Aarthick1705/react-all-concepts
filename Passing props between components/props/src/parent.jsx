import React, { useState } from "react";
import Child from "./child";
import Passcomponent from "./passcomponent";

const Parent=()=>{
 
    const[name,setname]=useState('aarthick')

   const Changename=()=>{
      setname('raja')
   }

    return(

            <Passcomponent>
        
             <Child title={name} Changename={Changename}/>
            </Passcomponent>
       
    )
}
export default Parent;