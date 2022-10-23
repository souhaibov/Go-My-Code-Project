import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postEvent } from '../../Redux/userSlice/eventSlice'
import EventCard from './EventCard'
import "./M_event.css"

const M_event = () => {

  const data=useSelector((store)=>store.event.Event?.event)
// afficher le formulaire d'ajout 
  const [show, setShow] = useState(false);
// initialisation of the hook of adding a new event
  const [event, setEvent] = useState({
    Title: "",
    tof: "",
    place: "",
    Date: "",
    Description: "",
  });

  const dispatch = useDispatch();


  return (
    <div className='event_data'>
      <br/>
      <h2>Event List</h2>
      <br/>
      <button onClick={() => setShow(!show)}>Add a New Event</button>
      <br /><br />
      {show ? (
        <div>
          <div id="form" class="topBefore">
            <div className="info">
              
              <input
                type="text"
                placeholder="Title"
                onChange={(e) =>
                  setEvent({ ...event, Title: e.target.value })
                }
              />
              
              <input
                type="text"
                placeholder="Picture"
                onChange={(e) =>
                  setEvent({ ...event, tof: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="the Workspace"
                onChange={(e) =>
                  setEvent({ ...event, place: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                placeholder="Date"
                onChange={(e) =>
                  setEvent({ ...event, Date: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Description"
                onChange={(e) =>
                  setEvent({ ...event, Description: e.target.value })
                }
              />
              </div>

<button
  onClick={() => {
    dispatch(postEvent(event));setShow(false)}}>
  Submit
</button>
<br /><br />
</div>
</div>
) : null}
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