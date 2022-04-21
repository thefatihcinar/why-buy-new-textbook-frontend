import { StatusCodes } from "http-status-codes";

/*
    This class is responsible for handling the response.
    Weeding out the unwanted data from the response.
    Verifying that the response is valid, meaning not getting a 404 or 500 error.
 */
class TheResponseInterceptor{

    async onFulfilled(response){
        /* this method is called whenever a successful response is sent by the server */

        const acceptedStatusCodes = [StatusCodes.OK, StatusCodes.CREATED, StatusCodes.ACCEPTED];

        if(response && acceptedStatusCodes.includes(response.status)){
            // this means that the response is successful, parse the response body and return
            return response.data;
        }
        else{
            const error = new Error("The response is not successful");
            return Promise.reject(error);
        }
    }
    async onRejected(error){
        /* this method is called whenever the server responds with an error */

        if(error){
            /* get the error message and error code */
            const errorMessage = error.response && error.response.data && error.response.data.message;
            const errorCode = error.response.status;

            switch (errorCode) {
                case StatusCodes.NOT_FOUND:
                    return Promise.reject(error);
                case StatusCodes.INTERNAL_SERVER_ERROR:
                    return Promise.reject(error);
                case StatusCodes.BAD_REQUEST:
                    return Promise.reject(error);
                case StatusCodes.UNAUTHORIZED:
                    // TO-DO: Redirect to the unauthorized page
                    // TO-DO: Logout the user
                    return Promise.reject(error);
                case StatusCodes.FORBIDDEN:
                    // TO-DO: Redirect to the forbidden page
                    return Promise.reject(error);
                case StatusCodes.CONFLICT:
                    return Promise.reject(error);
                default:
                    return Promise.reject(error);
            }
        }
    }
}

export default TheResponseInterceptor;
