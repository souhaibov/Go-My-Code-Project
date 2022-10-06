import React, { useState } from 'react'
import "../Style/Login.css"
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { userLogin } from '../Redux/userSlice/userSlice'

const Login = () => {
  const [login, setlogin] = useState({
    email: '',
    password: '', 
})
const dispatch = useDispatch();
  return (
    <div className="login-card">

      <img src="logo.png" alt="logo" />
      <br/><br/>
      <h3>Email:</h3>
      
      <input placeholder='Enter your email' onChange={(e)=> setlogin({...login,email: e.target.value})}/>
      <br/><br/>
      <h3>Password:</h3>
      
      <input placeholder='Enter your password' onChange={(e)=> setlogin({...login,password: e.target.value})}/>
      <br/>
       <h5>Lost Your Password ?</h5>
       <br/><br/>
      <button className="submit_signin" onClick={()=>{
        dispatch(userLogin(login));
      }} >Login</button>
      <br/><br/>
      <Link to ='/Register'> <button className="submit_signup" >Register</button></Link> 
     
          </div>
  )
}

export default Login