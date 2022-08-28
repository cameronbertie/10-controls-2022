import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Prize.css'
import { Link } from 'react-router-dom'

function F1Prize () {
  return (
    <>
      <section className="next-race-container">
        <h2 className="next-race-heading">Prize Pool</h2>
        <hr className="header-row"></hr>
        <div className="view-all-container">
        </div>
        <div className="next-race-box">
        <p style={{ textAlign: 'left' }}>At the end of every season, THE TOP 5 DRIVERS OF TIER A, the top 4 drivers of tier b and the top 3 drivers of tier c WILL EARN A SHARE OF THE PRIZE POOL. The prize pool distribution runs as follows:</p>
          <div className="next-race-tier-container">
            <div className="f1-prize-container">
            <h2>Tier A</h2>
            <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">$ USD</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">P1</td>
      <td className="prize-data">$35</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">P2</td>
      <td className="prize-data">$15</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">P3</td>
      <td className="prize-data">$10</td>
    </tr>
    <tr>
      <td className="prize-data">P4</td>
      <td className="prize-data">$5</td>
    </tr>
    <tr>
      <td className="prize-data">P5</td>
      <td className="prize-data">$2.50</td>
    </tr>
  </table>
            </div>
            <div className="f1-prize-container">
            <h2>Tier B</h2>
            <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">$ USD</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">P1</td>
      <td className="prize-data">$20</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">P2</td>
      <td className="prize-data">$10</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">P3</td>
      <td className="prize-data">$5</td>
    </tr>
    <tr>
      <td className="prize-data">P4</td>
      <td className="prize-data">$2.50</td>
    </tr>
  </table>
            </div>
            <div className="f1-prize-container">
            <h2>Tier C</h2>
            <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">$ USD</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">P1</td>
      <td className="prize-data">$7.50</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">P2</td>
      <td className="prize-data">$5</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">P3</td>
      <td className="prize-data">$2.50</td>
    </tr>
  </table>
            </div>
          </div>
          <div>
          <Link to='/f1/register'><button className="tier-button">Register Now</button></Link>
          </div>
        </div>
</section>
</>
  )
}

export default F1Prize
