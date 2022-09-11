import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Prize.css'
import { Link } from 'react-router-dom'

function ACCPrize () {
  return (
    <>
      <section className="next-race-container">
        <h2 className="next-race-heading">Points</h2>
        <hr className="header-row"></hr>
        <div className="view-all-container">
        </div>
        <div className="next-race-box">
        <p>Points are awarded to the top eight on the scale of:</p>
          <div className="next-race-tier-container">
            <div className="f1-prize-container">
            <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">points</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">P1</td>
      <td className="prize-data">10</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">P2</td>
      <td className="prize-data">8</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">P3</td>
      <td className="prize-data">6</td>
    </tr>
    <tr>
      <td className="prize-data">P4</td>
      <td className="prize-data">5</td>
    </tr>
    <tr>
      <td className="prize-data">P5</td>
      <td className="prize-data">4</td>
    </tr>
    <tr>
      <td className="prize-data">P6</td>
      <td className="prize-data">3</td>
    </tr>
    <tr>
      <td className="prize-data">P7</td>
      <td className="prize-data">2</td>
    </tr>
    <tr>
      <td className="prize-data">P8</td>
      <td className="prize-data">1</td>
    </tr>
  </table>
            </div>
          </div>
          <div>
          <Link to='/acc/register'><button className="tier-button">Register Now</button></Link>
          </div>
        </div>
</section>
</>
  )
}

export default ACCPrize
