import axios, { AxiosResponse } from 'axios';
import TheRequestInterceptor from "./interceptors/requestInterceptor";
import TheResponseInterceptor from "./interceptors/responseInterceptor";

/* This HTTP Agent will be responsible for making the HTTP requests to the
 * server.
 */
class HTTPAgent {
    constructor(baseURL, options) {

        /* destructure the HTTP Request Interceptors from the options object */
        const {
            requestInterceptors
        } = options;

        /* create the axios instance */
        this.axios = axios.create({
            baseURL: baseURL
        });

        /* Create an instance of the HTTP Request Interceptors */
        const theRequestInterceptor = new TheRequestInterceptor();
        /* Create an instance of the HTTP Response Interceptors */
        const theResponseInterceptor = new TheResponseInterceptor();


        /* Declare to use the request interceptors in the axios instance */
        this.axios.interceptors.request.use(
            config => theRequestInterceptor.onFulfilled(config),
            error => theRequestInterceptor.onRejected(error)
        );

        /* Declare to use the response interceptors in the axios instance */
        this.axios.interceptors.response.use(
            response => theResponseInterceptor.onFulfilled(response),
            error => theResponseInterceptor.onRejected(error)
        );
    }

    async get(path, options) {
        /* this method will perform a GET request to the server */
        const response =  await this.axios.get(path, options);
        return response;
    }

    async post(path, data, options) {
        /* this method will perform a POST request to the server */
        const response =  await this.axios.post(path, data, options);
        return response;
    }

    async put(path, data, options) {
        /* this method will perform a PUT request to the server */
        const response =  await this.axios.put(path, data, options);
        return response;
    }

    async delete(path, options) {
        /* this method will perform a DELETE request to the server */
        const response =  await this.axios.delete(path, options);
        return response;
    }
}

export default HTTPAgent;
