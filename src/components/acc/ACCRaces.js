/* eslint-disable no-unused-vars */
import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Main.css'
import ACCRacesMenu from './ACCRacesMenu'
import Footer from '../Footer'

function ACCRaces () {
  return (
    <>
    {/* <SecondaryNav /> */}

      <div className="hero-image">
  <div className="hero-text">
    <h1>ASSETTO CORSA COMPETIZIONE LEAGUE RACES</h1>
  </div>
</div>

<div className="page-content">
<ACCRacesMenu />
<Footer />
</div>
</>
  )
}

export default ACCRaces
