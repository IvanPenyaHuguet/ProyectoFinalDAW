import React, {useContext, Suspense} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/user/Login";
//import Index from "./pages/Index";
const Index = React.lazy(() => import("./pages/Index.js"));
import PrivateRoute from "./service/PrivateRoute";
import AllReagents from './pages/reagent/AllReagents';
import IndexInorganic from './pages/reagent/inorganic/Index';
import IndexOrganic from './pages/reagent/organic/Index';
import IndexSolWater from './pages/solution/water/Index';
import IndexSolOrg from './pages/solution/organic/Index';
import NotFound from './pages/404';

import Loader from './components/container/Loader';

import { AuthContext } from "./context/AuthContextProvider";


export default function Router() {
  const { user, setUser} = useContext(AuthContext);

  return (
    <Suspense fallback={<Loader />}>	
      <Switch>  
        <Route exact strict path="/">        
          { user !== null ? <Redirect push to="/chemdata" /> : <Redirect push to="/login" /> }
        </Route>
        <Route exact path="/login" component={Login} />      
        <PrivateRoute exact path="/chemdata" component={Index} /> 
        <PrivateRoute exact path="/reagent/all" component={AllReagents}/>    
        <PrivateRoute exact path="/reagent/inorganic" component={IndexInorganic}/>   
        <PrivateRoute exact path="/reagent/organic" component={IndexOrganic}/> 
        <PrivateRoute exact path="/solution/water" component={IndexSolWater}/>
        <PrivateRoute exact path="/solution/organic" component={IndexSolOrg}/>       
        <Route component={NotFound} /> 
      </Switch>
    </Suspense>
  );
}
