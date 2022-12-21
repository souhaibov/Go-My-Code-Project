import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
  const user=  useSelector(store=> store.user?.user?.user)
  
  return (  
  user?.Status==="admin" ? <Outlet/> : <Navigate to={"/"}/>
  )
}

export default AdminRoute