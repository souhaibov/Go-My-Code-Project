import React from 'react'
import { useSelector } from 'react-redux'

const M_event = () => {

  const data=useSelector((store)=>store.event.Event?.event)

  return (
    <div className='event_data'>
      <h1>Event List</h1>
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

export default M_event