import React, { useState, useEffect } from 'react';

import SelectUser from './funciones/SelectUser';
import SelectFunciones from './funciones/SelectFunciones';

import RoleService from '../../service/backend/Services/RoleService';


export default function Funciones () {

    const [ user, setUser ] = useState(undefined);
    const [ allRoles, setAllRoles ] = useState([]);
    
    useEffect(() => {
        RoleService.getAll()
        .then(res => {
            setAllRoles(res.data);
        })
    },[])

    return (
        <>
            <SelectUser user={ user } setUser={ setUser } />
            {user && <SelectFunciones user= { user } setUser={ setUser } allRoles={ allRoles }/>}
        </>
    )
}