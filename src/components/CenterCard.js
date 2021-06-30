import React from "react";
import { Link } from "react-router-dom";
import "./CenterCard.css";

const CenterCard = ({ center }) => {
  // console.log(center_id);
  return (
      <div className="card__container">
        <div className="card">
          <div className="center_name">
            <h4>Center name: {center.name}</h4>
          </div>
          <div className="center_details">
          <p>{center.address}</p>
            <p>Date : {center.sessions[0].date}</p>
            <p>From {center.from}</p>
            <p>Fee : {center.fee_type}</p>
            <p>Min age limit : {center.sessions[0].min_age_limit}</p>
            <p>Max age limit : {center.sessions[0].max_age_limit}</p>
            <p>vaccine : {center.sessions[0].vaccine}</p>
          </div>
        </div>
      </div>
  );
};

export default CenterCard;
