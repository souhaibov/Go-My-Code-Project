import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteActivity, updateActivity } from "../../Redux/userSlice/activitySlice";

const ActivityCard = ({ el ,ping ,setPing}) => {
    

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [Activity, setActivity] = useState({});
  const handleChange = (e) =>
    setActivity({ ...Activity, [e.target.name]: e.target.value });
  return show ? (
    <tr className="info_Activity">
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="number" defaultValue={el.NumberOfStudents} name="NumberOfStudents" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.tof} name="tof" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el.place} name="place" />
      </td>
      
      <td onClick={() => {dispatch(updateActivity({ id: el._id, Activity: Activity }));setShow(false);setPing(!ping)}}>
      <button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button>
      </td>
      <td onClick={() => setShow(false)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>cancel</button></td>
    </tr>
  ) : (
    <tr className="info_Activity">
      <td>{el.NumberOfStudents}</td>
      <td><img style={{width:"60px", height:"60px"}} src={el.tof} alt='' /></td>
      <td>{el.place}</td>
      <td onClick={() => setShow(true)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button></td>
      
      <td 
         onClick={() =>{ dispatch(deleteActivity({ id: el._id })); setPing(!ping)}}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>delete</button>
      </td>
    


    </tr>
  );
};

export default ActivityCard;




