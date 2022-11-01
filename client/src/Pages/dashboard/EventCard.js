import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEvent, updateEvent } from "../../Redux/userSlice/eventSlice";

const EventCard = ({ el,ping,setPing }) => {
    

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [event, setEvent] = useState({});
  const handleChange = (e) =>
    setEvent({ ...event, [e.target.name]: e.target.value });
  return show ? (
    <tr className="info_Event">
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.Title} name="Title" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.tof} name="tof" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.place} name="place" />
      </td>
      <td>
        <input style={{height:"35px",width:"150px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="Date" defaultValue={el.Date} name="Date" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.Description} name="Description" />
      </td>
      <td onClick={() => {dispatch(updateEvent({ id: el._id, event: event }));setShow(false);setPing(!ping)}}>
      <button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button>
      </td>
      <td onClick={() => setShow(false)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>cancel</button></td>
    </tr>
  ) : (
    <tr className="info_Event">
      <td>{el.Title}</td>
      <td>{el.tof}</td>
      <td>{el.place}</td>
      <td>{el.Date}</td>
      <td>{el.Description}</td>
      <td onClick={() => setShow(true)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button></td>
      
      <td 
         onClick={() => {dispatch(deleteEvent({ id: el._id }));setPing(!ping)}}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>delete</button>
      </td>
     
    </tr>
  );
};

export default EventCard;
