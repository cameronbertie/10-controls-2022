import React from 'react'
import '../App.css'

import EventBox from './EventBox'

export default function UpcomingEvents () {
  return (
    <section className="upcoming-container">
        <h2 className="upcoming-heading">Upcoming Events</h2>
        <hr className="header-row"></hr>
        <EventBox game="Rocket League" gameImage="/rl-white.png" tournamentType="2022-2023 Open Challenge" tournamentName="Autumn - Qualifier Event 2" tournamentDate="29th September 2022" buttonLink="/rl/tournaments" viewAllLink="/rl/tournaments"/>
        <EventBox game="f1 22" gameImage="/f1-white.png" tournamentType="Tier B - Season 1" tournamentName="Zandvoort" tournamentDate="3rd September 2022" buttonLink="/f1/register" viewAllLink="/f1/races"/>
</section>
  )
}
