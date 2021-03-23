import React, {createContext, useState, useEffect, useRef, useContext} from 'react';
import authService from '../service/AuthService';

export const AuthContext = createContext(authService.getUser());


const AuthContextProvider = ({children}) => {  
    const [ user, setUser] = useState(authService.getUser());       
    
    useEffect( () => {
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
    }, []);  
   
   

    return (
        <AuthContext.Provider value={{user, setUser}}> 
            {children}
        </AuthContext.Provider>	
    )
}
export default AuthContextProvider;
