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
                【﻿Work Space】: {el?.place}
              </h2>
              
              <h2 style={{ color: "darkgreen", fontSize: "24px" }}>
                {" "}
                𝓒𝓵𝓪𝓼𝓼 𝓓𝓪𝓽𝓮 : {el?.classDate}
              </h2>
              
              <h2 style={{ color: "darkgreen", fontSize: "22px" }}>
                𝓝𝓾𝓶𝓫𝓮𝓻 𝓞𝓯 𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼 : {el?.NumberOfStudents}
              </h2>
              <br />
            </div>
           

            <div className="list_tof_act">
              {el?.tof?.map((tofa, i) => (
                <img key={i} src={tofa?.url} alt="" />
              ))}
              <br />
            </div>
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
