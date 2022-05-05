import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,
         USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../constants/userConstants'
import UsersService from '../services/users.service'


export const login = (email, password) => async(dispatch) => {
    /* this action creator logs in a user by connecting to the api
       and getting the user and the token */
    try {

        dispatch( { type: USER_LOGIN_REQUEST } )

        let data  = await UsersService.loginUser(email, password);

        dispatch( { type: USER_LOGIN_SUCCESS, payload: data } )

        // Remember the user, in local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('authToken', data.token);

    } catch (error) {
        // when the authentication fails
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    /* this action creator logs a user out
       it removes the token from local storage */
    localStorage.removeItem('userInfo');
    localStorage.removeItem('authToken');

    dispatch( { type: USER_LOGOUT} )
}

export const userRegisterAction = (name, email, password, phoneNumber, profilePicture) => async(dispatch) => {
    /* this action creator is responsible for registering a user
        in this application, after having registered, it logs in the user
        by firing the login action as well */
    try {

        dispatch( { type: USER_REGISTER_REQUEST } );

        let newUser = {
            name: name,
            email: email,
            profilePicture: profilePicture,
            password: password,
            phoneNumber: phoneNumber,
        }; 

        let data  = await UsersService.registerUser(newUser);

        dispatch( { type: USER_REGISTER_SUCCESS, payload: data } );

        /* Now, this is important
           Also dispatch, i.e. FIRE LOGIN SUCCESS ACTION WITH THIS USER AS WELL
           TO INDICATE THAT HE HAS AUTOMATICALLY LOGGED IN */

        dispatch( { type: USER_LOGIN_SUCCESS, payload: data } )

        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('authToken', data.token);

    } catch (error) {

        dispatch( { type: USER_REGISTER_FAILURE,
                    payload: error.response && error.response.data.message
                             ? error.response.data.message
                             : error.message
        } );
    }
}
