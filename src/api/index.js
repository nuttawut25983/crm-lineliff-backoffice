import axios from 'axios'
import Vue from 'vue'


export function initAxios() {
  Vue.prototype.$http = axios
  // Sets the default url used by all of this axios instance's requests

  
  const token = localStorage.getItem('token')
  if (token) {
    console.log(token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    // axios.defaults.baseURL = 'http://157.230.41.213:5000'
    axios.defaults.headers.get['Accept'] = 'application/json'
  }
  
  axios.interceptors.request.use(
    function(request) {
      // Do something before request is sent
      // NProgress.start();
      return request;
    },
    function(error) {
      // Do something with request error
      console.log(error);
      // NProgress.done();
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      // NProgress.done();
      // console.log(response)
      return response;
    },
    function(error) {
      // Do something with response error
      console.log(error);
      // NProgress.done();
      return Promise.reject(error);
    }
  );
}