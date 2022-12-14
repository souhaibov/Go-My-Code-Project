import React from "react";
import { useSelector } from "react-redux";
import Comment from "../Comments/Comment";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "../Style/Events.css";

const Events = () => {
  const events = useSelector((store) => store.event?.Event?.event);

  return (
    <div>
      <br />

      {events?.map((el, i) => (
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
