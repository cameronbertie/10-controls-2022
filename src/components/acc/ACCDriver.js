import React from 'react'
import PropTypes from 'prop-types'

export default function F1Team ({ carName, driver1Name, driver1Number, driver1Flag }) {
  return (
    <div className="team-container">
        <div className="team-member-box-acc">
          <div className="team-details-outer">
          <div className="team-details-container-acc">
          <h2>{driver1Number}</h2>
            </div>
            <h3 className="driver-name">{driver1Name}</h3>
            </div>
            <div className="flag-number-container-acc">
            <h6 className="team-name">{carName}</h6>
          <img className="driver-flag" src={driver1Flag} />
        </div>
        </div>
    </div>
  )
}

F1Team.propTypes = {
  carName: PropTypes.string.isRequired,
  driver1Name: PropTypes.string.isRequired,
  driver1Flag: PropTypes.string.isRequired,
  driver1Number: PropTypes.string.isRequired
}
