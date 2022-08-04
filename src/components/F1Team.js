import React from 'react'
import PropTypes from 'prop-types'

export default function F1Team ({ teamImage, teamName, driver1Name, driver1Number, driver1Flag, driver2Name, driver2Number, driver2Flag }) {
  return (
    <div className="team-container">
        <div className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div className="rectangle"></div>
            <img className="team-image" src="/Mercedes.png" />
            <h6 className="team-name">{teamName}</h6>
            </div>
            <h3 className="driver-name">Mute</h3>
            </div>
            <div className="flag-number-container">
          <h2>53</h2>
          <img className="driver-flag" src="/ng.png" />
        </div>
        </div>
        <div className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div className="rectangle"></div>
            <img className="team-image" src="/Mercedes.png" />
            <h6 className="team-name">Mercedes</h6>
            </div>
            <h3 className="driver-name">Mute</h3>
            </div>
            <div className="flag-number-container">
          <h2>53</h2>
          <img className="driver-flag" src="/ng.png" />
        </div>
        </div>
    </div>
  )
}
