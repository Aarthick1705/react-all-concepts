import React from "react";


const Home=()=>{

 const clickevent=(a,b)=>{
    console.log("amma")
    console.log(a);
    console.log(b);
 }

    return(
        <div>
            <h1>home</h1>
          <button onClick={()=>clickevent(19,45)}>press</button>
        </div>
    )
}
export default Home;