import React from 'react'
import '../../App.css'
import '../../stylesheets/F1MainButtons.css'
import { Link } from 'react-router-dom'

function ACCMainButtons () {
  return (
    <>
    <section className="tier-grid-container-2">

    <Link to='/acc/races' className="right-grid-2 button-box">
    <div className="access-heading">Races</div>
  </Link>

  <Link to='/acc/drivers' className="left-grid-2 button-box">
    <div className="access-heading">Drivers</div>
  </Link>

  <Link to='/acc/register' className="right-grid-2 button-box">
    <div className="access-heading">Register</div>
  </Link>
</section>
</>
  )
}

export default ACCMainButtons
