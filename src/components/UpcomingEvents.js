import React from 'react'
import '../App.css'

import EventBox from './EventBox'

export default function UpcomingEvents () {
  return (
    <section className="upcoming-container">
        <h2 className="upcoming-heading">Upcoming Events</h2>
        <hr className="header-row"></hr>
        <EventBox />
        <EventBox />
</section>
  )
}
