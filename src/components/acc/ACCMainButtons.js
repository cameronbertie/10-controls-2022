import React from 'react'
import '../../App.css'
import '../../stylesheets/F1MainButtons.css'
import { Link } from 'react-router-dom'

function ACCMainButtons () {
  return (
    <>
    <section className="tier-grid-container-2">

    <Link to='/acc/races' className="right-grid-4 button-box" >
    <div className="access-heading">Races</div>
  </Link>

  <Link to='/acc/drivers' className="left-grid-4 button-box">
    <div className="access-heading">Drivers</div>
  </Link>

  <Link to='/acc/register' className="right-grid-4 button-box">
    <div className="access-heading">Register</div>
  </Link>
</section>
</>
  )
}

export default ACCMainButtons
// style={{ backgroundImage: `linear-gradient(180deg, rgba(73,40,51,0.6) 0%, rgba(73,40,51,0.6) 100%), url(${'/acc-screenshot-1.jpg'})` }}

// background-image: linear-gradient(180deg, rgba(193,135,148,1) 0%, rgba(193,135,148,0.8) 100%), url("/public/f1-ferrari-screenshot-1.jpg");
