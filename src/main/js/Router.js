import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/user/Login";

export default function Router() {
  return (
    <Switch>
      <Route path="/reagent"></Route>
      <Route path="/reagent/add"></Route>
      <Route path="/admin/index">        
      </Route>
      <Route path="/user/signup">
        <Login />
      </Route>
    </Switch>
  );
}
