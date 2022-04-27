import AuthHelper from "../utils/authHelper";

/* This class is used to intercept the request and modify it before sending it to the server */
/* What it does basically is that, it adds the token to the request header */
class TheRequestInterceptor {

    onRejected(error) {
        return Promise.reject(error);
    }

    onFulfilled(config){
        // get the auth token from the local storage
        // if not, send this requests without token, because the main page allows it
        const authToken = AuthHelper.getAuthToken();

        if(authToken){
            /* if the token is existing, in other words, if the user has logged in */
            config.headers.authorization = `Bearer ${authToken}`;
            /* put the token in the header, before each request */
        }

        return config;
    }
}

export default TheRequestInterceptor;
