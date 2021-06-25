import React from 'react'
import './CenterCard.css'

function CenterCard({center}) {
    return (
        <div className="card">
            <div className="center_name">
                <h1>{center.name}</h1>
                <p>State : {center.state_name}</p>
                <p>District : {center.district_name}</p>
            </div>
        </div>
    )
}

export default CenterCard
