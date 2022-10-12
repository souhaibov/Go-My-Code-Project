import React from 'react'
import { useSelector } from 'react-redux'

const M_activity = () => {
  
  const data=useSelector((store)=>store.activity.Activity)

  return (
    <div className='activity_data'>
      <h1>Activity List</h1>
        <ul>
            {data?.map(item =>
                <li key={item?.id}>
                    <p>{item?.place}</p>
                </li>
                )}
        </ul>
    </div>
  )
}

export default M_activity