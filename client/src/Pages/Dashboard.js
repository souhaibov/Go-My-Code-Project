import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Style/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard </h1><br />
      <div className="dashboard">
        <div className="dashboard_gauche">
          <br /><br />
          <div className="management_word"><h2>【  Ｍａｎａｇｅｍｅｎｔ 】</h2></div>
          <br />
          <ul className="management_list">

            <Link to=""> <li> ♔ 𝓐𝓭𝓶𝓲𝓷 ♔</li> <br /> </Link> 
            <Link to=""><li> ♛ 𝓒𝓸𝓪𝓬𝓱𝓼 ♛</li> <br /></Link>
            <Link to=""><li> ♕ 𝓜𝓪𝓷𝓪𝓰𝓲𝓷𝓰 𝓑𝓸𝓭𝔂 ♕</li> <br /></Link>
            <Link to=""><li> ♘ 𝓐𝓬𝓽𝓲𝓿𝓲𝓽𝓲𝓮𝓼 ♘</li> <br /></Link>
            <Link to="/dashboard/M_event"><li> ♝ 𝓔𝓿𝓮𝓷𝓽 ♝</li> <br /></Link>
            <Link to=""><li> ♙ 𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼 ♙</li> <br /></Link>
            <Link to=""><li> ♙ 𝓜𝓮𝓶𝓫𝓮𝓻𝓼 ♙</li> <br /></Link>
            
          </ul>
        </div>

        <div className="dashboard_droite">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
