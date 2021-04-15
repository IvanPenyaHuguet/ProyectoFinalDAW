import { useHistory } from "react-router-dom";
import authService from "../AuthService";
import Logger from "../backend/Logger/LoggerService";

class ErrorController {

    checkError (e) {
        switch (e.response){
            case 403: this.error403(e);
                break;
            default: console.log(e.message);
                     console.log("Uncontrolled error from server");
        }
    }

    error403 (e) {
        authService.signout();                
        const history = useHistory();
        history.push("/login");
    }

    default (e) {
        Logger('warning', 'The client received an uncontrolled error.');
    }

}
export default new ErrorController ();