import axios from 'axios';
import BackendServiceConf from '../BackendServiceConf';

class SearchService { 

    constructor () {
        BackendServiceConf.config(axios);
        
    }

    async searchReagentPage ( page, size, search, fields) {
        const URL = "/search/reagent";                      
        return await axios.post("/api" + URL , {
            page: page,
            size: size,
            search: search,
            fields: fields
        })              
    }
    async searchReagentByElements ( page, size, search) {
        const URL = "/search/elements/reagent";                      
        return await axios.post("/api" + URL , {
            page: page,
            size: size,
            search: search,
            fields: fields
        }) 
    }
}

export default new SearchService();