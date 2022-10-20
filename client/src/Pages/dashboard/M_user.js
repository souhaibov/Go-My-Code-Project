import React, { useState } from "react";
import {  useSelector } from "react-redux";
import "./M_user.css";
import UserCard from "./UserCard";

const M_user = () => {
  const data = useSelector((store) => store.user?.users);
  
  return (
    <div className="user_data">
      <br />
      <h2>User List</h2>
      <br />
      <button >Add a New User</button>
      <br />
      <br />
      <div className="user_list">
        <table width="100%">
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {data?.map((el,i) => (
           <UserCard key={i} el={el}/>
          ))}
        </table>
      </div>
    </div>
  );
};

export default M_user;
