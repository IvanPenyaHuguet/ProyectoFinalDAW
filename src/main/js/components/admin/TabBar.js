import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function TabBar({value, handleChange}) {
  return (  
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={handleChange}   
        variant="scrollable"
        scrollButtons="auto"     
      >
        <Tab label="Usuarios" {...a11yProps(0)} />                
        <Tab label="Funciones" {...a11yProps(1)} />        
      </Tabs>
    </AppBar>    
  )
}
