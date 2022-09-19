import React from 'react'
import PropTypes from 'prop-types'

export default function F1ConstructorStanding ({ teamColor, teamBackground, teamImage, constructorPosition, constructorName, constructorPoints }) {
  return (
    <div className="team-container-4">
        <div style={{ background: teamBackground }} className="team-member-box-4">
          <div className="team-details-outer-4">
          <div className="team-details-container-4">
          <h4 className="team-name-4">{constructorPosition}</h4>
            <img className="team-image-4" src={teamImage} />
            </div>
            <h3 className="driver-name-4">{constructorName}</h3>
            </div>
            <div className="flag-number-container-4">
            <div style={{ background: teamColor }} className="rectangle-4"></div>
          <h2 className="driver-points-4">{constructorPoints}</h2>
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
