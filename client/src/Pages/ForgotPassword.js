import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/ForgotPassword.css'

const Forgot_Password = () => {
  return (
    <div className="Forgot">
      <br />
    <img src="logo.png" alt="logo" />
    <br />
    <h2 >Forgot Password</h2>
    <br />
    <br />
    <h3>Email:</h3>

    <input
      type="email"
      placeholder="Enter your email"
      
    />
   <br />
    <br />
    <button> Submit </button>
   <Link to="/Login"> <h5>Login</h5></Link>
   
   </div>
  )
}

export default Forgot_Password