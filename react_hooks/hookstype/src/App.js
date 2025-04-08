import Sum from "./sum";
import Num from "./num";
import Ref from "./ref";
import Memo from "./memo";
import Component_c from "./component_c";
import React from "react";


 export const UserContext=React.createContext()
 export const ChannelContext=React.createContext()
 





function App() {
  return (
    <div>
    <Sum/>
    <Num/>
    <Ref/>
    <Memo/>
    <UserContext.Provider value={'vishwas'}>
        <ChannelContext.Provider value={'codevolution'}>
        <Component_c/>
        </ChannelContext.Provider>
    </UserContext.Provider>
 
    </div>
  );
}

export default App;
