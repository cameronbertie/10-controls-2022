import React from 'react'
import '../App.css'
import '../stylesheets/Home.css'
import UpcomingEvents from './UpcomingEvents'

export default function Home () {
  return (
    <div>
    <div className="page-content">
      <div className="home-page-content">
      <h6>This is</h6>
      <h1>10 Controls</h1>
      <h6>EUROPE’S NEW HOME FOR COMPETITIVE GAMING AND ESPORTS TOURNAMENTS</h6>
      </div>
      <div className="home-page-hero-container">
<img className="home-page-hero" src="/ferrari-1920x1080.png"/>
<h2>10 Controls Welcome F1 22 League Races</h2>
<button className="home-page-hero-button">Register Now</button>
</div>
<div className="featured-section-container">
<div className="featured-content">
<img className="featured-image-box" src="/rocket-league-feature.png"/>
<h2>Rocket League Tournaments Have Returned To 10 Controls</h2>
{/* <a className="featured-link">Watch now</a> */}
</div>
<div className="featured-content">
<img className="featured-image-box" src="/f1-featured-image.png"/>
<h2>Watch the replay for our latest f1 22 league race</h2>
{/* <a className="featured-link">Watch now</a> */}
</div>
</div>
</div>
<div className="page-content-full">
<UpcomingEvents />
</div>
</div>
  )
}
