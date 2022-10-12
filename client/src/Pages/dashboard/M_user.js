import React from 'react'
import { useSelector } from 'react-redux'
import "./M_user.css"

const M_user = () => {

const data=useSelector((store)=>store.user?.users)

  return (
    <div className='user_data'>
      <h1>User List</h1>
        <ul className='user_list'>
            {data.map(item =>
                <li className='user_item' key={item.id}>
                    <p>First Name : {item.first_name}</p>
                    <p>Last Name : {item.last_name}</p>
                    <p>Phone Number : {item.phone_number}</p>
                    <p>Email : {item.email}</p>
                    <p>{item.isAdmin}</p>
                </li>
                )}
        </ul>
    </div>
  )
}

export default M_user