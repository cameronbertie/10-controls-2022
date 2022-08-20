import React from 'react'
import '../App.css'
import '../stylesheets/Home.css'
import UpcomingEvents from './UpcomingEvents'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div>
    <div className="page-content">
      <div className="home-page-content">
      <h6>This is</h6>
      <h1>10 Controls</h1>
      <h6>EUROPE’S NEW HOME FOR COMPETITIVE GAMING AND ESPORTS TOURNAMENTS</h6>
      </div>
      <Link to="f1/register">
      <div className="home-page-hero-container">
<img className="home-page-hero" src="/ferrari-1920x1080.png"/>
<h2>10 Controls Welcome F1 22 League Races</h2>
<button className="home-page-hero-button">Register Now</button>
</div>
</Link>
<div className="featured-section-container">
<Link to="rl/tournaments" className="featured-content">
<img className="featured-image-box" src="/rocket-league-feature.png"/>
<h2>Rocket League Tournaments Have Returned To 10 Controls</h2>
{/* <a className="featured-link">Watch now</a> */}
</Link>

<Link to="f1" className="featured-content">
<img className="featured-image-box" src="/f1-featured-image.png"/>
<h2>Drivers for the inaugural f1 22 racing league have been announced</h2>
{/* <a className="featured-link">Watch now</a> */}
</Link>
</div>
</div>
<div className="page-content-full">
<UpcomingEvents />
</div>
</div>
  )
}
