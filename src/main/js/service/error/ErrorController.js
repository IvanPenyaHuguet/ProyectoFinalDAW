import { useHistory } from "react-router-dom";
import authService from "../AuthService";

class ErrorController {

    checkError (e) {
        switch (e.response){
            case 403: this.error403(e);
                break;
            default: console.log(e);
                     console.log("Uncontrolled error from server");
        }
    }

    error403 (e) {
        authService.signout();                
        const history = useHistory();
        history.push("/login");
    }

}
export default new ErrorController ();