import React, { useState } from"react"

const Home=()=>{
 

    // const[name,setname]=useState({})

//    return( 
//    <div>
      
//       {
//          name.value &&<h1>{`hi ${name.value}`}</h1>
//       }

//       <button onClick={()=>setname({value:"react"})}> change Name</button>
//     </div>
//     )

  

const[loggedin,setloggedin]=useState(false)
return( 
    <div>
       
       {
        loggedin ?<h1>1</h1>:<h1>please login</h1>
          
       }
 
       <button onClick={()=>setloggedin(!loggedin)}> change Number</button>
     </div>
     )






}

export default Home;