import { SET_USER_DATA, USER_LOGIN_SUCCESSFUL, USER_LOGOUT_SUCCESSFUL } from "../actionTypes/actionTypes"

export const loginUser = () => {
    return {
        type: USER_LOGIN_SUCCESSFUL,
        payload: true
    }
}

export const logoutUser = () => {
    return {
        type: USER_LOGOUT_SUCCESSFUL,
        payload: true
    }
}

export const userData = (userData) => {
    console.log('in userActions: ', userData);
    return{
        type: SET_USER_DATA,
        payload: userData
    }
}