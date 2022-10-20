import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteActivity, updateActivity } from "../../Redux/userSlice/activitySlice";

const ActivityCard = ({ el }) => {
    

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [Activity, setActivity] = useState({});
  const handleChange = (e) =>
    setActivity({ ...Activity, [e.target.name]: e.target.value });
  return show ? (
    <tr className="info_Activity">
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.NumberOfStudents} name="NumberOfStudents" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.tof} name="tof" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.place} name="place" />
      </td>
      
      <td onClick={() => {dispatch(updateActivity({ id: el._id, Activity: Activity }));setShow(false)}}>
        update
      </td>
      <td onClick={() => setShow(false)}>cancel</td>
    </tr>
  ) : (
    <tr className="info_Activity">
      <td>{el.NumberOfStudents}</td>
      <td><img style={{width:"60px", height:"60px"}} src={el.tof} alt='' /></td>
      <td>{el.place}</td>
      <td onClick={() => setShow(true)}>update</td>
      
      <td 
         onClick={() => dispatch(deleteActivity({ id: el._id }))}>delete
      </td>
    


    </tr>
  );
};

export default ActivityCard;




