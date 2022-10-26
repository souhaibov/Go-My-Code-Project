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
        <input onChange={handleChange} type="text" defaultValue={el.Title} name="Title" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.tof} name="tof" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.place} name="place" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.Date} name="Date" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.Description} name="Description" />
      </td>
      <td onClick={() => {dispatch(updateEvent({ id: el._id, event: event }));setShow(false);setPing(!ping)}}>
        update
      </td>
      <td onClick={() => setShow(false)}>cancel</td>
    </tr>
  ) : (
    <tr className="info_Event">
      <td>{el.Title}</td>
      <td>{el.tof}</td>
      <td>{el.place}</td>
      <td>{el.Date}</td>
      <td>{el.Description}</td>
      <td onClick={() => setShow(true)}>update</td>
      
      <td 
         onClick={() => {dispatch(deleteEvent({ id: el._id }));setPing(!ping)}}>delete
      </td>
     
    </tr>
  );
};

export default EventCard;
