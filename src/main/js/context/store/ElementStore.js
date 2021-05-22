import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import elementService from '../../service/backend/ElementService';

export const ElementStore = createContext([]);


export default function ElementStoreProvider ({children}) {
    
    const [ elements, setElements ] = useState([]);

    useEffect( () => {
        elementService.getAll().then( res => {
            setElements(res.data)            
        })             
    }, [])

    return (
        <ElementStore.Provider value={elements}>            
            {children}
        </ElementStore.Provider>
    )
}