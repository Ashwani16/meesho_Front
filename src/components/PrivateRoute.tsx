import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute=({children}:any)=>{
    const {token}=useSelector((state:any):any=>{
        return state.userReducer
    })
    const loacation=useLocation()
    if(token){
        return children
    }else{
        return <Navigate to="/login" state={loacation.pathname}/>
    }
}