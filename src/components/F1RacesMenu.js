import React, { useState } from 'react'
import '../App.css'
import '../stylesheets/F1RacesMenu.css'
import F1RacesTierA from './F1RacesTierA'
import F1RacesTierB from './F1RacesTierB'

export default function F1RacesMenu () {
  return (
    <div className="races-menu-container">
        <div className="season-container">
        <div className="races-menu-text">Season 1</div>
        </div>
        <div className="tier-container">
        <div className="races-menu-link">Tier A</div>
        <div className="races-menu-link">Tier B</div>
        </div>
        <div>
          <F1RacesTierA />
          <F1RacesTierB />
        </div>
        </div>

  )
}
