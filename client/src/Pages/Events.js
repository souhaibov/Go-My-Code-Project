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
              <h2>โ ๐ฃ๐ฒ๐ฝ๐ต๐ฎ : {el?.Title} </h2>

              <h2>โ ๐๐ต๐ช๐ฌ๐ฎ : {el?.place} </h2>

              <h2>โ ๐๐ช๐ฝ๐ฎ : {el?.Date} </h2>
              <br />
              <p>โขโข ๐๐sยขะณ๐๐๐ฝ๐พ๐๐ท โขโข : {el?.Description}</p>
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
