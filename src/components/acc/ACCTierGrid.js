import React from 'react'
import '../../App.css'
import '../../stylesheets/ACCTierGrid.css'
import { Link } from 'react-router-dom'

function ACCTierGrid () {
  return (
    <>
      <section className="tier-grid-container">
  <div className="left-grid grid-acc">
    {/* <div className="grid-heading">Tier A</div>
    <div className="grid-subheading">Season 1</div> */}
    <div className="grid-heading-acc">Every Tuesday</div>
    <div className="grid-heading-acc">19:30 BST</div>
    <div className="grid-text">starts 20<sup>th</sup> september</div>
    <Link to='/acc/register'><button className="grid-button">Register Now</button></Link>
  </div>
</section>
</>
  )
}

export default ACCTierGrid
