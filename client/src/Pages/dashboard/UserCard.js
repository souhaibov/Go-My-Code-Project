import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../Redux/userSlice/userSlice";

const UserCard = ({ el , ping , setPing }) => {
    

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  return show ? (
    <tr className="info_user">
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el?.first_name} name="first_name" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el?.last_name} name="last_name" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el?.Poster} name="tof" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="number" maxLength="14" name="phone_number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" defaultValue={el?.phone_number}/>
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el?.email} name="email" />
      </td>
      <td>
        <input style={{height:"35px",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(100, 199, 146)"}} onChange={handleChange} type="text" defaultValue={el?.Status} name="Status" />
      </td>
      <td onClick={() => {dispatch(updateUser({ id: el?._id, user: user }));setShow(false);setPing(!ping)}}>
        <button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button>
      </td>
      <td onClick={() => setShow(false)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>cancel</button></td>
    </tr>
  ) : (
    <tr className="info_user">
      <td>{el?.first_name}</td>
      <td>{el?.last_name}</td>
      <td>{el?.Poster?.map((tofa,i)=><img key={i} style={{width:"60px", height:"60px"}} src={tofa?.url} alt='' />)}</td>
      <td>{el?.phone_number}</td>
      <td>{el?.email}</td>
      <td>{el?.Status}</td>
      <td onClick={() => setShow(true)}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>update</button></td>
      
      <td 
         onClick={() =>{ dispatch(deleteUser({ id: el._id }));setPing(!ping)}}><button style={{width:"70px",height:"30px",fontSize:"16px",backgroundColor:"rgb(20, 159, 146)"}}>delete</button>
      </td>
     
    </tr>
  );
};

export default UserCard;
