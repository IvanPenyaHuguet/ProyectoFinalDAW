import axios from 'axios';
import BackendServiceConf from '../../BackendServiceConf';

export class SearchService { 

    constructor (url) {
        BackendServiceConf.config(axios);
        this.URL = url;      
    }

    async searchReagentPage ( page, size, search, fields) {                          
        return await axios.post("/api/search" + this.URL , {
            page: page,
            size: size,
            search: search,
            fields: fields
        })              
    }
    async searchReagentByElements ( page, size, search) {                             
        return await axios.post("/api/search/elements" + this.URL , {
            page: page,
            size: size,
            search: search            
        }) 
    }
}

export default new SearchService('/reagent');