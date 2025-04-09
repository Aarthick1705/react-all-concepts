import React from "react";

const List=()=>{
  
    const items=['apple','betroot','caraat'];

      




    return(
        <div>
            <h1>list example </h1>

            <ul> 
                {items.map((item,index)=><li key={index}>{item}</li>


              

                )}
                
            </ul>
        </div>
    )
}
export default List;