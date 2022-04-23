/*
    This helper class is used for authentication purposes.
*/
class AuthHelper {
    getAuthToken(){
        return localStorage.getItem('authToken');
    }
}

export default new AuthHelper()
