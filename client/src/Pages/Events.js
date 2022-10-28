import React from "react";
import { useSelector } from "react-redux";
import "../Style/Events.css";

const Events = () => {
  const events = useSelector((store) => store.event?.Event?.event);

  return (
    <div>
      <br />
      <h1>Open Days</h1>
      {events?.map((el, i) => (
        <div className="card-events">
          <br />
          <div className="yawm-maftouh">
            <div>
              <img
                src={el.tof}
                alt="pic"
              ></img>
            </div>
        
          </div>
          <div className="descriptions">
            <br />
            <br />
            <br />
            <h2>𝓟𝓵𝓪𝓬𝓮 : {el.place} </h2>
            <br />
            <br />
            <h2> ♜ ᗪαţ𝔢 :♜  {el.Date} </h2>
            <br />
            <br />
            <h2>•• 𝐝𝑒s¢г𝕚𝓅𝓽𝒾𝑜𝓷 •• : {el.Description}</h2>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;

