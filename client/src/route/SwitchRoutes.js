import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const SwitchRoutes = () => {
const  isAuth=localStorage.getItem('token')
  const user=  useSelector(store=> store.user?.user)
  return (  
    !isAuth ? <Navigate to={"/Login"}/> :
  user?.Status === "admin" ? <Navigate to={"/Login"}/> : <Navigate to={"/"}/>
  )
}

export default SwitchRoutes