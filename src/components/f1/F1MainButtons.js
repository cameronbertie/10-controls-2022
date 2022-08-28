import React from 'react'
import '../../App.css'
import '../../stylesheets/F1MainButtons.css'
import { Link } from 'react-router-dom'

function F1MainButtons () {
  return (
    <>
    <section className="tier-grid-container-2">

    <Link to='/f1/register' className="right-grid-2 button-box">
    <div className="access-heading">Races</div>
  </Link>

  <Link to='/f1/register' className="left-grid-2 button-box">
    <div className="access-heading">Standings</div>
  </Link>

  <Link to='/f1/register' className="left-grid-2 button-box">
    <div className="access-heading">Drivers</div>
  </Link>

  <Link to='/f1/register' className="right-grid-2 button-box">
    <div className="access-heading">Register</div>
  </Link>
</section>
</>
  )
}

export default F1MainButtons
