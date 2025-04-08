import { useState } from "react";
import From from "./from";




function App() {

const[name,setname]=useState("hello world");


  return (
    <div>
   <From name={name}/>
    </div>
  );
}

export default App;
