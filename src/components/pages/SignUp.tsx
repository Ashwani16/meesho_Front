import { CircularProgress } from "@chakra-ui/react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { signup } from "../../redux/user/action";

const SignUp =()=>{
    const dispatch=useDispatch();
    const loacation=useLocation()
    const [user,setUser]=useState({name:"",phoneNo:"",password:""})
    const navigate=useNavigate();
    const {loading}=useSelector((state:any):any=>{
        return state.userReducer
    })
    function changeHandler(e:any){
        setUser((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    function clickHandler(){
       // console.log(user)
        dispatch(signup(user)).then(()=>{
            navigate("/login",{state:loacation.state})
        })
    }
    return <div className="userinfo">
       <input placeholder="enter your name" value={user.name} name="name" onChange={changeHandler}/><br/>
       <input placeholder="enter your phone No." value={user.phoneNo} name="phoneNo" onChange={changeHandler}/><br/>
       <input placeholder="enter your password" type="password" value={user.password} name="password" onChange={changeHandler}/><br/>
        <button onClick={clickHandler}>Submit</button><br/>
        {loading  && <CircularProgress isIndeterminate color='green.300' />}
    </div>
}
export default SignUp