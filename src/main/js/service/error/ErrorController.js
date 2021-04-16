import { useHistory } from "react-router-dom";
import authService from "../AuthService";
import Logger from "../backend/Logger/LoggerService";

class ErrorController {

    checkError (e) {       
        switch (e.response.status){
            case 403: this.error403(e);
                break;
            case 401: this.error401(e);
                break;
            default: console.log(e.message);
                     console.log("Uncontrolled error from server");
        }
    }
    error401 (e) {
        Logger('warn', 'Something bad happened on server url:' + e.response.config.url +",method:"+e.response.config.method);        
    }

    error403 (e) {
        authService.signout();                
        const history = useHistory();
        history.push("/login");
    }

    default (e) {
        Logger('warn', 'Something bad happened on server url:' + e.response.config.url +",method:"+e.response.config.method);
    }

}
export default new ErrorController ();