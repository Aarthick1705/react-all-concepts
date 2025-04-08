import React, { useState } from "react";

const Parentusinglocalstate=()=>{

const[user]=useState('React');



    return(
        <div>
            <h1> Parentusinglocalstate</h1>
            < Component1 user={user}/>
        </div>

        
    )


    function Component1(user){
        return(
            <div>
                <h3> Component1</h3>
                <Component2 user={user}/>
            </div>
        )
    }
    function Component2(user){
        return(
            <div>
                <h3> Component2</h3>
                <Component3 user={user}/>
            </div>
        )
    }
    function Component3(user){
        return(
            <div>
                <h3> Component3</h3>
                <Component4 user={user}/>
            </div>
        )
    }
    function Component4(user){
        return(
            <div>
                <h3> Component4</h3>
                <Component5 user={user}/>
            </div>
        )
    }
    function Component5(user){
        return(
            <div>
                <h3> Component5</h3>
                <h1>{`user is ${user}`}</h1>
            </div>
        )
    }
}



export default Parentusinglocalstate;