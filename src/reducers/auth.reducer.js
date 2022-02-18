import {
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING,
    USER_LOGIN_ERROR
} from "../helpers/types";

const BLANK_STATE = {
    loggedIn: false,
    loginError: false,
    loading: false,
};

const sessionUserLoginState = JSON.parse(localStorage.getItem("isCurrentUserLoggedIn"));

const INITIAL_STATE = (
    (sessionUserLoginState !== null) &&
    (sessionUserLoginState === true)
) ? {
        ...BLANK_STATE,
        loggedIn: true,
    } : BLANK_STATE;

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
            }

        case USER_LOGOUT:
            return BLANK_STATE;

        case USER_LOGIN_LOADING:
            return {
                ...state,
                loading: action.payload,
            }

        case USER_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload,
            }

        default:
            return state;
    }

}