import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesMenu.css'
import ACCRaceBox from './ACCRaceBox'

export default function F1RacesMenu () {
  return (
    <div className="races-menu-container">
<div className="race-tier-container">
      <ACCRaceBox raceName="Nürburgring" raceDate={new Date(2022, 7, 5).getTime()} raceFlag="/de.png" raceRound="1"/>
      <ACCRaceBox raceName="Brands Hatch" raceDate={new Date(2022, 7, 12).getTime()} raceFlag="/gb.png" raceRound="2"/>
      <ACCRaceBox raceName="Barcelona" raceDate={new Date(2022, 7, 19).getTime()} raceFlag="/es.png" raceRound="3"/>
      <ACCRaceBox raceName="Spa" raceDate={new Date(2022, 7, 26).getTime()} raceFlag="/be.png" raceRound="4"/>
      <ACCRaceBox raceName="Silverstone" raceDate={new Date(2022, 8, 2).getTime()} raceFlag="/gb.png" raceRound="5"/>
      <ACCRaceBox raceName="Monza" raceDate={new Date(2022, 8, 9).getTime()} raceFlag="/it.png" raceRound="6"/>
      <ACCRaceBox raceName="Zandvoort" raceDate={new Date(2022, 7, 5).getTime()} raceFlag="/nl.png" raceRound="7"/>
      <ACCRaceBox raceName="Misano" raceDate={new Date(2022, 7, 12).getTime()} raceFlag="/it.png" raceRound="8"/>
      <ACCRaceBox raceName="Hungaroring" raceDate={new Date(2022, 7, 19).getTime()} raceFlag="/hu.png" raceRound="9"/>
      <ACCRaceBox raceName="Paul Ricard" raceDate={new Date(2022, 7, 26).getTime()} raceFlag="/fr.png" raceRound="10"/>
    </div>
    </div>

  )
}
