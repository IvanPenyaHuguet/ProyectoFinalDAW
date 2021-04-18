import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import locationService from '../../service/backend/LocationService';

export const LocationStore = createContext([]);


export default function LocationStoreProvider ({children}) {
    
    const [ locations, setLocations ] = useState([]);

    useEffect( () => {
        locationService.getAll().then( res => {
            setLocations(res.data)
        })             
    }, [])

    return (
        <LocationStore.Provider value={locations}>
            {children}
        </LocationStore.Provider>
    )
}