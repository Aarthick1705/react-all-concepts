import {createContext, userContext, useContext,useState} from "react";



const UserContext =createContext()

const Parentusingcontext=()=>{
    const[user]=useState('React developer');
    
    
    
        return(
           
               <UserContext.Provider value={user}>
                 <h1>Parentusingcontext</h1>
                < Component1 user={user}/>
          
               </UserContext.Provider>
    
            
        )

        
    function Component1(){
        return(
            <div>
                <h3> Component1</h3>
                <Component2 />
            </div>
        )
    }
    function Component2(){
        return(
            <div>
                <h3> Component2</h3>
                <Component3 />
            </div>
        )   
    }
    function Component3(){
        return(
            <div>
                <h3> Component3</h3>
                <Component4/>
            </div>
        )
    }
    function Component4(){
        return(
            <div>
                <h3> Component4</h3>
                <Component5 />
            </div>
        )
    }
    function Component5() {

      const user=useContext(UserContext)
        return(
            <div>
                <h3> Component5</h3>
                <h1>{`user is ${user}`}</h1>
            </div>
        )
    }
}


export default Parentusingcontext;