import React from 'react'
import '../App.css'
import '../stylesheets/F1RaceFormat.css'

function F1RaceFormat () {
  return (
    <>
      <section className="race-format-container">
  <h2>The Format</h2>
  <br></br>
  <p>THERE WILL BE TWO TIERS - TIER A AND TIER B</p>
  <br></br>
  <p>Both Tiers will run the same weekly scheduled races, for a total of 15 races every season, each race being short qualifying followed by a 50% race, except from sprint races.</p>
  <br></br>
  <h3>At the end of every season,</h3>
  <br></br>
  <p>The top 5 drivers of Tier A will earn a share of the prize-pool, which for Tier A runs as follows, from P1 to P5 respectively: $25, $10, $5, $2.50, and $1</p>
  <br></br>
  <p>The bottom 3 drivers of Tier A will be demoted to Tier B, and will be replaced by the top 3 drivers of Tier B, who will also earn a share of their own prize-pool</p>
  <br></br>
  <p>
The prize-pool for Tier B will run as follows, from P1 to P3 respectively: $5, $2.50 and $1.</p>
<br></br>
  <p>The bottom 5 of Tier B will have to take part in a series of race qualifiers against aspiring reserves to fight for their permanent seat on the grid</p>
</section>
</>
  )
}

export default F1RaceFormat
