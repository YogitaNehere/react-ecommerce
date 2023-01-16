import { USER_LOGIN_SUCCESSFUL, USER_LOGOUT_SUCCESSFUL,SET_USER_DATA, SHOW_LOADER, HIDE_LOADER } from "../actionTypes/actionTypes";
const initState = {
    isLoggedIn: false,
    userData: {},
    showLoader: false
}

export default (state = initState, action) => {
    // console.log(action.type);
    switch(action.type){
        case USER_LOGIN_SUCCESSFUL: 
            return {
                ...state,
                isLoggedIn:true
            }
        case USER_LOGOUT_SUCCESSFUL:
            return {
                ...state,
                isLoggedIn:false
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case SHOW_LOADER:
            return {
                ...state,
                showLoader: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                showLoader: false
            }
        default:
            return state;
    }
}
