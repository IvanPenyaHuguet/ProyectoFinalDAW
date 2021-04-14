import React, { useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "../context/AuthContextProvider";
import Layout from '../components/layout/Layout';

export default function PrivateRoute ({component: Component, ...rest}) {
    const { user } = useContext(AuthContext);

    return (        
        <Route {...rest} render={props => (
            user!==null ?(
                <Layout>
                    <Component {...props} />
                </Layout>                
            )                
            : <Redirect to="/login" />
        )} />
    )
}