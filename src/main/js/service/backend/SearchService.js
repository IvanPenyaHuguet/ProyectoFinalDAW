import axios from 'axios';
import BackendServiceConf from '../BackendServiceConf';

class SearchService { 

    constructor () {
        BackendServiceConf.config(axios);
        
    }

    async searchReagentPage ( page, size, search, fields) {
        const URL = "/search/reagent";
        let data = null
        try {
            data = await axios.get("/api" + URL , {
                params: {
                  page: page,
                  size: size,
                  search: search,
                  fields: fields
                }        
            })
        }
        catch (e) {
            console.log(e);
        }
        return data;
    }
}

export default SearchService;