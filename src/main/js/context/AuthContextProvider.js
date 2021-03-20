import React, {createContext, useState, useLayoutEffect} from 'react';
import authService from '../service/AuthService';

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {  
    const [ user, setUser] = useState(stateFunction());    

    function stateFunction () {
        const localUser = authService.getUser();  
        let user;      
        if ( localUser ) {        
            authService.validate()
                .then(res => user = localUser)
                .catch(e => user = null)                        
        }
        else {
            user = null;
        }  
        return user; 
    }    
   

    return (
        <AuthContext.Provider value={{user, setUser}}> 
            {children}
        </AuthContext.Provider>	
    )
}
export default AuthContextProvider;
