import React, { useState, useContext, useEffect } from "react";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {AuthContext} from "../../context/AuthContextProvider";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabBar({value, handleChange}) {

  const { user } = useContext(AuthContext);
  const [ userRole, setUserRole] = useState(user.role);

  useEffect( () => {
    if (user != null) {
        setUserRole(user.role);
    }
    else {
        setUserRole(null);
    }
}, [user])

  return (  
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={handleChange}   
        variant="scrollable"
        scrollButtons="auto"     
      >
        <Tab label="Usuarios" {...a11yProps(0)} disabled={!userRole.includes("ROLE_MODIFY_USERS")}/>                
        <Tab label="Funciones" {...a11yProps(1)} disabled={!userRole.includes("ROLE_ADD_ROLES")}/>        
      </Tabs>
    </AppBar>    
  )
}
