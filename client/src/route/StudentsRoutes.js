import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const StudentsRoute = () => {
  const user=  useSelector(store=> store.user?.user)
  return (  
  user.Status==="Student" ?<Outlet/> : <Navigate to={"/"}/>
  )
}

export default StudentsRoute