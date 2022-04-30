import decode from 'jwt-decode';

/*
    This Authentication Service Class is responsible for handling the authentication of the user.
 */
class AuthenticationService{
    getAuthToken(){
        return localStorage.getItem('authToken');
    }
    setAuthToken(token){
        localStorage.setItem('authToken', token);
    }
    removeAuthToken(){
        localStorage.removeItem('authToken');
    }
    isAuthenticated(){
        /* this method will make sure there is an authenticated user */
        /* first get the token from the local storage */
        const token = this.getAuthToken();
        /* if there is no token, then the user is not authenticated */
        if(!token){
            return false;
        }
        /* if there is a token, make sure this is a valid JWT token */
        try{
            const decoded = decode(token);
            /* if the token is valid, then the user is authenticated */
            if ( decoded.exp > (Date.now() / 1000) ){
                return true;
            }
            else return false;
        }catch(error){
            return false;
        }
    }
    logout(){
        this.removeAuthToken();
        //TO-DO: remove user from local storage
        //TO-DO: think about redirecting to login/main page
    }
}

export default new AuthenticationService()
