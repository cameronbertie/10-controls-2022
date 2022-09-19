import React from 'react'
import '../../App.css'
import '../../stylesheets/F1MainButtons.css'
import { Link } from 'react-router-dom'

function ACCMainButtons () {
  return (
    <>
    <div className="tier-grid-container-2">
          <Link to='/acc/races'>
          <div className="main-button-link">
            Races
          </div>
          </Link>
          <Link to='/acc/drivers'>
          <div className="main-button-link">Drivers</div>
          </Link>
          <Link to='/acc/register'>
          <div className="main-button-link">Register</div>
          </Link>
        </div>
</>
  )
}

export default ACCMainButtons
