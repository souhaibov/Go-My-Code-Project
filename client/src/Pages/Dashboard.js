import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Style/Dashboard.css";
import { useDispatch } from "react-redux";
import { getUser } from "../Redux/userSlice/userSlice";
import { getActivity } from "../Redux/userSlice/activitySlice";
import { getEvent } from "../Redux/userSlice/eventSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, []);

  useEffect(() => {
    dispatch(getActivity())
  }, []);

  useEffect(() => {
    dispatch(getEvent())
  }, []);
    
  return (
    <div>
      <h1>Admin Dashboard </h1>
      <br />
      <div className="dashboard">
        <div className="dashboard_gauche">
          <br />
          <br />
          <div className="management_word">
            <h2>【 Ｍａｎａｇｅｍｅｎｔ 】</h2>
          </div>
          <br />
          <ul className="management_list">
            <Link to="/dashboard/user">
              {" "}
              <li> ♔ 𝓤𝓼𝓮𝓻 ♔</li> <br />{" "}
            </Link>
            <Link to="/dashboard/activity">
              <li> ♕ 𝓐𝓬𝓽𝓲𝓿𝓲𝓽𝓲𝓮𝓼 ♕</li> <br />
            </Link>
            <Link to="/dashboard/event">
              <li> ♘ 𝓔𝓿𝓮𝓷𝓽 ♘</li> <br />
            </Link>
            {/* <Link to=""><li> ♙ 𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼 ♙</li> <br /></Link>
            <Link to=""><li> ♙ 𝓜𝓮𝓶𝓫𝓮𝓻𝓼 ♙</li> <br /></Link>
            <Link to=""><li> ♛ 𝓒𝓸𝓪𝓬𝓱𝓼 ♛</li> <br /></Link>
            <Link to=""><li> ♝ 𝓜𝓪𝓷𝓪𝓰𝓲𝓷𝓰 𝓑𝓸𝓭𝔂 ♝</li> <br /></Link> */}
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
