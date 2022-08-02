import React from 'react'
import '../App.css'
import '../stylesheets/UpcomingEvents.css'

export default function UpcomingEvents () {
  return (
    <section className="upcoming-container">
        <h2 className="upcoming-heading">Upcoming Events</h2>
        <hr className="header-row"></hr>
        <div className="event-heading-container">
        <h3>Rocket League</h3>
        <p className="view-all-link">View all</p>
        </div>
        <div className="event-box">
          <div className="event-type-container">
            <img className="event-logo" src="/rl-white.png"/>
          </div>
          <div className="event-details-container"></div>
          <div className="event-register-container"><button className="tier-button">Register Now</button></div>
          <div>
          </div>
        </div>
</section>
  )
}
