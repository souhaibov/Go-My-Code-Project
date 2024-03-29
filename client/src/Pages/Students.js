import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Style/Student.css";

const Students = ({ping}) => {
 
  return (
    <div>
    
      <div className="students">
        <div className="students_left">
          <br />
          
          <div className="students_word">
            <p>【 Group Level Students 】</p>
          </div>
        
          <ul className="students_list">
            <h1>- club headquarters groups -</h1>
            <Link to="/Students/StudentsLevel1">
              {" "}
              <li> ♙ Group Level 1 ♙</li>{" "}
            </Link>
            <h2>➯Number of Players = 16</h2>
            <Link to="/Students/StudentsLevel2">
              <li> ♝ Group Level 2 ♝</li>
            </Link>
            <h2>➯Number of Players = 14</h2>
            <Link to="/Students/StudentsLevel3">
              <li> ♝ Group Level 3 ♝</li> 
            </Link>
            <h2>➯Number of Players = 12</h2>
            <Link to="/Students/StudentsLevel4">
              <li> ♔ Group Level 4 ♔</li>
            </Link>
            <h2>➯Number of Players = 10</h2>
            <h1>- El-Maya groups -</h1>
            <Link to="/Students/StudentsLevelMaya">
              <li> ♘ Mixed group ♘</li>
            </Link>
            <h2>➯Number of Players = 14</h2>
            <h1>- Ghannouch groups -</h1>
            <Link to="/Students/StudentsLevelGhannouch">
              <li> ♘ Mixed group ♘</li>
            </Link>
            <h2>➯Number of Players = 13</h2>

          </ul>
        </div>

        <div className="students_right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Students;
