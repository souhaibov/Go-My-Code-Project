import React from "react";
import { useSelector } from "react-redux";
import Comment from "../Comments/Comment";
import "../Style/activities.css";
const Activities = () => {
  const activity = useSelector((store) => store.activity?.Activity);

  return (
    <div>
      <br />
      <h1>Training sessions</h1>
     
      <div className="card-Activities">
        {activity?.map((el, i) => (
          <div key={i} className="Activities">
            <br />
           
            <div className="titles">
              <h2 style={{ fontSize: "26px", color: "rgb(11, 60, 34)" }}>
                ใ๏ปฟWork Spaceใ: {el?.place}
              </h2>
              
              <h2 style={{ color: "darkgreen", fontSize: "24px" }}>
                {" "}
                ๐๐ต๐ช๐ผ๐ผ ๐๐ช๐ฝ๐ฎ : {el?.classDate}
              </h2>
              
              <h2 style={{ color: "darkgreen", fontSize: "22px" }}>
                ๐๐พ๐ถ๐ซ๐ฎ๐ป ๐๐ฏ ๐ข๐ฝ๐พ๐ญ๐ฎ๐ท๐ฝ๐ผ : {el?.NumberOfStudents}
              </h2>
              <br />
            </div>
           

            <div className="list_tof_act">
              {el?.tof?.map((tofa, i) => (
                <img key={i} src={tofa?.url} alt="" />
              ))}
              
            </div><br/>
           <div className="zone-comment">
            <Comment />
            </div>
          </div> 
          
        ))}
        
        
      </div>
    </div>
  );
};

export default Activities;
