import { Box,Center,Stack, Square, Text } from "@chakra-ui/layout"
import {PhoneIcon,PlusSquareIcon,CheckIcon, Search2Icon} from '@chakra-ui/icons'
import { Flex,Image,Divider , InputLeftElement,InputGroup,InputRightElement,Input} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Navbar2 from "./Navbar2";
import { useDispatch } from "react-redux";
import { log_out } from "../redux/user/action";

const Navbar=()=>{
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartClickHandler=()=>{
    navigate("/cart")
  }
  function logout(){
    dispatch(log_out())
  }
  const homeClickHandler=()=>{
    navigate("/")
  }
    return <div className="navbar" style={{position: "sticky"}}>
       <Center justifyContent='space-between' >
  <Center width='50%'  >
    <Image onClick={homeClickHandler} height='60px' src='https://images.newindianexpress.com/uploads/user/imagelibrary/2022/6/9/w900X450/Meesho_logo.png?w=400&dpr=2.6' width='23%'/>
    <Stack width='60%' >
  <InputGroup  border='1px solid grey' borderRadius='3px' bg='white' width='100%'>
    <InputLeftElement
      bg='white'
      pointerEvents='none'
      children={<Search2Icon  color='gray.300' />}
    />
    <Input border='1px transparent grey' type='search' placeholder='Try Sari,Kurti or Search by Product CODE' />
  </InputGroup>

  
</Stack>
  </Center>
  <Center height='30px' gap='15px' width='42%' >
    <Text><PlusSquareIcon/>Download App
</Text>
<Divider orientation='vertical' />
<Link to="login">Log-in </Link> 
<Divider orientation='vertical' />
<Center margin='10px' gap='10px'>
    <Center gap='5px' >
        <button onClick={logout}>Log-Out</button>
        
    </Center>
    <Center onClick={cartClickHandler} gap='5px'>
        <AiOutlineShoppingCart/>
        <Text>Cart</Text>
    </Center>
</Center>

  </Center>
 
</Center> 
<Divider />
<Navbar2/>
        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">SinUp</Link>
        <Link to="/products/saree">Product Page</Link>
        <Link to="/product/sarre1">Single Product Page</Link>
   */} </div> 
}
export default Navbar