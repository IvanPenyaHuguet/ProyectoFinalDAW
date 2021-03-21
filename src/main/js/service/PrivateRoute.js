import React, { useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "../context/AuthContextProvider";

export default function PrivateRoute ({component: Component, ...rest}) {
    const { user, setUser} = useContext(AuthContext);

    return (        
        <Route {...rest} render={props => (
            user!==null ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    )
}