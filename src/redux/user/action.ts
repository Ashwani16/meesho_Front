import axios from "axios"
import { LOGIN_SUCC, LOGOUT, SET_USER_LOADING } from "./actioTypes"

const set_user_loading=(payload:Boolean)=>{
    return {
        type:SET_USER_LOADING,
        payload
    }
}
const login_succ=(payload:String)=>{
    return {
        type:LOGIN_SUCC,
        payload
    }
}
export const log_out=()=>{
    return {
        type:LOGOUT
    }
}

export const signup=({name,phoneNo,password}:any):any=>(dispatch:any):any=>{
    dispatch(set_user_loading(true))
    return axios.post(`https://nice-shirt.cyclic.app/user/register`,{name,phoneNo,password}).
    then((res:any)=>{
        dispatch(set_user_loading(false))
    }).catch((err)=>{
        console.log(err)
    })

}
export const login=({phoneNo,password}:any):any=>(dispatch:any):any=>{
    dispatch(set_user_loading(true))
    axios.post(`https://nice-shirt.cyclic.app/user/login`,{phoneNo,password}).then((res:any)=>{
        console.log(res.data.token)
        dispatch(login_succ(res.data.token||""))
    }).catch((err)=>{
        console.log(err)
    })
}