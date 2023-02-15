import { LOGIN_SUCC, LOGOUT, SET_USER_LOADING } from "./actioTypes"

const initial_State={
    token:"",
    isErr:false,
    loading:false
}

export const reducer=(state=initial_State,action:any)=>{
    switch(action.type){
        case LOGIN_SUCC:{
            return {isErr:false,loading:false,token:action.payload}
        }
        case SET_USER_LOADING:{
            return { ...state,loading:action.payload}
        }
        case LOGOUT:{
            return {...initial_State}
        }
        default:{
            return {...state};
        }
    }
}