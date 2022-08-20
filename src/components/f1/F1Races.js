/* eslint-disable no-unused-vars */
import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Main.css'
import F1TierGrid from './F1TierGrid'
import F1RacesMenu from './F1RacesMenu'

function F1Races () {
  return (
    <>
    {/* <SecondaryNav /> */}

      <div className="hero-image">
  <div className="hero-text">
    <h1>F1 22 League Races</h1>
  </div>
</div>

<div className="page-content">
<F1RacesMenu />
</div>
</>
  )
}

export default F1Races
