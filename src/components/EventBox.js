import React from 'react'
import '../stylesheets/UpcomingEvents.css'

export default function EventBox () {
  return (
    <div>
        <div className="event-heading-container">
        <h3>Rocket League</h3>
        <p className="view-all-link">View all</p>
        </div>
        <div className="event-box">
          <div className="event-type-container">
            <div className="event-logo-container">
            <img className="event-logo" src="/rl-white.png"/>
            </div>
            <h6 className="event-type-name">2022-2023 Open Challenge</h6>
          </div>
          <div className="event-details-container">
            <h4 className="event-main-header">Autumn - Qualifier Event 1</h4>
            <h5 className="event-secondary-header">August 4th 2022</h5>
          </div>
          <div className="event-register-container"><button className="tier-button">Register Now</button></div>
        </div>
        </div>
  )
}
