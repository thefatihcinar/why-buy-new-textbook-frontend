import axios from 'axios'
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from '../constants/userConstants'
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

    dispatch( { type: USER_LOGOUT} )
}