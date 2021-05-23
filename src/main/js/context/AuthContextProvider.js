import React, {createContext, useState } from 'react';
import authService from '../service/AuthService';

export const AuthContext = createContext(authService.getUser());


const AuthContextProvider = ({children}) => {  
    const [ user, setUser] = useState(authService.getUser());      
    
    return (
        <AuthContext.Provider value={{user, setUser}}> 
            {children}
        </AuthContext.Provider>	
    )
}
export default AuthContextProvider;
