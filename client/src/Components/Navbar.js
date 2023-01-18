import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'

const Navbar = () => {
  const user = useSelector((store) => store.user?.user);
  const isAuth = localStorage.getItem('token')
  return (
    <div className='Navigation'>
      <ul className='navigation-ul'>
        <img src="logo.png" alt="logo" />

        <Link to='/'><li>Home</li></Link>
        <Link to='/Activities'><li>Activities</li></Link>
        <Link to='/Events2022'><li>Events</li></Link>
        <div className='under-container'><Link to='/About'><li>About</li></Link>
          <ul className='under-list'>
            <Link to='/Instructors'> <li>Coachs</li></Link>
            <Link to='/Students/StudentsLevel1'><li>Students</li></Link>
            <Link to='/Managing2022'> <li>Managing body</li></Link>
          </ul>
        </div>
        <Link to='/ContactUs'><li>Contact us</li></Link>

        { user?.user.Status==="Student" || user?.user.Status==="admin" ||user?.user.Status==="coach" ?<Link to='/StudentDash'> <li>Learning</li></Link>: null}

        { user?.user.Status==="admin"?<Link to='/dashboard/user'> <li>Dashboard</li></Link>: null}
        
        {isAuth ?
        <div className='logout_profile'>
          <h3 style={{fontSize:"16px"}}> Welcome {user?.user?.first_name} </h3>
          <button className='botton_logout' onClick={() => {
            localStorage.removeItem('token')
            window.location.reload()
           
          }}>Logout</button>
          </div> : 
          <div>
            <Link to='/Login'><button className='botton_login'><b>Login </b></button></Link>
            <Link to='/Register'><button className='botton_login'><b> Register</b></button></Link>
          </div>}

        {/* <Link to={`/Login`}><img className="login" src="login.png" alt="login"  /></Link> */}
      </ul>
    </div>
  )
}

export default Navbar