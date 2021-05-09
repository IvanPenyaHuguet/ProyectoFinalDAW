import React from 'react';

import LocationStoreProvider from '../../context/store/LocationStore';
import SupplierStoreProvider from '../../context/store/SuppliersStore';

export default function StoresLayout ({ children }) { 

    return (
        <>
            <LocationStoreProvider>   
                <SupplierStoreProvider>             
                    { children }
                </SupplierStoreProvider>                
            </LocationStoreProvider>
        </>
    )
}