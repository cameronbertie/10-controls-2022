import React from 'react'
import '../App.css'
import '../stylesheets/F1NextRace.css'

function F1NextRace () {
  return (
    <>
      <section className="next-race-container">
        <h2 className="next-race-heading">Next Race</h2>
        <hr className="header-row"></hr>
        <div className="view-all-container">
        <p className="view-all-link">View all races</p>
        </div>
        <div className="next-race-box">
          <div className="flag-img-container">
          <img className="flag-img" src="/au.png"/>
          </div>
          <h2 className="race-title">Melbourne</h2>
          <div className="next-race-tier-container">
            <div className="next-race-tier-left">
              <h3 className="race-tier">Tier A</h3>
              <h4 className="race-date">Friday, 5th August 2022</h4>
              <h4 className="race-time">19:30 BST</h4>
            </div>
            <div className="next-race-tier-right">
              <h3 className="race-tier">Tier B</h3>
              <h4 className="race-date">Saturday, 6th August 2022</h4>
              <h4 className="race-time">19:30 BST</h4>
            </div>
          </div>
          <div>
          <button className="tier-button">Register Now</button>
          </div>
        </div>
</section>
</>
  )
}

export default F1NextRace
