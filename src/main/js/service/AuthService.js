import axios from 'axios';
import { useHistory } from "react-router-dom";
import BackendServiceConf from "./BackendServiceConf";

/**
 * Service Class for working with authentication context
 */
class AuthenticationService {

    signin ( username, password ) {
        return axios.post("/authenticate", {username, password})       
            .then( res  => {
                if(res.data.token) {                        
                    localStorage.setItem("user", JSON.stringify(res.data));                     
                }                
                return res.data;                
            })
            .catch( e =>{                 
                return false;
            });
    }
    validate () { 
        try {  
            BackendServiceConf.config(axios);
            return axios.post("/validate", this.getUser());    
        } catch (e) {
            this.signout();
            const history = useHistory();
            history.push("/login");
            console.log("Validate bad");
        }        
    }
    signout() {        
        localStorage.removeItem("user");
    }    
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    register () {

    }
}
export default new AuthenticationService();