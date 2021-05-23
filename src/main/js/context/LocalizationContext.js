import React, { createContext } from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";


export const LocalizationContext = createContext(localStorage.getItem("language") ?? 'en');

export default function LocalizationContextProvider ({children}) {

    const [ language, setLanguage ] = useState(localStorage.getItem("language") ?? 'en');   
    const [ t, i18n ] = useTranslation(); 

    useEffect ( () => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    }, [language]);    

    return (
        <LocalizationContext.Provider value={{ language, setLanguage }}>
            { children }
        </LocalizationContext.Provider>
    )
}