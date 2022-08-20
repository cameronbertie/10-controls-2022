import React from 'react'
import PropTypes from 'prop-types'

export default function F1DriverStanding ({ teamBackground, teamImage, driverFlag, driverPosition, driverName, constructorName, driverPoints }) {
  return (
      <div className="team-container">
          <div style={{ background: teamBackground }} className="team-member-box">
            <div className="team-details-outer">
            <div className="team-details-container-2">
            <h4 className="team-name-2">{driverPosition}</h4>
              <img className="team-image-driver" src={driverFlag} />
              </div>
              <h3 className="driver-name">{driverName}</h3>
              </div>
              <div className="team-points-container">
                <div className="logo-name-container">
              <h6 className="team-name-driver">{constructorName}</h6>
              <img className="team-image" src={teamImage} />
              </div>
            <h2>{driverPoints}</h2>
          </div>
          </div>
      </div>
  )
}

F1DriverStanding.propTypes = {
  teamColor: PropTypes.string.isRequired,
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  constructorName: PropTypes.string.isRequired,
  driverPosition: PropTypes.string.isRequired,
  driverPoints: PropTypes.string.isRequired,
  driverFlag: PropTypes.string.isRequired,
  driverName: PropTypes.string.isRequired
}
