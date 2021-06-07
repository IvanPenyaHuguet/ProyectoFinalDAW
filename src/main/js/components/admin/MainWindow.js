import React, {useState} from "react";

import TabBar from "./TabBar";
import TabPanel from "./TabPanel";
import AddUser from "./AddUser";
import AdminUser from "./AdminUser";
import Funciones from "./Funciones";

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
        <AddUser />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <Funciones />
      </TabPanel>
    </>
  );
}
