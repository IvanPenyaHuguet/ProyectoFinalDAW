import axios from 'axios';
import { useHistory } from "react-router-dom";
import BackendServiceConf from "./BackendServiceConf";
import errorController from "./error/ErrorController";

/**
 * Service Class for working with authentication context, manage server request
 */
class AuthenticationService {

    /**
     * Authentication function, request to server
     * @param  {String} username
     * @param  {String} password
     * @return  {Object} Data of the user logged or false
     */
    signin ( username, password ) {
        return axios.post("/authenticate", {username, password})       
            .then( res  => {
                if(res.data.token) {                        
                    localStorage.setItem("user", JSON.stringify(res.data));                     
                }                
                return res.data;                
            })
            .catch( e =>{                 
                return e.response;
            });
    }

    /**
     * Request to validate the token function
     * @return {Object} Response of the server
     */
    async validate () { 
        try {  
            BackendServiceConf.config(axios);
            const response = await axios.post("/validate", this.getUser()); 
            return response;
        } catch (e) {        
            errorController.checkError(e);
        }        
    }
    /**
     * Signout, removes all information storaged.
     */
    signout() {        
        localStorage.removeItem("user");
    } 
    /**
     * Get the user logged, from the localstorage.
     */   
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }    
}
export default new AuthenticationService();