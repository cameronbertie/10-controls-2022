/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'
import '../stylesheets/F1Main.css'
import SecondaryNav from './SecondaryNav'
import F1RaceFormat from './F1RaceFormat'
import F1TierGrid from './F1TierGrid'
import F1NextRace from './F1NextRace'

function F1Main () {
  return (
    <>
    {/* <SecondaryNav /> */}

      <div className="hero-image">
  <div className="hero-text">
    <h1>F1 22 League Racing</h1>
  </div>
</div>

<div className="page-content">
<F1RaceFormat />
<F1TierGrid />
</div>
<div className="page-content-full">
<F1NextRace />
</div>
</>
  )
}

export default F1Main
