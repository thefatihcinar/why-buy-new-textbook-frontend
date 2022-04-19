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
        return !!this.getAuthToken();
    }
    logout(){
        this.removeAuthToken();
        //TO-DO: remove user from local storage
        //TO-DO: think about redirecting to login/main page
    }
}

export default new AuthenticationService()
