import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import supplierService from '../../service/backend/SupplierService';

export const SupplierStore = createContext([]);


export default function SupplierStoreProvider ({children}) {
    
    const [ suppliers, setSuppliers ] = useState([]);

    useEffect( () => {
        supplierService.getAll().then( res => {
            setSuppliers(res.data)
        })             
    }, [])

    return (
        <SupplierStore.Provider value={suppliers}>
            {children}
        </SupplierStore.Provider>
    )
}