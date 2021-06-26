import React, { useEffect, useState } from "react";
import CenterCard from './CenterCard'
import './Centers.css'

const Centers = ({centers, sessions}) => {
    return (
        <div>
          <div className="center__wrapper">
        {centers && centers.length === 0 ? (
          <p>Oop's the server didn't sent the data for </p>
        ) : (
          centers?.map((center) => {
            return (
              <div>
                <CenterCard center={center} />
              </div>
            );
          })
        )}
      </div>
    </div>
    )
}

export default Centers
