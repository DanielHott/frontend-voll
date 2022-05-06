import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();


export default function MyContextProvider({ children }) {
    const [ info, setInfo ] = useState({ email: '', password: '' });
    const [ card, setCard ] = useState([]);
    return <MyContext.Provider value={{ 
        info,
        setInfo,
        card, setCard
    }}>{ children }</MyContext.Provider>
}

export function useInfo() {
    const context = useContext(MyContext)
    const { info, setInfo, card, setCard } = context;
    return { info, setInfo, card, setCard  };
}