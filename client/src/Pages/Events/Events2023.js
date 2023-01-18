import React from "react";
import { useSelector } from "react-redux";
import Comment from "../../Comments/Comment";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import "../../Style/Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  const events = useSelector((store) => store.event?.Event?.event);
  const events2023 = events.filter((e) => e.Date.includes(2023));
  return (
    <div>
         <ul class="events-navbar">
    <Link to='/Events2021'><li>2021</li></Link>
    <Link to='/Events2022'><li>2022</li></Link>
    <Link to='/Events2023'><li>2023</li></Link>
        </ul>
      <br />

      {events2023?.map((el, i) => (
        <div className="card-events">
          <br />
          <div className="yawm-maftouh">
            <div>
              {el?.tof?.map((tofa, i) => (
                <img key={i} src={tofa?.url} alt="" />
              ))}
            </div>
          </div>
          <div className="descriptions">
            <div className="info-events">
              <h2>♔ 𝓣𝓲𝓽𝓵𝓮 : {el?.Title} </h2>

              <h2>♕ 𝓟𝓵𝓪𝓬𝓮 : {el?.place} </h2>

              <h2>♘ 𝓓𝓪𝓽𝓮 : {el?.Date} </h2>
              <br />
              <p>•• 𝐝𝑒s¢г𝕚𝓅𝓽𝒾𝑜𝓷 •• : {el?.Description}</p>
            </div>

            <div className="comment-event">
              <Comment />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
