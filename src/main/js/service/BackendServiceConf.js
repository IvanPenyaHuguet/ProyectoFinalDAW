// import axios from 'axios';

// axios.interceptors.request.use( config => {
//     const user = JSON.parse(localStorage.getItem('user'));
  
//     if(user && user.token){
//       const token = 'Bearer ' + user.token;
//       config.headers.Authorization =  token;
//     }
  
//     return config;
// });


class BackendConf {

  config(axios) {
    axios.interceptors.request.use( config => {
      const user = JSON.parse(localStorage.getItem('user'));
    
      if(user && user.token){
        const token = 'Bearer ' + user.token;
        config.headers.Authorization =  token;
      }
    
      return config;
    });
  }
  
}  
  
export default new BackendConf();