import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesMenu.css'
import ACCRaceBox from './ACCRaceBox'

export default function F1RacesMenu () {
  return (
    <div className="races-menu-container">
<div className="race-tier-container">
      <ACCRaceBox raceName="Nürburgring" raceDate={new Date(2022, 8, 20).getTime()} raceFlag="/de.png" raceRound="1"/>
      <ACCRaceBox raceName="Brands Hatch" raceDate={new Date(2022, 8, 27).getTime()} raceFlag="/gb.png" raceRound="2"/>
      <ACCRaceBox raceName="Barcelona" raceDate={new Date(2022, 9, 4).getTime()} raceFlag="/es.png" raceRound="3"/>
      <ACCRaceBox raceName="Spa" raceDate={new Date(2022, 9, 11).getTime()} raceFlag="/be.png" raceRound="4"/>
      <ACCRaceBox raceName="Silverstone" raceDate={new Date(2022, 9, 18).getTime()} raceFlag="/gb.png" raceRound="5"/>
      <ACCRaceBox raceName="Monza" raceDate={new Date(2022, 9, 25).getTime()} raceFlag="/it.png" raceRound="6"/>
      <ACCRaceBox raceName="Zandvoort" raceDate={new Date(2022, 10, 1).getTime()} raceFlag="/nl.png" raceRound="7"/>
      <ACCRaceBox raceName="Misano" raceDate={new Date(2022, 10, 8).getTime()} raceFlag="/it.png" raceRound="8"/>
      <ACCRaceBox raceName="Hungaroring" raceDate={new Date(2022, 10, 15).getTime()} raceFlag="/hu.png" raceRound="9"/>
      <ACCRaceBox raceName="Paul Ricard" raceDate={new Date(2022, 10, 22).getTime()} raceFlag="/fr.png" raceRound="10"/>
    </div>
    </div>
  )
}
