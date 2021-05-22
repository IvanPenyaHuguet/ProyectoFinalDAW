import React from 'react';

import LocationStoreProvider from '../../context/store/LocationStore';
import SupplierStoreProvider from '../../context/store/SuppliersStore';
import ElementStoreProvider from '../../context/store/ElementStore';

export default function StoresLayout ({ children }) { 

    return (
        <>
            <LocationStoreProvider>   
                <SupplierStoreProvider>       
                    <ElementStoreProvider>       
                        { children }
                    </ElementStoreProvider> 
                </SupplierStoreProvider>                
            </LocationStoreProvider>
        </>
    )
}