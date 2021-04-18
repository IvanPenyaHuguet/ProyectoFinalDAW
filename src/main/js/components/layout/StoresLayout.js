import React from 'react';

import LocationStoreProvider from '../../context/store/LocationStore';

export default function StoresLayout ({ children }) { 

    return (
        <>
            <LocationStoreProvider>
                { children }
            </LocationStoreProvider>
        </>
    )
}