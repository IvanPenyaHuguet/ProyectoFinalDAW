import React, { useState } from 'react';

import AddUser from './AddUser';
import UserTable from './UserTable';


export default function AdminUser () {

    const [ reload, setReload ] = useState(0);

    return (
        <>
            <AddUser reload={reload} setReload={setReload}/>
            <UserTable reload={reload}/>
        </>
    )
}