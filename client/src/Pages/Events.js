import React from "react";
import { useSelector } from "react-redux";
import "../Style/Events.css";

const Events = () => {
  const events = useSelector((store) => store.event?.Event?.event);
  console.log(events);
  return (
    <div>
      <br />
      <h1>Open Days</h1>
      {events.map((el, i) => (
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
            <h2>Place : {el.place} </h2>
            <br />

            <br />
            <h2>Description : {el.description}</h2>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;

