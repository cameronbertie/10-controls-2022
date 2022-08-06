import React from 'react'
import PropTypes from 'prop-types'

export default function F1ConstructorStanding ({ teamColor, teamBackground, teamImage, constructorPosition, constructorName, constructorPoints }) {
  return (
    <div className="team-container">
        <div style={{ background: teamBackground }} className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container-2">
          <h4 className="team-name-2">{constructorPosition}</h4>
            <img className="team-image" src={teamImage} />
            </div>
            <h3 className="driver-name">{constructorName}</h3>
            </div>
            <div className="flag-number-container-2">
            <div style={{ background: teamColor }} className="rectangle"></div>
          <h2>{constructorPoints}</h2>
        </div>
        </div>
    </div>
  )
}

F1ConstructorStanding.propTypes = {
  teamColor: PropTypes.string.isRequired,
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  constructorName: PropTypes.string.isRequired,
  constructorPosition: PropTypes.string.isRequired,
  constructorPoints: PropTypes.string.isRequired
}
