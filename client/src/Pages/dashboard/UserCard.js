import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../Redux/userSlice/userSlice";

const UserCard = ({ el }) => {
    

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  return show ? (
    <tr className="info_user">
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.first_name} name="first_name" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.last_name} name="last_name" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.phone_number} name="phone_number" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.email} name="email" />
      </td>
      <td>
        <input onChange={handleChange} type="text" defaultValue={el.Status} name="Status" />
      </td>
      <td onClick={() => {dispatch(updateUser({ id: el._id, user: user }));setShow(false)}}>
        update
      </td>
      <td onClick={() => setShow(false)}>cancel</td>
    </tr>
  ) : (
    <tr className="info_user">
      <td>{el.first_name}</td>
      <td>{el.last_name}</td>
      <td>{el.phone_number}</td>
      <td>{el.email}</td>
      <td>{el.Status}</td>
      <td onClick={() => setShow(true)}>update</td>
      
      <td 
         onClick={() => dispatch(deleteUser({ id: el._id }))}>delete
      </td>
     
    </tr>
  );
};

export default UserCard;
