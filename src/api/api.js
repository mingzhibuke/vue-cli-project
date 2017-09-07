import axios from 'axios';
// axios.defaults.baseURL = 'http://192.168.50.197:18882/';
import store from '../vuex/store'
axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers['Content-Type']='application/x-www-form-urlencoded'
  // console.log(store.getters);
  if (store.getters.AUTHHEADERSTVal_st) {
    // config.headers['AUTH-HEADER-ST'] = store.getters.AUTHHEADERSTVal_st;
    config.headers['AUTH_HEADER_ST'] = `${store.getters.AUTHHEADERSTVal_st}`;
  }
  //   console.log(config.url)
  //   if (config.data) {
  //     config.url = config.url + '?' + $.param(config.data)
  //     // config.data=JSON.stringify(config.data);
  //   }
  return config;
}, function (error) {
  // Do something with request error
  console.log(error)
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default axios;
