import React, {useContext} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/user/Login";
import Index from "./pages/Index";
import PrivateRoute from "./service/PrivateRoute";

import { AuthContext } from "./context/AuthContextProvider";

export default function Router() {
  const { user, setUser} = useContext(AuthContext);

  return (
    <Switch>  
      <Route exact strict path="/">        
        { user !== null ? <Redirect push to="/chemdata" /> : <Redirect push to="/login" /> }
      </Route>
      <Route exact path="/login" component={Login} />      
      <PrivateRoute exact path="/chemdata" component={Index} /> 
      <Route path="/reagent/add" />
          
       
    </Switch>
  );
}
