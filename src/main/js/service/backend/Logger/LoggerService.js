import axios from 'axios';
import backendServiceConf from "../../BackendServiceConf";
import authService from "../../AuthService";

/**
 * Simple function to send a log to the server
 * @param  {String} level Level of the log message 
 * @param  {String} message Body message of the log
 */
export default function Logger(level, message) {
    
    backendServiceConf.config(axios);
    axios.post('/api/logger', {        
        level: level,
        message: message,
        usuario: authService.getUser().user,
    }).then(function (r) { return true; });
}
