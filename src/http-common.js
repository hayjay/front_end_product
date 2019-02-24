import Axios from "axios";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toasts } from './toasts.js';

let axios = Axios.create({
  baseURL: "http://localhost:9090/api",
//   timeout: 30000,
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin" : "*"
  }
});

//request interceptor
axios.interceptors.request.use(
    (config) => {
        //do something before request is sent to the api server
        config.loadingToast = Toasts.$toasted.global.loading('Processing request!');
        let auth = JSON.parse(localStorage.getItem('token'));
        //set headers to config after receiving response from axios
        config.headers = { Authorization: `Bearer ${auth}`};
        console.log(config.headers.Authorization);

        if (auth && auth.token) {
        	//if successfully loged in, set user token as below
            config.headers.Authorization = `Bearer ${auth.token}`;
        }

        return config;
    }, 
  //do something when error occured while trying to request something from server
    (error) => {
        return Promise.reject(error);
    }
);

//response interceptor
axios.interceptors.response.use(
    (response) => {
        // do something with response data received from api server
        response.config.loadingToast.goAway(0);
        Toasts.$toasted.success(response.data.message);

        return response;
    }, 
  
    (error) => { 
        // Do something with response error
        error.config.loadingToast.goAway(0);

        //Show error for validation failed
        if (error.response && error.response.status === 422) {
            Toasts.$toasted.global.form_validation_error();
        }

        // Show error message in toast
        if (error.response && error.response.data.message) {
            Toasts.$toasted.error(error.response.data.message, {
                type: 'error',
                icon: 'fa-exclamation-circle'
            });
        }

        // Show toast for connection timeout
        if (error.code === "ECONNABORTED") {
            Toasts.$toasted.global.connection_timeout();
        }
        
        return Promise.reject(error);
    }
);

export const http = axios;
