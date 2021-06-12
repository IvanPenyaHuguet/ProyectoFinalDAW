import React, {useState} from "react";

import TabBar from "./TabBar";
import TabPanel from "./TabPanel";
import AdminUser from "./AdminUser";
import Funciones from "./Funciones";
import Locations from './locations/Locations';

export default function MainWindow() {

    const [ tab, setTab ] = useState(0)

    const handleTabChange = (e, newValue) => {
        setTab(newValue);
    }

  return (
    <>
      <TabBar value={tab} handleChange={handleTabChange}/>
      <TabPanel value={tab} index={0}>
        <AdminUser />        
      </TabPanel>     
      <TabPanel value={tab} index={1}>
        <Funciones />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <Locations />
      </TabPanel>
    </>
  );
}
