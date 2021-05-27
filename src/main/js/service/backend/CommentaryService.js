import axios from 'axios';
import BackendServiceConf from '../BackendServiceConf';

class CommentaryService {   
    

    constructor () {
        BackendServiceConf.config(axios);
        this.URL = '/commentary';
    }   

    async getByReagentId(id) {        
        return await axios({
            method: 'POST',
            url: "/api" + this.URL,
            data: { 
                id: id 
            }
        }) 
    }

    async saveCommentary (id, commentary ) {
        return await axios({
            method: 'PUT',
            url: "/api" + this.URL,
            data: { 
                id: id,
                user: JSON.parse(localStorage.getItem('user')).user,
                commentary: commentary,
            }
        })
    }
    
}  
    
export default new CommentaryService();