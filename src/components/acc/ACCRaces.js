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

      <div className="hero-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(73,40,51,0.6) 0%, rgba(73,40,51,0.6) 100%), url(${'/acc-screenshot-2.jpg'})` }}>
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
