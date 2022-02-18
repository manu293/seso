// local imports
import {SESO_BASE_URL} from "../helpers/api";
import {
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING
} from "../helpers/types";

export const logUserIn = (userCred) => async dispatch => {
    const {userEmail, userPassword} = userCred;

    dispatch({
        type: USER_LOGIN_LOADING,
        payload: true,
    });

    await SESO_BASE_URL.post("auth/login" ,{
        email: userEmail,
        password: userPassword
    })
    .then((loginResponse) => {
        if (
            (loginResponse.status === 200) &&
            (loginResponse.data) &&
            (loginResponse.data.message === "success")
        ) {
            sessionStorage.setItem("isCurrentUserLoggedIn", "true");
            dispatch({
                type: USER_LOGIN_SUCCESS,
            });
            dispatch({
                type: USER_LOGIN_LOADING,
                payload: false,
            });
        }
    })
    .catch(() => {
        console.log("Error while login");
        dispatch({
            type: USER_LOGIN_LOADING,
            payload: false,
        });
    })

}

export const logoutUser = () => dispatch => {
    sessionStorage.removeItem("isCurrentUserLoggedIn");
    dispatch({
        type: USER_LOGOUT,
    });
}