import { createContext,useState } from "react";

export const PerfumesContext = createContext();

export const PerfumesProvider = ({ children }) => {

    const [count,setCount]=useState(0);

    console.log(count);


    return (
        <PerfumesContext.Provider value= {{
            count,
            setCount,
        }}>
            {children}
        </PerfumesContext.Provider>
    )
}