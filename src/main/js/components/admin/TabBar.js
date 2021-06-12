import React, { useState, useContext, useEffect } from "react";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {AuthContext} from "../../context/AuthContextProvider";
import { useTranslation } from 'react-i18next';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabBar({value, handleChange}) {

  const { user } = useContext(AuthContext);
  const [ userRole, setUserRole] = useState(user.role);
  const { t } = useTranslation(); 

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
        <Tab label={t('admin.tab.title.users')} {...a11yProps(0)} disabled={!userRole.includes("ROLE_MODIFY_USERS")}/>                
        <Tab label={t('admin.tab.title.roles')} {...a11yProps(1)} disabled={!userRole.includes("ROLE_ADD_ROLES")}/>  
        <Tab label={t('admin.tab.title.locations')} {...a11yProps(2)} disabled={!userRole.includes("ROLE_ADD_LOCATION")}/>       
      </Tabs>
    </AppBar>    
  )
}
