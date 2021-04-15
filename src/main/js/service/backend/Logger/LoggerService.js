import axios from 'axios';
import backendServiceConf from "../../BackendServiceConf";

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
        usuario: JSON.parse(localStorage.getItem('user'))
    }).then(function (r) { return true; });
}
