import React, { useState } from 'react'
import "../Style/Register.css"
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { userRegister } from '../Redux/userSlice/userSlice'


const Register = () => {
    const [register, setRegister] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '', 
    })
    const dispatch = useDispatch();
    
  return (
    <div className="register-card">

      <img src="logo.png" alt="logo" />
      <br/><br/>
      <h3>First Name:</h3>
      
      <input placeholder='Enter your first name' onChange={(e)=> setRegister({...register,first_name: e.target.value})} />
      <br/><br/>
      <h3>Last Name:</h3>
      
      <input placeholder='Enter your last name' onChange={(e)=>setRegister({...register,last_name: e.target.value})}/>
      <br/><br/>
      <h3>Phone Number:</h3>
      
      <input placeholder='Enter your phone number' onChange={(e)=>setRegister({...register,phone_number: e.target.value})}/>
      <br/><br/>
      <h3>Email:</h3>
      
      <input placeholder='Enter your E.mail' onChange={(e)=>setRegister({...register,email: e.target.value})}/>
      <br/><br/>
      <h3>Password:</h3>
      
      <input placeholder='Enter your password' onChange={(e)=>
        setRegister({...register,password: e.target.value})}/>
      <br/>
      
       <br/><br/>
       <Link to="/login">
      <button className="submit_signup" onClick={()=>{
        dispatch(userRegister(register));
      }}>Register</button>
      </Link>
      <br/><br/>
      <Link to='/Login'> <button className="submit_signin"  >Login</button></Link>
     
          </div>
  )
}

export default Register