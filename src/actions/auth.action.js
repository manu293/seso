// local imports
import {SESO_BASE_URL} from "../helpers/api";
import {
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_LOADING,
    USER_LOGIN_ERROR
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
    }, {
        withCredentials: true,
    })
    .then((loginResponse) => {
        if (
            (loginResponse.status === 200) &&
            (loginResponse.data) &&
            (loginResponse.data.message === "success")
        ) {
            localStorage.setItem("isCurrentUserLoggedIn", "true");
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
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: true,
        });
    })

}

export const logoutUser = (history) => async dispatch => {
    await SESO_BASE_URL.post("auth/logout", {withCredentials: true})
    .then((logoutResponse) => {
        if (logoutResponse.status === 200 || logoutResponse.status === 201) {
            history("/login");
        }
    })
    .catch((err) => {
        console.log("Logout error", err)
        history("/login");
    });
}