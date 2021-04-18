import axios from 'axios';
import BackendServiceConf from '../BackendServiceConf';
import errorController from '../error/ErrorController';

class BaseService {   
    

    constructor (url) {
        BackendServiceConf.config(axios);
        this.URL = url;
    }   

    async getAll() {
      let data = null;
      try {
        data = await axios.get("/api" + this.URL);
      } catch (e) {      
        errorController.checkError(e);
      }    
      return data;
    }  
    
    async getPage ( page, size, sortBy) {      
      return await axios.get("/api" + this.URL + "/page", {
        params: {
          page: page,
          size: size,
          sortBy: sortBy[0] ? sortBy[0].id : null,
          sortByDirection: sortBy[0] ? sortBy.desc === true ? 'DESC': 'ASC' : null,
        }        
      })
    }

    async getPageLocation ( location, page, size, sortBy ) {
      return await axios.get("/api" + this.URL + "/location", {
        params: {
          location: location,
          page: page,
          size: size,
          sortBy: sortBy[0] ? sortBy[0].id : null,
          sortByDirection: sortBy[0] ? sortBy.desc === true ? 'DESC': 'ASC' : null,
        }        
      })
    }
}  
    
export default BaseService;