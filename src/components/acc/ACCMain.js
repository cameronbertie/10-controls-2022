/* eslint-disable no-unused-vars */
import React from 'react'
import '../../App.css'
import '../../stylesheets/ACCMain.css'
// import SecondaryNav from '../SecondaryNav'
import ACCRaceFormat from './ACCRaceFormat'
import ACCMainButtons from './ACCMainButtons'
import ACCTierGrid from './ACCTierGrid'
import ACCPrize from './ACCPrize'
// import LatestVideos from '../LatestVideos'
import Footer from '../Footer'

function ACCMain () {
  return (
    <>
    {/* <SecondaryNav /> */}

      <div className="hero-image">
  <div className="hero-text">
    <h1>ASSETTO CORSA COMPETIZIONE League Racing</h1>
  </div>
</div>

<div className="page-content">
<ACCMainButtons />
<ACCRaceFormat />
<ACCTierGrid />
</div>
<div className="page-content-full">
<ACCPrize />
</div>
<div className="page-content">
  {/* <LatestVideos /> */}
<Footer/>
</div>
</>
  )
}

export default ACCMain
