import React from "react";
import "./CenterCard.css";

const CenterCard = ({ center }) => {
  // console.log(center_id);
  return (
    <div className="card__container">
      <div className="card">
        <div className="center_name">
          <h4>{center.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
