import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();


export default function MyContextProvider({ children }) {
    const [ info, setInfo ] = useState({ email: '', password: '' });
    return <MyContext.Provider value={{ 
        info,
        setInfo
    }}>{ children }</MyContext.Provider>
}

export function useInfo() {
    const context = useContext(MyContext)
    const { info, setInfo } = context;
    return { info, setInfo };
}