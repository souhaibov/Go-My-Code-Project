import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postEvent } from '../../Redux/userSlice/eventSlice'
import AddFiles from '../uploadImgEvent'
import EventCard from './EventCard'
import "./M_event.css"

const M_event = ({ping,setPing}) => {

  const data=useSelector((store)=>store.event?.Event?.event)
// afficher le formulaire d'ajout 
  const [show, setShow] = useState(false);
// initialisation of the hook of adding a new event
  const [event, setEvent] = useState({
    Title: "",
    tof: [],
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
              
             <AddFiles setEvent={setEvent} Event={event} />
              <input
                type="text"
                placeholder="the Workspace"
                onChange={(e) =>
                  setEvent({ ...event, place: e.target.value })
                }
              />
              <br />
              <input
                style={{width: '185px'}}
                type="Date"
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

<button className={`${event.tof.length===0 || event.Title==="" || event.place==="" || event.Date==="" || event.Description==="" ? "disabled_button" : "" }`} disabled={event.tof.length===0 || event.Title==="" || event.place==="" || event.Date==="" || event.Description===""}
  onClick={() => {
    dispatch(postEvent(event));
    setShow(false);
    setPing(!ping)
    }}>
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
                

{data?.map((el,i) => (<EventCard key={i} el={el} ping={ping} setPing={setPing}/>))}


</table>
        </div>
    </div>
  )
}

export default M_event