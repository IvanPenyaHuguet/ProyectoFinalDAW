import axios from 'axios';

axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.token){
      const token = 'Bearer ' + user.token;
      config.headers.Authorization =  token;
    }
  
    return config;
});


class BackendService {

  async getAllReagent() {
    return await axios.get("/api/reagent");
  }
  
}  
  
export default new BackendService();