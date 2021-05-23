import React, { createContext, useState, useLayoutEffect } from "react";
import getScreenResolution from '../../lib/utils/ScreenResolution';

export const ResponsiveContext = createContext();

export default function ResponsiveContextProvider ({children}) {

    
    const [resolution, setResolution] = useState(getScreenResolution());

    useLayoutEffect ( () => { 
        const currentResolution = () => {
            setResolution(getScreenResolution());  
        }
        window.addEventListener("resize", currentResolution);
        currentResolution();
        return () => {
            window.removeEventListener("resize", currentResolution);
        };
    }, []);
    
    return (
        <ResponsiveContext.Provider value={{ resolution }}>
            { children }
        </ResponsiveContext.Provider>
    )
}