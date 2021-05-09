import { useHistory } from "react-router-dom";
import authService from "../AuthService";
import Logger from "../backend/Logger/LoggerService";
import i18next from 'i18next';

class ErrorController {

    checkError (e, setAlert) {       
        switch (e.response.status){
            case 400: this.error400(e, setAlert);
                break;
            case 403: this.error403(e);
                break;
            case 401: this.error401(e);
                break;
            default: console.log(e.message);
                     console.log("Uncontrolled error from server");
        }
    }
    error400(e, setAlert) {
        Logger('warn', 'Something bad happened on server url:' + e.response.config.url +", method:"+e.response.config.method);
        setAlert ? setAlert({type: 'error', message: i18next.t('error.controller.400')}) : null;
    }

    error401 (e) {
        Logger('warn', 'Something bad happened on server url:' + e.response.config.url +",method:"+e.response.config.method);        
    }

    error403 (e) {
        authService.signout(); 
        window.location.replace("/");              
    }

    default (e) {
        Logger('warn', 'Something bad happened on server url:' + e.response.config.url +",method:"+e.response.config.method);
    }

}
export default new ErrorController ();