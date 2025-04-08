import {useRef} from "react";

const Ref=()=>{

   const inputRef=useRef()
   const textRef=useRef("Initial Text");

   const focusInput=()=>{
    inputRef.current.focus()
   }

    return(
        <div>
            <h1> use Ref</h1>
            <input ref={ inputRef} type="text"></input>
            <br></br>
            <button onClick={focusInput}>focus Input</button>
            <br></br>
            <p>{textRef.current}</p>
        
        </div>
    )
}
export default Ref;