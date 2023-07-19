import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actiontype"


export const loginFun = (cred)=>(dispatch)=>{
    dispatch({type: LOGIN_REQUEST})
    
        return axios.post("https://cars_buy-b3ba.onrender.com/user", cred)
        
        .then((res)=>{
            if(res.data.token!== undefined){
                dispatch({type: LOGIN_SUCCESS, payload: res.data.token})
                localStorage.setItem('token', JSON.stringify(res.data.token))
            }
          
        })
        .catch((err)=>{
            dispatch({type:LOGIN_FAILURE, err})
        })
  
}

export const SignUp = (cred)=>(dispatch)=>{
    dispatch({type:SIGNUP_REQUEST})
    
      return  axios.post("https://cars_buy-b3ba.onrender.com/user", cred)
      .then((res)=>{
        dispatch({type:SIGNUP_SUCCESS, res})
      })
      .catch((err)=>{
        dispatch({type:SIGNUP_FAILURE,err})
      })
    
}