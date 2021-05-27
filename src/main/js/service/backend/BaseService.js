import axios from 'axios';
import BackendServiceConf from '../BackendServiceConf';
import errorController from '../error/ErrorController';
import dateUtil from '../../lib/utils/DateUtil';


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

    async getPageUtilization ( utilization, page, size, sortBy ) {
      return await axios.get("/api" + this.URL + "/utilization", {
        params: {
          utilization: utilization,
          page: page,
          size: size,
          sortBy: sortBy[0] ? sortBy[0].id : null,
          sortByDirection: sortBy[0] ? sortBy.desc === true ? 'DESC': 'ASC' : null,
        }        
      })
    }

    getExcelExport (title='') {
      axios({
        url: "/api" + this.URL + "/export",
        method: 'get',
        responseType:'blob'
      }).then( res => {        
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', title + " " + dateUtil.getDayMonthYear() + '.xlsx');       
        link.click();
        link.remove();          
      })
    }

    async save ( values ) {
      return await axios({
        method: 'PUT',
        url: "/api" + this.URL,
        data: {...values}
      })
    }

    async delete ( values ) {
      return await axios({
        method: 'DELETE',
        url: "/api" + this.URL + '/' + values.id,       
      })
    }


}  
    
export default BaseService;