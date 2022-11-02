import React from "react";
import { useSelector } from "react-redux";
import "../Style/Events.css";

const Events = () => {
  const events = useSelector((store) => store.event?.Event?.event);

  return (
    <div>
      <br />
     
      {events?.map((el, i) => (
        <div className="card-events">
          <br/>
          <div className="yawm-maftouh">
            <div>
            {el?.tof?.map((tofa,i)=><img key={i} src={tofa?.url} alt='' />)}
            </div>
       
          </div>
          <div className="descriptions">
          <h2>♔ 𝓣𝓲𝓽𝓵𝓮 : {el?.Title} </h2>
            
            <br />
            <br />
            <h2>♕  𝓟𝓵𝓪𝓬𝓮 : {el?.place} </h2>
            <br />
            <br />
            <h2>♘   𝓓𝓪𝓽𝓮 :  {el?.Date} </h2>
            <br />
            <br />
            <h2>•• 𝐝𝑒s¢г𝕚𝓅𝓽𝒾𝑜𝓷 •• : {el?.Description}</h2>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;

