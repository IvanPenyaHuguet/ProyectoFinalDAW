
/**
 * Class to configure axios, the library to do request 
 */
class BackendConf {

  /**
   * Add the authorization token on the header
   * @param {AxiosInstance} axios Instance to add the interceptor with the token
   * @return {AxiosInstance} config Instance configured
   */
  config(axios) {
    axios.interceptors.request.use((config) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.token) {
        const token = "Bearer " + user.token;
        config.headers.Authorization = token;
      }

      return config;
    });
  }
}

export default new BackendConf();
