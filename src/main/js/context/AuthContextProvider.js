import React, {createContext, useState, useEffect} from 'react';
import authService from '../service/AuthService';

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {  
    const [ user, setUser] = useState(null);    

    useEffect( () => {
        const localUser = authService.getUser();        
        if ( localUser ) {
            setUser(localUser);            
        }        
    }, [])
   

    return (
        <AuthContext.Provider value={{user, setUser}}> 
            {children}
        </AuthContext.Provider>	
    )
}
export default AuthContextProvider;
