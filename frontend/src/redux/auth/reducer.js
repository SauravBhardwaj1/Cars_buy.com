import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actiontype";

const initialState = {
    isLoading:false,
    isError: false,
    isAuth: false,
    token:""
}

export const reducer = (state=initialState,{payload,type})=>{
    switch (type) {
        case LOGIN_REQUEST:
            return {...state, isLoading: true};
        case LOGIN_SUCCESS:
            return {...state, isAuth: true, token:payload}
        case SIGNUP_SUCCESS:
            return {...state,isLoading:false, isAuth:false}
        case LOGIN_FAILURE:
            return {...state, isAuth: false, isError: true}
        
        default:
            return state;
    }
}