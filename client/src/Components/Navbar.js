import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'

const Navbar = () => {
  const isAuth = localStorage.getItem('token')
  return (
    <div className='Navigation'>
      <ul className='navigation-ul'>
        <img src="logo.png" alt="logo" />

        <Link to='/'><li>Home</li></Link>
        <Link to='/Activities'><li>Activities</li></Link>
        <Link to='/Events'><li>Events</li></Link>
        <div className='under-container'><Link to='/About'><li>About</li></Link>
          <ul className='under-list'>
            <Link to='/Instructors'> <li>Coachs</li></Link>
            <Link to='/Students'><li>Students</li></Link>
            <Link to='/Managing'> <li>Managing body</li></Link>
          </ul>
        </div>
        <Link to='/ContactUs'><li>Contact us</li></Link>
        {isAuth &&  <Link to='/dashboard/user'> <li>Dashboard</li></Link>}
        {/* <Link to='/ContactUs'><li>Contact us</li></Link> */}
        {isAuth ?
          <button className='botton_login' onClick={() => {
            localStorage.removeItem('token')
            window.location.reload()
          }}>Logout</button> : <div>
            <Link to='/Login'><button className='botton_login'><b>Login </b></button></Link>
            <Link to='/Register'><button className='botton_login'><b> Register</b></button></Link>
          </div>}

        {/* <Link to={`/Login`}><img className="login" src="login.png" alt="login"  /></Link> */}
      </ul>
    </div>
  )
}

export default Navbar