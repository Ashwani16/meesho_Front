import { Link, useLocation, useNavigate } from "react-router-dom"
import {useState,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, set_user_loading } from "../../redux/user/action"
import { CircularProgress } from "@chakra-ui/react"
const LogIn =()=>{
    const navigate=useNavigate();
    const [phoneNo,setPhoneNo]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {token,loading}=useSelector((state:any):any=>{
        return state.userReducer
    })
    const loacation=useLocation()
    useEffect(()=>{
        // console.log(loacation)
        if(token!=""){
            dispatch(set_user_loading(false))
            navigate(`${loacation.state||'/'}`)
        }
    },[token])
    
    function clickHandler(){
        dispatch(login({phoneNo,password}))
    }
    return <div className="userinfo">
        <input width="60%" className="userinfo_input" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} placeholder="Enter Your Mobile No."/><br/>
        <input className="userinfo_input" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Your PassWord"/><br/>
        <button className="userinfo_button" onClick={clickHandler}>Submit</button>
        <p id="smallt">not have an account <span className="ca"><Link state={loacation.state} to="/signUp">create account</Link></span></p>
        {loading  && <CircularProgress isIndeterminate color='green.300' />}
    </div>
}
export default LogIn