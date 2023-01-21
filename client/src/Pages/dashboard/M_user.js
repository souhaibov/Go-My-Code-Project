import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../Redux/userSlice/userSlice";
import AddFiles from "../UploadimgUser";
import "./M_user.css";
import UserCard from "./UserCard";



const M_user = ({ping,setPing}) => {
  const data = useSelector((store) => store.user?.users);
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    birthday:"",
    Poster: [],
    Status: "",
    level: "",
  });

  const dispatch = useDispatch();

  return (
    <div className="user_data">
      <br />
      <h2>User List</h2>
      <br />
      <button onClick={() => setShow(!show)}>Add a New User</button>
      <br />
      {show ? (
        <div>
          <div id="form" className="topBefore">
            <div className="info">
              <input
                type="text"
                placeholder="first name"
                onChange={(e) =>
                  setRegister({ ...register, first_name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="last name"
                onChange={(e) =>
                  setRegister({ ...register, last_name: e.target.value })
                }
              />
              <input
               type="number"
               maxLength="14"
                placeholder="phone number"
               
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
                onChange={(e) =>
                  setRegister({ ...register, phone_number: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                placeholder="email"
                onChange={(e) =>
                  setRegister({ ...register, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
              />
             <input
                type="string"
                placeholder="Level"
                onChange={(e) =>
                  setRegister({ ...register, level: e.target.value })
                }
              />
             <AddFiles setUser={setRegister} user={register} />

             
             
              <input
                type="text"
                placeholder="Status"
                
                onChange={(e) =>
                  setRegister({ ...register, Status: e.target.value })
                }
              />
              
              <input
               
                type="Number"
                placeholder="Birthday"
                min={1940}
                onChange={(e) =>
                  setRegister({ ...register, birthday: e.target.value })
                }
              />
            </div>

            <button className={`${register.first_name==="" || register.last_name==="" || register.email==="" || register.password==="" ? "disabled_button" : "" }`} disabled={register.first_name==="" || register.last_name==="" || register.email==="" || register.password===""}
              onClick={() => {
                dispatch(userRegister(register))
                setPing(!ping)
                setShow(false)
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
      <br />
      <div className="user_list">
        <table width="100%">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
            <th>Phone number</th>
           
            <th>Birthday</th>
            <th>Email</th>
            <th>Status</th>
            <th>Level</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {data?.map((el, i) => (
            <UserCard key={i} el={el} ping={ping} setPing={setPing}/>
          ))}
        </table>
      </div>
    </div>
  );
};

export default M_user;
