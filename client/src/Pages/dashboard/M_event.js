import React from 'react'
import { useSelector } from 'react-redux'
import EventCard from './EventCard'
import "./M_event.css"

const M_event = () => {

  const data=useSelector((store)=>store.event.Event?.event)

  return (
    <div className='event_data'>
      <br/><h2>Event List</h2><br/>
        <div className='event_list'>
           
                <table width="100%">
                <tr>
                  <th>Title</th>
                  <th>Picture</th>
                  <th>Place</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
               </tr>
                

{data?.map((el,i) => (<EventCard key={i} el={el}/>))}

{/* <tr><td>{el.Title}</td><td>{el.tof}</td><td>{el.place}</td><td>{el.Date}</td><td>{el.Description}</td><td>update</td><td>delete</td></tr>)} */}

</table>
        </div>
    </div>
  )
}

export default M_event