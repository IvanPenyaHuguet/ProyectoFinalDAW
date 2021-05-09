import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import refMaskService from '../../service/backend/RefMaskService';

export const RefMaskStore = createContext([]);


export default function RefMaskStoreProvider ({children}) {
    
    const [ refMask, setRefMask ] = useState([]);

    useEffect( () => {
        refMaskService.getAll().then( res => {
            setRefMask(res.data)
        })             
    }, [])

    return (
        <RefMaskStore.Provider value={refMask}>
            {children}
        </RefMaskStore.Provider>
    )
}