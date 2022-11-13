import React from 'react'
import '../App.css'
import '../stylesheets/Home.css'
// import UpcomingEvents from './UpcomingEvents'
import LatestVideos from './LatestVideos'
import Footer from './Footer'
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
      <Link to="rl/tournaments">
      <div className="home-page-hero-container">
<img className="home-page-hero" src="/rl-hero-bg.jpg"/>
<h2>ROCKET LEAGUE TOURNAMENTS HAVE RETURNED TO 10 CONTROLS</h2>
<button className="home-page-hero-button">Register Now</button>
</div>
</Link>
<div className="featured-section-container">
<Link to="/f1" className="featured-content">
<img className="featured-image-box" src="/f1-featured-image.png"/>
<h2>10 CONTROLS WELCOME F1 22 LEAGUE RACES</h2>
{/* <a className="featured-link">Watch now</a> */}
</Link>

<Link to="/rl" className="featured-content">
<img className="featured-image-box" src="/rocket-league-feature.png"/>
<h2>Get Involved in our rocket league tournaments and register now</h2>
{/* <a className="featured-link">Watch now</a> */}
</Link>
</div>
</div>
{/* <div className="page-content-full">
<UpcomingEvents />
</div> */}
<div className="page-content">
  <LatestVideos />
<Footer />
</div>
</div>
  )
}
