import { createContext, useContext, useMemo, useState } from "react";


const ThemeContext =createContext ()

const ThemeProvider=({children})=>{
    const[theme, setTheme]=useState("light");


    const toggleTheme=()=>{
        setTheme(prevTheme=>(prevTheme === "light" ? "dark":"light")); 

    }
     
    const value =useMemo(()=>({theme,toggleTheme}),[theme])
    return(
        <ThemeProvider value={value}>
            {children}
        </ThemeProvider>
    )
}

const useTheme =()=>{

    return useContext(ThemeContext)

 
}

export{ThemeProvider,useTheme}

