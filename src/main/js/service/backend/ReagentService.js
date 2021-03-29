import axios from 'axios';
import BackendServiceConf from '../BackendServiceConf';

class ReagentService {   
    

    constructor (url) {
        BackendServiceConf.config(axios);
        this.URL = url;
    }   

    async getAll() {
      let data = null;
      try {
        data = await axios.get("/api" + this.URL);
      } catch (e) {      
        console.log(e);
      }    
      return data;
    }  
    
    async getPage ( page, size) {
      return await axios.get("/api" + this.URL + "/page", {
        params: {
          page: page,
          size: size
        }        
      })
    }
}  
    
export default ReagentService;