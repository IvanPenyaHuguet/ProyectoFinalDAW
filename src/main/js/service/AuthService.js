import axios from 'axios';

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